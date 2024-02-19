import React, { useState } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "./UserInput.css";
import remarkGfm from "remark-gfm";

import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

import Auth from "../services/auth";
import { useForm } from "react-hook-form";

export default function UserInput() {
  const { register, handleSubmit } = useForm();

  const title = "first data";

  const featuredaimage = null;

  const [text, setText] = useState("hi");

  const content = String(text);

  
  const onSubmit = async (data) => {
    try {
      const data = await Auth.createPost(data).then(console.log("updated"));
    } catch (error) {}
  };

  return (
    <div className="markdown h-s">
      <div className="markdown-input">
        <textarea
          width="1000px"
          className="textinput-markdown "
          placeholder="Write Your Text here "
          {...register("data")}
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
            onClick={handleSubmit(onSubmit)}
            type="submit"
          >
            {" "}
            Submit
          </button>
     
        </div>
      </div>
    </div>
  );
}
