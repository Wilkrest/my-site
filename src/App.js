  import React from 'react';
  import Navbar from "./Navbar";
  import About from "./About";
  import Education from "./Education";
  import Skills from "./Skills"

  import "./styles/styles.css"

  function App() {
    return (
      <>
        <Navbar/>
        <About/>
        <Education/>
        <Skills />
      </>
    );
  } 

  export default App;
  