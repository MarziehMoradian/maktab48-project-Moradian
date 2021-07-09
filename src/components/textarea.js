import React,{useState} from 'react';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

export default function MinHeightTextarea() {
  const [text,setText] = useState("")
  return <TextareaAutosize aria-label="" minRows={3} style={{width:'80%',height:'100px',marginRight:'0.5rem'}}  />;
}