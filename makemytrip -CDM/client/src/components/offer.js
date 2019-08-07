import React, { Component } from "react";
import "../css/offer.css";
class offer extends Component {
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
      <main className="offer-main-container">
          <div className="main-one ">
            <div className="main-two ">
                <div className="main-three ">
                    <div className="main-carousel">
                        <button className="carousel-button"></button>
                        <div className="carousel-div">
                            <div className="carousel-div-1">



                                <div className="carousel-main">
                                    <div className="carousel-main-2">
                                        <div className="carousel-main-3">
                                            <span  className="sprite-1">

                                            </span>
                                            <div className="carousel-div-head">
                                                <p className="carousel-p">
                                                    <font className="font">
                                                    Just login and claim wallet rewards up to ₹ 555. Login now before the offer expires! 
                                                    </font>
                                                </p>
                                            </div>
                                            <a className="carousel-login">
                                            Login
                                                <span className="arrow"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-main">
                                    <div className="carousel-main-2">
                                        <div className="carousel-main-3">
                                            <span  className="sprite-1">

                                            </span>
                                            <div className="carousel-div-head">
                                                <p className="carousel-p">
                                                    <font className="font">
                                                    Just login and claim wallet rewards up to ₹ 555. Login now before the offer expires! 
                                                    </font>
                                                </p>
                                            </div>
                                            <a className="carousel-login">
                                            Login
                                                <span className="arrow"></span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        <button className="closeButton"></button>
                        {
                            
                        }
                    </div>
                </div>
            </div>
          </div>
      </main>
    );
  }
}

export default offer;
