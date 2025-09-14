import "./App.css";
import Navbar from "./Navbar";
import About from "./About";
import TextForm from "./TextForm";
import react, { useState } from "react";
function App() {


  const [mode, setMode] = useState("light")

  const toggleMode = () => {

    if (mode == "light") {

      setMode("dark");
      document.body.style.backgroundColor = 'grey';


    } else {

      document.body.style.backgroundColor = 'white';
      setMode("light");

    }

  }




  //functional based---->js which return -->jsx ->no state,stateless -> it uses react hook
  //class based compoent -> this keyboard--> leared in js

  // let greet =<b>Good Morning</b>;
  return (
    <>
      {/*  <nav>
        <li>home</li>
        <li>about</li>
        <li>content</li>
      </nav>

      <div className="container">

        <h1>
          hello {greet}
        </h1>
        <p className="bold">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
          suscipit reiciendis aliquid deserunt, officia at voluptatibus
          repudiandae maxime? Reiciendis sit in modi impedit expedita aspernatur
          nulla doloribus quaerat nobis voluptate?
        </p>
      </div> */}

      <Navbar title="My Qna" link="Linkink" mode={mode} toggleMode={toggleMode} />

      {<TextForm heading="enter the text" mode={mode} />}
      <About />
    </>
  );
}

export default App;
