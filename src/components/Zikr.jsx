import React, { Component } from "react";
import { handleIncrement } from "./Sebha";
import { Link } from "react-router-dom";
class Zikr extends React.Component {
  state = {
    count: 0,
  };

  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  handleZikrReset() {
    console.log("handle zikr reset");

    this.setState({ count: 0 });
  }

  countSpanClass() {
    let classes = "badge m-2 badge-";
    return (classes +=
      this.state.count < this.props.target ? "secondary" : "success");

      // this function makes counter turns green when we reach target
  }
  render() {
    let { count } = this.state; //destructuring state variables
    const { text, source, target,id } = this.props; //destructuring props variables

    return (
      <div>
        <table className="table">
          <tbody>
            <tr>
              <th scope="row">{this.props.id}</th>
              <td>{text}</td>
              <td>{source}</td>
              <td>{target}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => this.props.onRemove(this.props.id)} //pass zikr id to onRemove function
                >
                  remove
                </button>
              </td>
              <td>
                <button
                  className="btn btn-sm btn-warning"
                  onClick={() => this.handleIncrement()}
                >
                  Start
                </button>
              </td>
              <td>
                <span className={this.countSpanClass()}>{count}</span>
              </td>

              <td>
                <button
                  className="badge badge-primary m-2"
                  // onClick={this.handleZikrReset()}
                  onClick={() => this.handleZikrReset()}
                >
                  Reset
                </button>
              </td>

              <td>
              <Link to={`/azkardetails/${this.state.count}/${this.props.id}`}> 
              {/* this will carry these data from state here to the path */}
                  Info {this.props.id}
                  {/* this will create dynamic link name according to zikr id */}
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
        
      </div>
    );
  }
}

export default Zikr;
