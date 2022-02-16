import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (

      // here we will put links of navbar and indicates there paths in the component where navbar will be deployed
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {/* bootstrap navbar */}
          <Link className="navbar-brand" to="/">
            My Sebha
          </Link> {/* link to homepage */}
          

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/home"> {/* link to home component */}
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/mysebha">
                  My Sebha
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactform">
                  Contact Form
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link className="nav-link" to="/azkardetails">
                  Azkardetails
                </Link>
              </li> */}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
