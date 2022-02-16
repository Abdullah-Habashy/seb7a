import React, { Component } from "react";
import Input from "./input";
//import Input component

class ContactForm extends Component {
  state = {
    account: { username: "", password: "" },
    //create data holder
    errors: {},
    //create error holder
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
    const account = { ...this.state.account }; //clone data from state inside account var
    account[e.currentTarget.name] = e.currentTarget.value; //link between account.<var> and value of field with the same name
    this.setState({ account }); //update state with new values
  };

  render() {
    const { account, errors } = this.state; //destructuring
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username" //this name is used in handle change method to link field value with state
            value={account.username} //this is how link is established
            label="Username"
            error={errors.username} //the same as account
            onChange={this.handleChange} //handle event 
          />

          <Input
            name="password" //this name is used in handle change method to link field value with state
            value={account.password}//this is how link is established
            label="Password"
            error={errors.password}
            onChange={this.handleChange} //handle event 
          />

          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        <h3>Welcome, {account.username}</h3>
        <h3>Your password is : {account.password}</h3>
      </div>
    );
  }
}

export default ContactForm;
