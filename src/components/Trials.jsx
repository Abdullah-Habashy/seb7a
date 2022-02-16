import React, { Component } from "react";
class Trials extends Component {
  state = {
    account: {
      username: "",
      password: "",
    },
  };

  handleSubmit = (e) => {e.preventDefault();
    console.log("Submitted");};

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">username</label>
            <input
              value={this.state.account.username}
              onChange={this.handleChange}
              name="username"
              type="text"
              class="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Enter username"
              autoFocus
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label htmlFor="password">Password</label>
            <input
              value={this.state.account.password}
              onChange={this.handleChange}
              name="password"
              type="password"
              class="form-control"
              id="password"
              placeholder="Password"
            />
          </div>
          <div class="form-group form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        <h3>Welcome, {this.state.account.username}</h3>
        <h3>Your password is : {this.state.account.password}</h3>
      </div>
    );
  }
}

export default Trials;
