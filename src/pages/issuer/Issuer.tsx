import React, {useContext, useState} from 'react';
import AppContext from 'context/app';
import {Button, Form, FormControl, FormGroup, FormLabel} from 'react-bootstrap';
import ApiService from 'utils/apiService';
import {UnsignedW3cCredential, W3cCredential} from 'utils/apis';
import 'pages/issuer/Issuer.scss'
import ReactJson from 'react-json-view';
import JSONEditor from 'components/editor/Editor';
import * as allVCs from 'utils/vc-data-examples/index'
import { merge } from 'lodash-es'

interface State {
    currentUnsignedVC: UnsignedW3cCredential | null,
    currentSignedVC: W3cCredential | null,
    isCurrentVCVerified: boolean,
}

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

    const [state, setState] = useState<State>({
        currentUnsignedVC: null,
        currentSignedVC: null,
        isCurrentVCVerified: false
      })
      const {appState} = useContext(AppContext);
      const [inputDID, setinputDID] = useState(appState.didToken || '')
      const [sampleVCData, setsampleVCData] = useState<any>(allDATA['NameCredentialPersonV1'])
      const [VCtype, setVCtype] = useState('NameCredentialPersonV1')
    
      /**
       * Function for issuing an unsigned VC.
       * */
      const issueUnsignedVC = async () => {
        try {

          const payload = {
            type: VCtype,
            data: sampleVCData,
            holderDid: inputDID || appState.didToken || ''
          }

          console.log(merge(allVCCopy[VCtype], payload));
          
      
            const {unsignedVC} = await ApiService.issueUnsignedVC(merge(allVCCopy[VCtype], payload));
      
            setState({
              ...state,
              currentUnsignedVC: unsignedVC,
              currentSignedVC: null,
              isCurrentVCVerified: false
            })
      
            alert('Unsigned VC successfully created.');
        } catch (error) {
          ApiService.alertWithBrowserConsole(error.message);
        }
      }
    
      /**
       * Function for signing an unsigned VC.
       * */
      const signVc = async () => {
        try {
          if( state.currentUnsignedVC ) {
            const {signedCredential} = await ApiService.signVC({
              unsignedCredential: state.currentUnsignedVC
            });
    
            setState({
              ...state,
              currentSignedVC: signedCredential
            })
    
            alert('Unsigned VC successfully signed.');
          }
          else {
            alert('No unsigned VC found. Please create one and try again.')
          }
        } catch (error) {
          ApiService.alertWithBrowserConsole(error.message);
        }
      }

      const onDidValueChange = (value: string) => {
        setinputDID(value)
      }

    const jsonChange = (params: any) => {
      console.log(params)
      setsampleVCData(params)
    }

    const vcTypeChange = (params: any) => {
      console.log(params.target.value);
      setVCtype(params.target.value)
      setsampleVCData({...allDATA[params.target.value]})
    }


    return (
        <div className='tutorial'>
            {/* <div className='tutorial__column tutorial__column--issuer'>
                <h3 className='tutorial__column-title'>Issuer</h3>
                <div className='tutorial__column-steps'> */}
                <div className='tutorial__step'>
                  {/* <AffinidiVCTypeSelectList setCredentialRequirements={()=>{}} /> */}
                    <Form.Group>
                      <Form.Label>Select VC Type</Form.Label>
                      <Form.Control as="select" custom onChange={vcTypeChange} value={VCtype}>
                        {VCoptions.map((el,inx) => <option key={inx}>{el}</option>)}
                      </Form.Control>
                    </Form.Group>

                    <p className='tutorial__step-text'>
                    {/* <strong>Step 1:</strong>  */}
                    <strong>Issue unsigned VC</strong>
                    {/* <Button 
                    style={{float: 'right'}}
                    onClick={e => resetToDefaults()}
                    >Reset to defaults</Button> */}
                    </p>
                    <FormGroup
                      style={{margin: '30px 0'}}
                    >
                    <FormLabel>Enter VC data:</FormLabel>
                    <JSONEditor value={sampleVCData} type={VCtype} onChange={jsonChange} />
                    {/* <FormControl
                      as="textarea"
                      rows={15}
                      placeholder="Enter VC data"
                      aria-label="Verifiable Credential"
                      aria-describedby="basic-addon1"
                      value={VCschemaData}
                      onChange={e => onVCschemaDataChange(e.target.value)}
                    /> */}
                    </FormGroup>
                    <FormGroup
                      style={{margin: '30px 0'}}
                    >
                    <FormLabel>Receiver DID:</FormLabel>
                    <FormControl
                      as="textarea"
                      rows={3}
                      placeholder="Receiver DID"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                      value={inputDID}
                      onChange={e => onDidValueChange(e.target.value)}
                    />
                    </FormGroup>
                    <Button onClick={issueUnsignedVC}>Issue unsigned VC to 
                    {
                      inputDID === appState.didToken ? ' self' : ' another did'
                    }
                    </Button>
                </div>
                <div className='tutorial__step'>
                    <span className='tutorial__step-text'>
                    {/* <strong>Step 2:</strong>  */}
                    <strong>Sign the unsigned VC</strong>
                    </span>
                    <Button onClick={signVc}>Sign unsigned VC</Button>
                </div>
                {/* </div>
            </div> */}
            <div className="json-tree">
              <ReactJson 
              src={state.currentSignedVC || state.currentUnsignedVC || {}} 
              name={(state.currentSignedVC && 'Signed VC') || (state.currentUnsignedVC && 'Unsigned VC') || '-empty-' }
              />
            </div>
        </div>
    )
}

export default Issuer
