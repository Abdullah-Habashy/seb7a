import React, { Component } from "react";
import Sebha from "./Sebha";
import Zikr from "./Zikr";
class AzkarDetails extends React.Component {


  

  render() {
    const {count, id} = this.props.match.params // destructuring 
    return (<div>
            <span style = {{fontSize: 40}}className='badge badge-primary'>Azkar Details</span>
            <br />
            <span className='badge badge-warning m-2'>Zikr count:{count}</span> 
            {/* receive parameter from route  */}
            
            <span className='badge badge-danger m-2'>Zikr id:{id}</span>
            {/* receive parameter from route  */}
        </div>
    );
  }
}

export default AzkarDetails;
