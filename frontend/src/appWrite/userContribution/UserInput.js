import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "./UserInput.css";
import remarkGfm from "remark-gfm";
import axios from "axios";
import TurndownService from 'turndown';
import { marked } from 'marked';
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeSanitize from "rehype-sanitize";
import MarkdownPreview from '@uiw/react-markdown-preview';

import Auth from "../services/auth";
// import { useForm } from "react-hook-form";
// import { useSelector } from "react-redux";
// import Upload from "../services/uplaod";
import uploadService from "../services/uplaod";
import { useNavigate } from "react-router-dom";
import markdownit from 'markdown-it'

const rehypePlugins = [rehypeSanitize];
export default function UserInput() {

  const featuredaimage = "null";

  const navigate = useNavigate();
  const [text, setText] = useState();
  const [title, settitle] = useState();
  const [email, setEmail] = useState();
  const [ImageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState(null); // Stores server response or error message

  const fileurl = async (content, file, email) => {
    const md = markdownit();
   
    const htmlContent = md.render(content);
    const imageRegex = /<img src="([^"]+)"[^>]*>/g;
    const imageUrls = [];
    
    let match;
    while ((match = imageRegex.exec(htmlContent))) {
      imageUrls.push(match[1]);
    }
  
    return await processContent(htmlContent, imageUrls, file);
  };
  
  const processContent = async (htmlContent, imageUrls, file) => {
    let processedContent = htmlContent;
  
    for (let i = 0; i < file.files.length; i++) {
      const uploadedFile = await uploadService.uploadFile(file.files[i]);
      
  
      if (uploadedFile !== null) {
        const result = await uploadService.filepreview(uploadedFile.$id);
        processedContent = processedContent.replace(imageUrls[i], result);
      }
    }
  
    return processedContent;
  };

  const backToMarkdown = (htmldata)=>{
    const turndown = new TurndownService();

    // Add the GFM plugin to support code language blocks
    turndown.addRule('codeBlock', {
      filter: ['pre'],
      replacement: function (content, node) {
        const className = node.firstChild && node.firstChild.className;
        if (className && className.startsWith('language-')) {
          const language = className.replace('language-', '');
          return '```' + language + '\n' + content + '```';
        }
        return '\n```\n' + content + '\n```\n';
      }
    });
      const backMarkdown  = turndown.turndown(htmldata);
    return backMarkdown;
  }

  
  const onSubmit = async () => {
    const content = String(text);
    if(content!=null && title!=null && email!=null){
    
     

    try {
          const file=document.getElementById("file");
           const replacemarkdown = await fileurl(content,file,email);

            const markdownContent = backToMarkdown(replacemarkdown);


//  console.log(markdownContent); debugging
         
         await uploadService.createPost({ title, markdown: markdownContent, userID:email }).then() ;
         const data = { email,text:markdownContent };
         const response = await axios.post("http://localhost:3001/api/email", data);
         setResponse(response.data); // Set success message
       alert("Submitted successfully");
       setEmail(null);
       setText(null);
       settitle(null);

    } catch (error) {
      setResponse({ error: error.message }); 
      alert(" Error submitting");
      console.error("Error submitting:", error);
    }
    finally {
      setIsSubmitting(false); // Reset loading state
    }

  
  }else{
    alert("fill the title and content filed ");
  }
};


  return (<>

    <div className="markdown h-s">
    
      <div className="markdown-input">
      <input type="text "  className="title-input" placeholder="Add your title here only " onChange={(e)=>settitle(String(e.target.value))} required  />
      <input type="file" id="file" multiple/>
      <input type="text "  className="title-input" placeholder="Add your email here only " onChange={(e)=>setEmail(String(e.target.value))} required  />
        <textarea
          width="1000px"
          className="textinput-markdown "
          placeholder="Write Your Text here "
  
          onChange={(e) => {
            setText(String(e.target.value));
          }}
        />
      </div>
      <div className="markdown-container" id="output">
      {/* <MarkdownPreview source={text} rehypePlugins={rehypePlugins}  className="markdown-output text-white" /> */}
        <Markdown
          children={text}
          remarkPlugins={[remarkGfm]}
          className="markdown-output text-white"
          components={{
            code(props) {
              const { children, className, node, ...rest } = props;
              const match = /language-(\w+)/.exec(className || "");
              return match ? (
                <SyntaxHighlighter
                  {...rest}
                  PreTag="div"
                  children={String(children).replace(/\n$/, "")}
                  language={match[1]}
                  style={vscDarkPlus}
                  wrapLines={true}
                />
              ) : (
                <code {...rest} className={`code`}>
                  {children}
                </code>
              );
            },
            blockquote(props) {
              return <blockquote {...props} className="blockquote" />
            },
            ul({ node, ...props }) {
              return <ul {...props} />;
            },
            img: ({ node, ...props }) => {
           
              return <img {...props} />;
            },
            li({ node, ...props }) {
              return <li {...props} />;
            },
          }}
        />
        {/* <input 
        type="file" 
        onChange={(e) => {
          const imagePath = URL.createObjectURL(e.target.files[0]); // Get the image path
          setImagePath(imagePath); // Update the state with image path
        }} 
      /> */}
        <div>

          <button
            className="submit-button "
            onClick={onSubmit}
           
          >
           
            Submit
          </button>
     
        </div>
      </div>
    </div>
    </>
  );
}