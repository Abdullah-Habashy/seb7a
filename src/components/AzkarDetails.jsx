import React, { Component } from "react";
import Sebha from "./Sebha";
import Zikr from "./Zikr";
class Azkar extends React.Component {


  

  render() {
    return (<div>
            <span style = {{fontSize: 40}}className='badge badge-primary'>Azkar Details</span>
            <br />
            <span className='badge badge-warning m-2'>Zikr count:{this.props.match.params.count}</span>
            <span className='badge badge-danger m-2'>Zikr id:{this.props.match.params.id}</span>
        </div>
    );
  }
}

export default Azkar;
