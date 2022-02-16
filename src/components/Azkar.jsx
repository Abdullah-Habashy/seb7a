import React, { Component } from "react";
import Sebha from "./Sebha";
import Zikr from "./Zikr";
class Azkar extends React.Component {
  render() {
    return (
      <div className="container">
        <div>
          {this.props.Azkar.map((zikr) => ( //mapping Azkar array in many zikr components
            <Zikr
              key={zikr.id}
              id={zikr.id}
              text={zikr.text}
              source={zikr.source}
              target={zikr.target}
              //zikr= {zikr} //you can pass the object itself instead of separate 5 properties
              onRemove={this.props.onRemove} //raise onRemove event
            ></Zikr>
          ))}
          
        </div>
      </div>
    );
  }
}

export default Azkar;
