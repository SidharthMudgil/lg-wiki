import React, { useState} from 'react'
import Markdown from 'react-markdown'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import './UserInput.css'
import remarkGfm from 'remark-gfm'

import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'

import Auth from '../services/auth'




export default function UserInput() {

const title = 'first data';

  const featuredaimage=null;
  



    const [text,setText] =useState('hi');

      const content= String(text)

   // eslint-disable-next-line
//     const [serializedContent, setSerializedContent] = useState('');

//   // Function to serialize the content of a DOM element
//   function serializeElement(element) {
//     let serialized = '<' + element.tagName.toLowerCase();

//     // Serialize attributes
//     for (let attr of element.attributes) {
//       serialized += ' ' + attr.name + '="' + attr.value + '"';
//     }

//     serialized += '>';

//     // Serialize children recursively
//     for (let child of element.childNodes) {
//       if (child.nodeType === Node.TEXT_NODE) {
//         serialized += child.textContent;
//       } else if (child.nodeType === Node.ELEMENT_NODE) {
//         serialized += serializeElement(child);
//       }
//     }

//     serialized += '</' + element.tagName.toLowerCase() + '>';
//     return serialized;
//   }

// // Function to handle submit button click
// function handleSubmit() {
//   const divElement = document.getElementById('output');
//   if (divElement) {
//     const serializedContent = serializeElement(divElement);
//     setSerializedContent(serializedContent);
//     console.log(serializedContent)
//   }
// }

function handleSubmit(e) {
  e.preventDefault();
  try {
    Auth.createPost({title,content,featuredaimage}).then(console.log("updated"))    

  
  } catch (error) {
    throw error;
    
  }   
  
  


  return (
  <div className='markdown h-s'>
    <div className='markdown-input'>
<textarea  width="1000px" className='textinput-markdown ' placeholder='Write Your Text here'onChange={(e)=> {setText(String(e.target.value))}}/>
</div>
<div className="markdown-container"     id="output">
<Markdown
    children={text}
    remarkPlugins={[remarkGfm]}

    className='markdown-output text-white'

    components={{
      code(props) {
        const {children, className, node, ...rest} = props
        const match = /language-(\w+)/.exec(className || '')
        return match ? (
          <SyntaxHighlighter
            {...rest}
            PreTag="div"
            children={String(children).replace(/\n$/, '')}
            language={match[1]}
            style={vscDarkPlus}
            wrapLines={true}
          />
        ) : (
          <code {...rest} className={className} >
            {children}
          </code>
             )
            }
          }}
        />
         <div>    <button  className="text-white bg-red-300 p-2 rounded-lg" onClick={()=>{handleSubmit()}} > Submit</button>
         <div>{text}</div>
      </div>
     
        </div>
        </div>
  )
}
}
