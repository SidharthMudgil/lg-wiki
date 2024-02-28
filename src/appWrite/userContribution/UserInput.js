import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "./UserInput.css";
import remarkGfm from "remark-gfm";
import axios from "axios";


import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeSanitize from "rehype-sanitize";
import MarkdownPreview from '@uiw/react-markdown-preview';

import Auth from "../services/auth";
// import { useForm } from "react-hook-form";
// import { useSelector } from "react-redux";
// import Upload from "../services/uplaod";
import uploadService from "../services/uplaod";
import { useNavigate } from "react-router-dom";


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



  const content = String(text);

 
  
  const onSubmit = async () => {
  
    if(content!=null && title!=null && email!=null){

    try {
      
         await uploadService.createPost({ title, markdown: text, userID:email }).then() ;
         const data = { email };
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
                <code {...rest} className={className}>
                  {children}
                </code>
              );
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