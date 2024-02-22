import React, { useEffect, useState } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "./UserInput.css";
import remarkGfm from "remark-gfm";

import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import Auth from "../services/auth";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Upload from "../services/uplaod";
import uploadService from "../services/uplaod";


export default function UserInput() {

  const featuredaimage = "null";


  const [text, setText] = useState();
  const [title, settitle] = useState();
  const [ImageUrl, setImageUrl] = useState("");
console.log(ImageUrl);

  const content = String(text);
  const extractImageUrl = (markdownText) => {
    const imageRegex = /!\[.*?\]\((.*?)\)/;
    const match = markdownText.match(imageRegex);
    if (match && match.length > 1) {
      const url = match[1];
      setImageUrl(url);
      console.log("Image URL:", url);
    }
  };



 
  
  const onSubmit = async () => {
    const userData =  await Auth.getCurrentUser()
    const userID=userData.$id
    try {
      console.log("Submitting:", title, text);
      await uploadService.createPost({ title, markdown: text, userID });
      
      console.log("Submitted successfully");
    } catch (error) {
      console.error("Error submitting:", error);
    }

    // const fetch = await uploadService.getPosts();
    // const data = await fetch.json(); // Parse JSON if applicable
    // console.log(data.map((item) => item));

  };

  return (<>
   
    <div className="markdown h-s">
 
      <div className="markdown-input">
      <input type="text "  className="title-input" placeholder="Add your title here only " onChange={(e)=>settitle(String(e.target.value))}  />
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
              extractImageUrl(props.alt);
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
