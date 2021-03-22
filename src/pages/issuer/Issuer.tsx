import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import 'pages/issuer/Issuer.scss'
import ReactJson from 'react-json-view';
import JSONEditor from 'components/editor/Editor';
import * as allVCs from 'utils/vc-data-examples/index'
import { merge } from 'lodash-es'


const removeProp = (obj: any, propToDelete: string) => {
  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (property === propToDelete) {
        delete obj[property];
      } else if (typeof obj[property] == "object") {
        removeProp(obj[property], propToDelete);
      }
    }
  }
  return obj
}

const initialiseVCData = (vcData:any) => {
  for (let vc in vcData) {
    vcData[vc] = vcData[vc].data
    vcData[vc] = removeProp(vcData[vc], '@type')
  }
  return vcData
  
}

  
const Issuer = () => {
  
  const allDATA: any = initialiseVCData(JSON.parse(JSON.stringify(allVCs)))
  const allVCCopy: any = JSON.parse(JSON.stringify(allVCs))
  const VCoptions = Object.keys(allDATA)

      const [sampleVCData, setsampleVCData] = useState<any>(allDATA['NameCredentialPersonV1'])
      const [VCtype, setVCtype] = useState('NameCredentialPersonV1')
      const [jsonTreeData, setjsonTreeData] = useState({})

    const jsonChange = (params: any) => {
      console.log(params)
      setsampleVCData(params)
    }

    const vcTypeChange = (params: any) => {
      console.log(params.target.value);
      setVCtype(params.target.value)
      setsampleVCData({...allDATA[params.target.value]})
    }

    const generateVC = () => {
      const payload = {
        type: VCtype,
        data: sampleVCData,
        holderDid: ''
      }

      setjsonTreeData(merge(allVCCopy[VCtype], payload))
    }


    return (
        <div className='tutorial'>

                <div className='tutorial__step'>
                    <Form.Group>
                      <Form.Label>Select VC Type</Form.Label>
                      <Form.Control as="select" custom onChange={vcTypeChange} value={VCtype}>
                        {VCoptions.map((el,inx) => <option key={inx}>{el}</option>)}
                      </Form.Control>
                    </Form.Group>

                    <p className='tutorial__step-text'>
                    <strong>Generate a VC</strong>
                    </p>
                    <JSONEditor value={sampleVCData} type={VCtype} onChange={jsonChange} />
                </div>

                <div className='tutorial__step'>
                    <Button onClick={generateVC}>Generate a VC</Button>
                </div>

            <div className="json-tree">
              <ReactJson 
              src={jsonTreeData || {}} 
              name={'Generated_VC'}
              />
            </div>
        </div>
    )
}

export default Issuer
