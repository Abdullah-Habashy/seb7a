import React, { Component } from "react";

class NewZikrForm extends React.Component {
  state = {
    display: "none", //hide empty table
    data: { id: "", text: "", source: "", target: "" }, // receiving new tasks
    //storing current tasks
  };

  handleChange = (e) => {
    //receive event
    let data = { ...this.state.data }; //store current tasks
    data[e.currentTarget.name] = e.currentTarget.value; // bind each inout field with correct vale in state
    this.setState({ data }); // update the state
  };

  handleSubmit = (e) => {
    e.preventDefault(); // preventreload
    console.log("Handle submit"); // chack working

    let newZikr = {
      //receive data from user inside new object
      text: this.state.data.text,
      source: this.state.data.title,
      target: this.state.data.target,
      id: this.props.Azkar.length + 1, //add id to the new object
    };
    
    this.setState({ data: newZikr }); //remove display none on addition of new task
    this.props.onAddition(newZikr); //send newZikr object to the parent component
  };

  toggleDisplay = () => { //to hide and show input fields
    console.log("Toggle");
    if (this.state.display === "none") this.setState({ display: "block" });
    else this.setState({ display: "none" }); //change display state
  };

  render() {
    return (
      <div>
        <button className="btn btn-warning m-2" onClick={this.toggleDisplay}>
          Add new Zikr
        </button>
        <div className="container" style={{ display: this.state.display }}>
          <h1>Adding new Zikr</h1>
          <div>
            <form>
              <div className="form-group">
                <label forhtml="text">Zikr Text</label>
                <input
                  value={this.state.data.text} //bind value of input to state
                  onChange={this.handleChange} //event handler
                  name="text" //name to contro which property in object inside tasks array will be affected
                  id="text" // the same as forhtml
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="text"
                />
              </div>
              <div className="form-group">
                <label forhtml="source">Zikr source</label>
                <input
                  value={this.state.data.source}
                  onChange={this.handleChange}
                  name="source"
                  type="text"
                  className="form-control"
                  id="source"
                  placeholder="source"
                />
              </div>

              <div className="form-group">
                <label forhtml="target">Zikr target</label>
                <input
                  value={this.state.data.target}
                  onChange={this.handleChange}
                  name="target"
                  type="text"
                  className="form-control"
                  id="target"
                  placeholder="target"
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary m-2"
                onClick={this.handleSubmit}
              >
                Add a task
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NewZikrForm;
