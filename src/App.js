import React from "react";
import About from "./About";
import "./App.css";
import Contact from "./Contact";
import Home from "./Home";
import { User } from "./User";

function App(){
  return(
    <div className = "App">
      <h2>Welcome to ReactJS</h2>
      {/* <Home /> */}
      <About name = "Peter parker"/>
      <Contact 
        name = "Contact component" 
        age = "25"
      />
      
      { /*<User /> */}
    </div>
  )
}

export default App;