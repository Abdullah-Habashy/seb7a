import React, { Component } from 'react';
class Sebha extends React.Component {

  state = {
    repeatedText: "Zikr from database",
    numberOfRepetition: 0,
    step: 1,
    colorHeader: "white",
    profilePicture:
      " https://images.pexels.com/photos/3023502/pexels-photo-3023502.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500 ",
      
  
  }

  imgStyle = {
    width: 100, height:100 , borderRadius:"100%"
  }

  countText(){
    return this.state.numberOfRepetition===0 ? "Zero" : this.state.numberOfRepetition
  }
  countButtonClass(){
    let classes = "btn btn-lg btn-"
    return classes += this.state.numberOfRepetition===0 ? "danger" : "success"
  }


  countButtonText(){
    let text = "Start Zikr";
    return  this.state.numberOfRepetition===0 ? text : "Continue"
  }


  handleIncrement = (step) => {

    this.setState({numberOfRepetition : this.state.numberOfRepetition + step})
  }

  header = () => {
    const x =  <h1>Sebha</h1>; // assign variable as html
    return x  // call function inside render html
  }
  render() { 
    return <div>

      
      <br />
      <h1 style={{fontSize: 30}} className='badge badge-primary m-2'>{this.header()}</h1>
      <span style={{fontSize: 25}} className='badge badge-warning m-2'>{this.countText()}</span>
      <br />
      <button style={{fontSize: 25, fontWeight: "bold"}} className={this.countButtonClass()} 
      onClick={() => this.handleIncrement(this.state.step)}>
        {this.countButtonText()}</button>
      <h2 className='badge badge-secondary m-2'>Total Azkar No: {this.props.Azkar.length}</h2>


    </div>;
  }
}
 
export default Sebha;