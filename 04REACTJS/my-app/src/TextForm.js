import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
    console.log("on chnage");
  };

  const handleUpClick = () => {
    //setText("you clicked on handle click" + text);

    let newText = text.toUpperCase();

    setText(newText);
    console.log("uper case was clicked");
  };

  const handleLowClick = () => {
    // console.log("upper case was clicked" +text);
    let newText = text.toLowerCase();
    // setText("You clicked on hanndleupclick")
    setText(newText);
    props.showAlert("Converted to Lower Case", "warning");
  };

  const handleDelete = () => {
    setText("");
  };

  const [text, setText] = useState("Enter text Here");

  //setText("new text");
  //console.log(text);

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >

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
            style={{
              color: props.mode == 'dark' ? 'white' : 'black',
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          >
            {props.heading}
          </textarea>
        </div>

        <button className="btn btn-primary" onClick={handleUpClick}>
          toUpperCae
        </button>

        <button className="btn btn-primary" onClick={handleLowClick}>

          toLowerCase
        </button>




        <button
          type="button"
          class="btn btn-secondary mx-4"
          onClick={handleDelete}
        >
          Secondary
        </button>
      </div>
      <div>
        <div className="container my-4"
          style={{ color: props.mode == 'dark' ? 'white' : 'black' }}></div>

        <h1>your text summary</h1>
        <p>
          {text.split(" ").length} word and {text.length} characters
        </p>
        <p> {0.008 * text.split(" ").length} minutes read</p>
      </div>

      <h2>preview</h2>
      <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
    </>
  );
}
