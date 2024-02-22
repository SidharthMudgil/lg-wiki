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


  const [text, setText] = useState("hi");
  const [title, settitle] = useState("hi");


  const content = String(text);


 
  
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

  return (
    <div className="markdown h-s">
      <input type="text"  onChange={(e)=>settitle} />
      <div className="markdown-input">
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
          }}
        />
        <div>
          {" "}
          <button
            className="text-white bg-red-300 p-2 rounded-lg"
            onClick={onSubmit}
           
          >
            {" "}
            Submit
          </button>
     
        </div>
      </div>
    </div>
  );
}
