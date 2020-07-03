  import React from 'react';
  import Navbar from "./Navbar";
  import About from "./About";
  import Education from "./Education";
  import Skills from "./Skills"
  import Thanks from "./Thanks"

  import "./styles/styles.css"

  class App extends React.Component { 

    constructor(props){
      super(props);

      this.handleScroll = this.handleScroll.bind(this);
    }

    handleScroll(){
      console.log("it's working")
    }


    render(){
      return (
        <>
          <Navbar/>
            <div className="resume" id="resume">
              <About/>
              <Education/>
              <Skills/>
              <Thanks/>
            </div>
        </>
      );
    }
  } 

  export default App;
  