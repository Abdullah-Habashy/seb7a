import React, { Component } from "react";
class Zikr22 extends Component {
    state = {
        inputValue: "123",
      };

  handleChange=(e)=> {
    const inputValue = e.currentTarget.value;

    this.setState({ inputValue });
  }

  render() {
    return (
      <div>
        <h1>Child</h1>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              value={this.state.inputValue}
              onChange={this.handleChange}
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>

          <button type="submit" class="btn btn-primary" onClick={()=> this.props.onPassing(this.state.inputValue)}>
            Submit
          </button>
        </form>
        <h1>{this.state.inputValue}</h1>
      </div>
    );
  }
}

export default Zikr22;
