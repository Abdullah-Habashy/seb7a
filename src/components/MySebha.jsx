import React, { Component } from "react";
import Azkar from "./Azkar";
import Zikr from "./Zikr";
import Sebha from "./Sebha";
import NewZikrForm from "./NewZikrForm";
class MySebha extends React.Component {
  state = {
    Azkar: [
      { id: 1, text: "Zikr 1", source: "source 1", target: 100 },
      { id: 2, text: "Zikr 2", source: "source 2", target: 7 },
      { id: 3, text: "Zikr 3", source: "source 3", target: 30 },
      { id: 4, text: "Zikr 4", source: "source 4", target: 3 },
    ],
  };

  handleRemove = (counterId) => {
    console.log("handle remove called", counterId);
    let Azkar = this.state.Azkar.filter((c) => c.id !== counterId);
    this.setState({ Azkar });
  };

  receiveFromChild = (text) => {
    console.log(text);
  };

  handleAddition=(newZikr)=>{
    console.log("Handle addition called");
    let Azkar = [...this.state.Azkar, newZikr];
    this.setState({Azkar})

  }
  render() {
    return (
      <div>
        <Sebha Azkar={this.state.Azkar}></Sebha>
        <Azkar Azkar={this.state.Azkar} onRemove={this.handleRemove}>
          <Zikr></Zikr>
          <h1>My sebha</h1>
        </Azkar>
        <NewZikrForm
        Azkar={this.state.Azkar}
        onAddition={this.handleAddition}
        />


      </div>
    );
  }
}

export default MySebha;
