import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import './Doc.css';
import hljs from 'highlight.js';
import 'highlight.js/styles/default.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { arta } from 'react-syntax-highlighter/dist/esm/styles/hljs';


import jsonData from './data.json';


function Index() {
  useEffect(() => {
    hljs.highlightAll();
  }, []);
}


function Doc() {

  const [codeLanguage, setCodeLanguage] = useState('kotlin');
  const [steps, setSteps] = useState([]);

  
  useEffect(() => {
    setSteps(jsonData.steps);
  }, []);

  
  function toggleCodeLanguage(language) {
    setCodeLanguage(language);
  }

  return (
    <div>
      <div className="whole">
    
        {steps.map((step, index) => (
          <div key={index} className="dod">
            <p id={`step-${index}`}>{step.title}</p>
            <p>{step.content}</p>
          </div>
        ))}

    
        <div className="map-container">
          <div className="j">
            <span>
              <button onClick={() => toggleCodeLanguage('kotlin')}>Kotlin</button>
              {'    '}
              <button onClick={() => toggleCodeLanguage('Java')}>Java</button>
            </span>
            <SyntaxHighlighter className="kllk" language={codeLanguage} style={arta}>
              {codeLanguage === 'kotlin' ? jsonData.kotlinCode : jsonData.javaCode}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Doc;
