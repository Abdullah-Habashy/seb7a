import React, { Component } from "react";
import ReactDOM from "react-dom";
import Azkar from "./components/Azkar";
import Zikr from "./components/Zikr";
import Sebha from "./components/Sebha";
import Navbar from "./components/Navbar";
import AzkarDetails from "./components/AzkarDetails";
import ContactForm from "./components/ContactForm";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./components/Home";
import Info from "./components/Info";
import MySebha from "./components/MySebha";
import NotFound from "./components/NotFound";

class App extends React.Component {
  // state = {
  //   Azkar: [
  //     { id: 1, text: "Zikr 1", source: "source 1", target: 100 },
  //     { id: 2, text: "Zikr 2", source: "source 2", target: 7 },
  //     { id: 3, text: "Zikr 3", source: "source 3", target: 30 },
  //     { id: 4, text: "Zikr 4", source: "source 4", target: 3 },
  //   ],
  // };

  // handleRemove = (counterId) => {
  //   console.log("handle remove called", counterId);
  //   let Azkar = this.state.Azkar.filter((c) => c.id !== counterId);
  //   this.setState({ Azkar });
  // };

  render() {
    return (
      <React.Fragment>
        <Navbar></Navbar>
        {/* Add navbar to all pages */}
        
        <Switch> 
          {/* here we make URLs guide , react will check the link and match it to the correct path , if not found in  URLs list it will go to the lasrt path  (path => component) */}
          <Route path="/mysebha" component={MySebha}></Route>
          <Route path="/contactform" component={ContactForm}></Route>
          <Route
            path="/azkardetails/:count/:id"
            component={AzkarDetails}
          ></Route>
          <Route path="/notFound" component={NotFound}></Route>
          <Route path="/" component={Home}></Route>

          <Redirect to="/notFound" />
        </Switch>

        {/* <Sebha></Sebha> */}

        {/* 
        <Switch>
          <Route path="/news" component={News}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/azkardetails" component={AzkarDetails}></Route>
          <Route path="/" component={Home}></Route>
        </Switch> */}
        {/* <Sebha></Sebha> */}

        {/* <Sebha Azkar={this.state.Azkar}></Sebha>
        <Azkar Azkar={this.state.Azkar} onRemove={this.handleRemove}>
          <Zikr></Zikr>
          <Route path="/info" component={Info}></Route>
        </Azkar> */}
      </React.Fragment>
    );
  }
}

export default App;
