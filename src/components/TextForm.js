import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    const newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };
  const handleLowClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };
  const handleClearClick = () => {
    const newText = "";
    setText(newText);
    props.showAlert("Text cleared", "success");
  };
  const handleCopyClick = () => {
    // let copyText = document.getElementById('myBox');
    // // copyText.select();
    // navigator.clipboard.writeText(copyText.value);
    // document.getSelection().removeAllRanges();

    navigator.clipboard.writeText(text);
    props.showAlert("Copied to clipboard", "success");
  };
  const handleSpaceClick = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed", "success");
  };
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2 className="mb-4">{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            placeholder="Enter Text Here"
            style={{
              // backgroundColor : (props.mode==='light'?'white':'#19191a'),
              // color : (props.mode==='light'?'black':'white')
              backgroundColor:
                props.theme != null
                  ? props.theme
                  : props.mode === "light"
                  ? "white"
                  : "#19191a",
              color:
                props.themeFontColor != null
                  ? props.themeFontColor
                  : props.mode === "light"
                  ? "black"
                  : "white",
            }}
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSpaceClick}>
          Remove extra spaces
        </button>
        <button disabled={text.length===0} className="btn btn-danger mx-1 my-1" onClick={handleClearClick}>
          Clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h3>Your text summary</h3>
        <p>
          {/* {text.split(" ").length} words, {text.length} characters */}
          {/* {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} characters */}
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h4>Preview</h4>
        <p>
          {text.length > 0
            ? text
            : "Nothing to priview!"}
        </p>
      </div>
    </>
  );
}