import React, { Component } from "react";
import Zikr22 from "./Zikr22";
class Zikr2 extends React.Component {
  state = {
   text : ""
  };

  handleUpdateText=(text)=>{
    this.setState({text})

  }
  render() {
    
    return (
      <div>
        <h1>Parent </h1>
        <h1>Text From child:{this.state.text} </h1>
        <Zikr22 onPassing = {this.handleUpdateText}/>
      </div>
    );
  }
}

export default Zikr2;
