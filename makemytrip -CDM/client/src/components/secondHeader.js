import React, { Component } from "react";
import "../css/secondHeader.css";
class secondHeader extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {}
    };
  }

  render() {
    return (
      <div className="subeader-one">
        <div className="subHeader-two">
          <div className="subHeader-three">
            <nav>
              <ul className="subHeader-ul">
                <li className="subHeader-li-one">
                  <a className="subHeader-a-one">
                    <span className="subHeader-a-one-icon"> </span><span className="subHeader-a-two-icon-text"> Flights </span>
                  </a>
                </li>
                <li className="subHeader-li-one">
                  <a className="subHeader-a-one">
                    <span className="subHeader-a-two-icon"> </span><span className="subHeader-a-two-icon-text"> Hotels</span>
                  </a>
                </li>
                <li className="subHeader-li-one"> 
                  <a className="subHeader-a-one">
                  <span className="subHeader-a-three-icon"> </span><span className="subHeader-a-two-icon-text"> Holidays</span>
                  </a>
                </li>
                <li className="subHeader-li-one">
                  <a className="subHeader-a-one">
                  <span className="subHeader-a-four-icon"> </span><span className="subHeader-a-two-icon-text"> Train</span>
                  </a>
                </li>
                <li className="subHeader-li-one">
                  <a className="subHeader-a-one">
                  <span className="subHeader-a-five-icon"> </span><span className="subHeader-a-two-icon-text"> Buses</span>
                  </a>
                </li>
                <li className="subHeader-li-one">
                  <a className="subHeader-a-one">
                  <span className="subHeader-a-six-icon"> </span><span className="subHeader-a-two-icon-text"> Cabs</span>
                  </a>
                </li>
                <li className="subHeader-li-one">
                  <a className="subHeader-a-one">
                  <span className="subHeader-a-seven-icon"> </span><span className="subHeader-a-two-icon-text"> Visa</span>
                  </a>
                </li>
                <li className="subHeader-li-one">
                  <a className="subHeader-a-one">
                  <span className="subHeader-a-eight-icon"> </span><span className="subHeader-a-two-icon-text"> Home & Villas</span>
                  </a>
                </li>
                <li className="subHeader-li-one">
                  <a className="subHeader-a-one">
                  <span className="subHeader-a-nine-icon"> </span><span className="subHeader-a-two-icon-text"> Gift Cards</span>
                  </a>
                </li>
                <li className="subHeader-li-one">
                  <a className="subHeader-a-one">
                  <span className="subHeader-a-ten-icon"> </span><span className="subHeader-a-two-icon-text"> More</span>
                  <span className="subHeader-a ten-icon-more"/>
                  </a>
                </li>
                
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default secondHeader;
