import React, { useState } from 'react'
import Markdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import '../userContribution/UserInput.css'
import remarkGfm from 'remark-gfm'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
// Did you know you can use tildes instead of backticks for code in markdown? 

export default function UserInput() {

  const [text, setText] = useState();

  return (<div className='markdown h-s'>
    <div className='markdown-input'>
      <textarea width="1000px" className='textinput-markdown ' placeholder='Write Your Text here' onChange={(e) => { setText(String(e.target.value)) }} />
    </div>
    <div className="markdown-container text-white">
      <Markdown
        children={text}
        remarkPlugins={[remarkGfm]}
        className='markdown-output'

        components={{
          code(props) {
            const { children, className, node, ...rest } = props
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
              <code {...rest} className={`code`} >
                {children}
              </code>
            )
          },
          blockquote(props) {
            return <blockquote {...props} className="blockquote" />
          },
          ul(props) {
            return <ul {...props} className="unordered-list" />
          },
          ol(props) {
            return <ol {...props} className="ordered-list" />
          },
          a(props){
            return <a {...props} className='anchor'/>
          }
          
        }}
      />
    </div>
  </div>
  )
}

