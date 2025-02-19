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

  console.log(props.themeFontColor);

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>{props.heading}</h1>
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
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleSpaceClick}>
          Remove extra spaces
        </button>
        <button className="btn btn-danger mx-1" onClick={handleClearClick}>
          Clear text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          {/* {text.split(" ").length} words, {text.length} characters */}
          {text.trim() === "" ? 0 : text.trim().split(/\s+/).length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter something in to the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
