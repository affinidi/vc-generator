import { FC } from 'react'
import { JsonEditor as Editor } from 'jsoneditor-react'
import 'jsoneditor-react/es/editor.min.css'

type JSONEditorProps = {
  value: any
  type: string
  mode?: 'tree' | 'view' | 'form' | 'code' | 'text'
  onChange: (value: any) => void
  onError?: (err: Error) => void
}

const JSONEditor: FC<JSONEditorProps> = (props) => {
  return <Editor {...props} key={props.type} mode="form"/>
}

export default JSONEditor
