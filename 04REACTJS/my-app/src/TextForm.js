import React, { useState } from "react";

export default function TextForm(props) {

const handleOnChange = (event) => {
   setText(event.target.value);
    console.log("on chnage");
  };

  const handleUpClick = () => {

   setText("you clicked on handle click"+ );
    console.log("uper case was clicked");
  };



  const [text, setText] = useState("Enter text Here");

  //setText("new text");
  //console.log(text);
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <label for="exampleFormControlTextarea1" className="form-label">
          Example textarea
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleOnChange}
        >
          {props.heading}
        </textarea>
      </div>

      <button className="btn btn-primary" onClick={handleUpClick}>
        convert
      </button>
    </div>
  );
}
