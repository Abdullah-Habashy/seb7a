import React, { Component } from "react";
class childOfMysebha extends Component {
  render() {
    return (
      <div>
          <h1>Child of My Sebha</h1>
        <button className="btn btn-warning" onClick={() => this.props.onReceive ("Text from child")}>Pass from child</button>
      </div>
    );
  }
}

export default childOfMysebha;
