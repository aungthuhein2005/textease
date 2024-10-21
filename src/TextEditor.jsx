import React, { useRef } from "react";
import Toolbar from "./Toolbar";
import "./style.css";

const TextEditor = ({tools=['bold', 'italic', 'underline'],theme='light',fixed=true,onContentChange}) => {
    const editorRef = useRef(null);
  
    const handleInput = () => {
      const content = editorRef.current.innerHTML;
      if(onContentChange){
        onContentChange(content);
      }
    }
  
    return (
      <div className={`text-editor ${theme}`}>
        <Toolbar
          tools={tools}
          theme={theme}
          fixed={fixed}
        />
        <br />
        <div
          ref={editorRef}
          className={`editor ${theme}`}
          contentEditable
          suppressContentEditableWarning
          onInput={handleInput}
          placeholder="Compose something amazing..."
        ></div>
      </div>
    );
  };

export default TextEditor;
