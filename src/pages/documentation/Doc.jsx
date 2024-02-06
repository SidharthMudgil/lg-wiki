import React from 'react';

import { useState } from "react"; 
import { Link, useSearchParams } from "react-router-dom";
import "./Doc.css";
import hljs from 'highlight.js';
import "highlight.js/styles/default.css";
import { useEffect } from "react"; 
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"; 
import { arta } from "react-syntax-highlighter/dist/esm/styles/hljs";

function Index(){
  useEffect(() => {
    hljs.highlightAll();
  },
  []);
}

const tt = `return object : BoundedMatcher<Object, Map>(Map::class.java) (
  override fun matchesSafely(map: Map): Boolean (
  return hasEntry(equalTo("STR"), itemTextMatcher).matches(map)
  }

  override fun describeTo(description: Description) {
  description.appendText("with item content:
  itemTextMatcher.describeTo(description)
      }
  }`;


const java = '';

function Doc() {

  const[codeLanguage, setCodeLanguage] = useState("kotlin");

  
  function toggleCodeLanguage(language) {
    setCodeLanguage(language);
  }


  return (
    <div>
         <div className="whole">
    <div className="dod">
            Step 1

    </div>
    <div>
    <p id="kkk">
            Lorem ipsum dolor sit amet consectetur. Sagittis non pharetra felis sodales nulla odio aliquet ut dui. Viverra faucibus faucibus nulla ullamcorper congue ultricies eget orci arcu. Id luctus mollis venenatis lectus in sed. Eu in ultrices ullamcorper ultricies. Sagittis posuere ut praesent risus ultrices nisl proin mauris sed.
            </p>
            </div>

















            <div className="dod">
              Step 2
            </div>
            <p id="kkk">
            Lorem ipsum dolor sit amet consectetur. Sagittis non pharetra felis sodales nulla odio aliquet ut dui. Viverra faucibus faucibus nulla ullamcorper congue ultricies eget orci arcu. Id luctus mollis venenatis lectus in sed. Eu in ultrices ullamcorper ultricies. Sagittis posuere ut praesent risus ultrices nisl proin mauris sed.
            </p>
    </div>
    <div>


            </div>



            <div className="map-container">
              
              <div className="j">
                
                <span>
                  <button onClick={() => toggleCodeLanguage("kotlin")}>Kotlin</button>{"    "}
                  <button onClick={() => toggleCodeLanguage("Java")}>{"   "}
                    Java
  
                  </button>
                </span>
  
                <>
  
          
            <SyntaxHighlighter  className="kllk" language={codeLanguage} style={codeLanguage === "kotlin" ? arta : arta}>
        {codeLanguage === "kotlin" ? tt : java}
      </SyntaxHighlighter>
                </>
            
              </div> 
             </div>



            <div className="dod">
              Step 3
            </div>
            <p id="kkk">
            Lorem ipsum dolor sit amet consectetur. Sagittis non pharetra felis sodales nulla odio aliquet ut dui. Viverra faucibus faucibus nulla ullamcorper congue ultricies eget orci arcu. Id luctus mollis venenatis lectus in sed. Eu in ultrices ullamcorper ultricies. Sagittis posuere ut praesent risus ultrices nisl proin mauris sed.
            </p>
    </div>

  )
}

export default Doc