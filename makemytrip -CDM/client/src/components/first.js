import React, { Component } from "react";

import Header from "./header";
import ThirdHeader from "./thirdheader";
import Offer from "./offer";
import Cities from "./Cities";
import Footer from "./footer";
import '../App.css'



class first extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }
  render()
    {
  return (
    <div >
      <Header>
      </Header>
      
      <ThirdHeader />
      <Offer></Offer>
      <Cities></Cities>
     
    </div>
  );
}
}

export default first;
