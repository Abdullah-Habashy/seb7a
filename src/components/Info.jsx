import React, { Component } from "react";
import { handleIncrement } from "./Sebha";
class Info extends React.Component {
  state = {
    count: 0,
  };


  
  render() {
  let {count} = this.state
  const {text, source, target} = this.props

    return (
      <div>
        <h1>Zikr Details : </h1>
        <h1>Source : </h1>
      </div>
    );
  }
}

export default Info;
