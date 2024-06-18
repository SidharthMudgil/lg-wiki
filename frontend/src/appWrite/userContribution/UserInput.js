import React, { useState } from "react";
import Markdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import "./UserInput.css";
import remarkGfm from "remark-gfm";
import axios from "axios";
import TurndownService from "turndown";
import { alertfun } from "../../appWrite/fun";

import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

// import MarkdownPreview from "@uiw/react-markdown-preview";

import uploadService from "../services/uplaod";
import { useNavigate } from "react-router-dom";

import markdownit from "markdown-it";

export default function UserInput() {
  const navigate = useNavigate();

  const [text, setText] = useState();
  const [title, settitle] = useState();
  const [email, setEmail] = useState();
  const [userName, setuserName] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  // eslint-disable-next-line
  const [response, setResponse] = useState(null); // Stores server response or error message
  // eslint-disable-next-line
  const [preview, setpreview] = useState();
  const imageID = [];

  // replacing img with appwrite image link
  const fileurl = async (content, file, email) => {
    const md = markdownit();

    const htmlContent = md.render(content);
    const imageRegex = /<img src="([^"]+)"[^>]*>/g;
    const imageUrls = [];

    let match;
    while ((match = imageRegex.exec(htmlContent))) {
      imageUrls.push(match[1]);
    }
    if (imageUrls.length === 0) {
      // console.log("not file");
      return await content;
    } else {
      // console.log("file");
      const markdownContent = backToMarkdown(
        await processContent(htmlContent, imageUrls, file)
      );
      return markdownContent;
    }
  };

  // getting file for upload to appwrite
  const processContent = async (htmlContent, imageUrls, file) => {
    let processedContent = htmlContent;
    const maxSize = 1 * 1024 * 1024; // 10 MB in bytes

    let filecheck = null; // Initialize filecheck outside the loop

    for (let i = 0; i < file.files.length; i++) {
      const files = file.files[i];
      if (files.size > maxSize) {
        alertfun("main_mark",
          `File "${files.name}" exceeds the maximum size limit of 1MB. Please re-select all files.`
        );
        return null; // Exit the function
      } else {
        filecheck = files; // Assign the file to filecheck if it's within the limit
      }
    }
    if (filecheck !== null && file.files.length > 0) {
      for (let i = 0; i <imageUrls.length; i++) {
        try {
          const uploadedFile = await uploadService.uploadFile(file.files[i]);

          if (uploadedFile !== null) {
            imageID.push(uploadedFile.$id);

            const result = await uploadService.filepreview(uploadedFile.$id);
            processedContent = processedContent.replace(
              new RegExp(`src=["']${imageUrls[i]}["']`),
              `src="${result}"`
            );
          }
        } catch (error) {
          alertfun("main_mark","Error uploading or processing file:"+ error);
          // Handle error (e.g., show an error message to the user)
        }
      }
    }

    return processedContent;
  };
  // const processImage = (imageUrls, newImages, htmlContent) => {
  //   for (let j = 0; j < newImages.length; j++) {
  //     htmlContent = htmlContent.replace(
  //       new RegExp(`src=["']${imageUrls[j]}["']`, "g"),
  //       `src="${newImages[j]}"`
  //     );
  //   }
  //   const markdownContent = backToMarkdown(htmlContent);
  //   setpreview(markdownContent); // Assuming setpreview is defined somewhere
  // };

  const loadImageAsync = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        // console.log("File loaded:", file.name); // Debug
        resolve(event.target.result);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  const imagepreview = async () => {
    const fileInput = document.getElementById("file");
    const files = Array.from(fileInput.files);
    const content = String(text); // Assuming text is defined somewhere
    const md = markdownit();

    const htmlContent = md.render(content);
    const imageRegex = /<img src="([^"]+)"[^>]*>/g;
    const imageUrls = [];

    let match;
    while ((match = imageRegex.exec(htmlContent))) {
      imageUrls.push(match[1]);
    }

    let imageProcessed = htmlContent;
    const maxSize = 1 * 1024 * 1024; // 1 MB in bytes

    const promisesArray = files.map(async (currentFile) => {
      if (currentFile.size > maxSize) {
        alertfun("main_mark",
          `File "${currentFile.name}" exceeds the maximum size limit of ${
            maxSize / 1024 / 1024
          }MB. Please re-select files.`
        );
        return null;
      }

      try {
        return await loadImageAsync(currentFile);
      } catch (error) {
        console.error("Error loading image:", error);
        return null;
      }
    });

    const newImages = await Promise.all(promisesArray);

    newImages.forEach((newImage, index) => {
      const imageUrl = imageUrls[index];
      const regex = new RegExp(`src=["']${imageUrl}["']`);
      imageProcessed = imageProcessed.replace(regex, `src="${newImage}"`);
    });

    var previewElement = document.getElementById("preview");

    var processedElement = document.createElement("div");
    processedElement.classList.add("pop-up");

    processedElement.innerHTML = imageProcessed;
    var processedremove = document.createElement("div");
    processedremove.classList.add("close-button");
    processedremove.addEventListener("click", () => {
      previewElement.style.display = "none";
      previewElement.innerHTML = "";
    });

    processedremove.innerHTML = "close";
    previewElement.innerHTML = "";
    var textPreview = document.createElement("div");
    textPreview.classList.add("text-preview");

    textPreview.innerHTML = "only for image preview";

    previewElement.appendChild(textPreview);
    previewElement.appendChild(processedElement);
    previewElement.appendChild(processedremove);
    previewElement.style.display = "block";
    const pretags = document.querySelectorAll(".preview pre");

    pretags.forEach((preTag) => {
      const codeElement = preTag.querySelector("code");
      if (codeElement) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("pre");
        preTag.appendChild(newDiv);
        newDiv.appendChild(codeElement);
      }
    });

    hljs.highlightAll();

    // setpreview(htmlContent); // Update the preview with processed content
    // console.log(imageProcessed);
    return imageProcessed;
  };

  //converting html fromat to markdown to store
  const backToMarkdown = (htmldata) => {
    const turndown = new TurndownService();

    // Add the GFM plugin to support code language blocks
    turndown.addRule("codeBlock", {
      filter: ["pre"],
      replacement: function (content, node) {
        const className = node.firstChild && node.firstChild.className;
        if (className && className.startsWith("language-")) {
          const language = className.replace("language-", "");
          return "```" + language + "\n" + content + "```";
        }
        return "\n```\n" + content + "\n```\n";
      },
    });
    const backMarkdown = turndown.turndown(htmldata);
    return backMarkdown;
  };

  const onSubmit = async () => {
    const content = String(text);
    if (content !== "" && title !== "" && email !== "" && userName !== "") {
      try {
        setIsSubmitting(true);
        const file = document.getElementById("file");
        const markdownContent = await fileurl(content, file, email);
        // console.log(replacemarkdown);  //debugging

         console.log(markdownContent);// debugging

        await uploadService
          .createPost({
            title,
            markdown: markdownContent,
            userID: email,
            userName: userName,
            imageID: imageID,
          })
          .then();
        const data = { email, title: title };
        const response = await axios.post(
          "https://lg-wiki-back.onrender.com/api/email",
          data
        );
        setResponse(response.data); // Set success message
       
        setEmail("");
        setText("");
        settitle("");
        setIsSubmitting(false);
            alertfun("main_mark","Submitted successfully");
        setTimeout(() => {
          
          navigate("/")
        }, 3000);
         
      
      } catch (error) {
        if (error.response && error.response.status) {
          // If the error object contains a response with a status code
          const statusCode = error.response.status;
          setResponse({ error: `Error submitting: ${statusCode}` });
          alertfun("main_mark",`Error submitting: ${statusCode}`);
        } else {
          // If the error object doesn't contain a response with a status code
          setResponse({ error: error.message });
          alertfun("main_mark","Error submitting  data");
        }
        console.error("Error submitting:", error);
      } finally {
        setIsSubmitting(false); // Reset loading state
      }
    } else {
   
      alertfun("main_mark","fill the title and content filed")
    }
  };

  return (
    <>
   
      <div id="preview" className="preview">
        {/* <p class="close-button"  onClick={()=>document.getElementById("preview").style.display = "none"}>close</p> */}
      </div>
      
      <div className="markdown h-s" id="main_mark">
        <div className="markdown-input">
          <input
            type="text "
            className="title-input"
            placeholder=" Your  Title  "
            onChange={(e) => settitle(String(e.target.value))}
            required
          />
          <input
            type="text "
            className="title-input"
            placeholder=" Your  Name   "
            onChange={(e) => setuserName(String(e.target.value))}
            required
          />

          <label htmlFor="file" className="file-icon">
            <i className="fas fa-file"></i>
            <input
              type="file"
              id="file"
              multiple
              accept=".jpg, .jpeg, .png"
              style={{ display: "none" }}
            />
          </label>

          <input
            type="text "
            className="title-input"
            placeholder=" Your  Email  "
            onChange={(e) => setEmail(String(e.target.value))}
            required
          />
          <textarea
            width="1000px"
            className="textinput-markdown "
            placeholder="Write Your Text here in markdown format "
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
                return <blockquote {...props} className="blockquote" />;
              },
              ul({ node, ...props }) {
                return <ul {...props} />;
              },
              img: ({ node, ...props }) => {
                return <img alt={node.alt} {...props} />;
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
        /> */}</div>
          <div>
            <button
              className="submit-button "
              onClick={onSubmit}
              disabled={isSubmitting}
            >
              {isSubmitting ? "submitting" : "Submit"}
            </button>
            <button className="preview-button " onClick={imagepreview}>
              preview
            </button>
          </div>
     
      </div>
      
    </>
  );
}
