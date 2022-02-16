import React, { Component } from "react";
import Input from "./input";

class ContactForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {},
  };

  validate = () => {
    const errors = {}; // create errors object
    const { account } = this.state; // destructuring
    if (account.username.trim() === "") 
    errors.username = "Username required"; // validate username + add peoperty to errors object
    if (account.password.trim() === "") 
    errors.password = "Password required"; // validate username + add peoperty to errors object
    return Object.keys(errors).length === 0 ? null : errors; // return errors object if exsists
  }

  handleSubmit = (e) => {
    e.preventDefault(); // prevent reload

    const errors = this.validate(); // receive errors object from validate ()
    console.log(errors); // monitor errors
    this.setState({errors : errors || {} }); // update errors object
    if (errors) return; // to stop compiling here if there is errors
    console.log("Submitted"); // Confirm there is no errors
  };

  handleChange = (e) => {
    const account = { ...this.state.account };
    account[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ account });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            error={errors.username}
            onChange={this.handleChange}
          />

          <Input
            name="password"
            value={account.password}
            label="Password"
            error={errors.password}
            onChange={this.handleChange}
          />

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

export default ContactForm;
