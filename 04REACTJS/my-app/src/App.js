import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import TextForm from "./TextForm";
function App() {
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

      <Navbar title="My Qna" link="Linkink" />

      <TextForm heading="enter the text" />
    </>
    //there is error if remove this unlike html
  );
}

export default App;
