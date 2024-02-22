import React, { useState } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "../docs/DynamicTitle.css";
import remarkGfm from "remark-gfm";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function DynamicTitle(props) {
    const title=props.conTitle;
  const content =props.data;
  return (
    <div className="dynamic-container">
        <div className="dynamic-title" >{title}</div>
      <Markdown
        children={content}
        remarkPlugins={[remarkGfm]}
        className="dynamic-output "
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
              <code {...rest} className="code">
                {children}
              </code>
            );
          },ul({ node, ...props }) {
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
    </div>
  );
}
