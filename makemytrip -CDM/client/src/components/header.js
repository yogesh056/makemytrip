import React, { Component } from "react";
import "../css/header.css";
import "../css/secondHeader.css";
import Login from "./login"
import jwt_decode from 'jwt-decode'


class header extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
      isOpen:false,
      isClose:false,
      name:'Login or Create Account'
    };
  }
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
  }
  login=()=>
  {
    console.log('hello');
    this.setState({ isOpen: true });
    this.setState({ isControl: true });
  }
  componentDidMount(){
    window.onload=function(){
      window.onscroll=function(){
        var sd=(document.body.scrollTop || document.documentElement.scrollTop);
        if(sd>10) {
          document.getElementsByTagName("body")[0].classList.add("scrolled");
        }
        else {
          document.getElementsByTagName("body")[0].classList.remove("scrolled");
        }
      }
    }
  }
  componentWillMount()
  {
    const token = localStorage.usertoken
    if(token!==undefined)
    {
    
    const decoded = jwt_decode(token)
    this.setState({
      userId:decoded._id,
      name:'Hey'+" "+decoded.name,
    })
    console.log(decoded.name)
  }
}
  render() {
    return (
     
      <div className="container-parent">
     <Login
              isOpen={this.state.isOpen}
              onClose={e => this.setState({ isOpen: false })}
            />
        <div className="header-container">
          <div>
            <a>
              <img
                className="logo-image"
                src="https://imgak.mmtcdn.com/pwa_v3/pwa_hotel_assets/header/mmtLogoWhite.png"
                alt="Make My Trip"
              />
            </a>
          </div>

          <div className="sub-container-one">
            <span className="sub-container-one-icon" />
            <div className="sub-container-one-one">
              <p className="sub-container-one-one-one">
                MMT
                <span className="sub-container-one-one-one-span">
                  DOUBLEBLACK{" "}
                </span>
              </p>
              <p className="sub-container-one-one-one-p">
                Free Cancellation Assured
              </p>
            </div>
          </div>
          <div className="sub-container-two">
            <span className="sub-container-two-icon" />
            <div className="sub-container-two-one">
              <p className="sub-container-two-one-p">My Trips </p>
            </div>
          </div>

          <div className="sub-container-three">
            <div className="sub-container-three-one">
              <span className="sub-container-three-icon" />
              <div className="sub-container-three-two">
                <p className="sub-container-three-p">24x7 </p>
                <p className="sub-container-three-p"> Support</p>
              </div>
            </div>
          </div>
          <div className="sub-container-six">
            <span className="sub-container-six-icon" />
          </div>
          <div className="sub-container-four">
            <div className="sub-container-four-one">
              <span className="sub-container-four-icon" />
              <div className="sub-container-four-two">
                <p className="sub-container-four-p">Introducing myBiz </p>
                <p className="sub-container-four-p1">
                  {" "}
                  Save more on business travel
                </p>
              </div>
            </div>
          </div>

<div class="dropdown">
<div className="sub-container-five" onClick={this.login}>
            <div className="sub-container-five-two">
              <span className="sub-container-five-icon" />

              <p className="sub-container-five-one">{this.state.name}</p>

            </div>
  
</div>







{

this.state.name=='Login or Create Account'?""
   
 : <div class="dropdown-content">
    <a href="#">Profile</a>
    <a href="#" onClick={this.logOut}>Logout</a>
  </div>


}
        
            
          </div>
          <div className="subHeader-one">
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
                    <span className="subHeader-a-two-icon"> </span><span className="subHeader-a-one-icon-text"> Hotels</span>
                  </a>
                </li>
                <li className="subHeader-li-one"> 
                  <a className="subHeader-a-one">
                  <span className="subHeader-a-three-icon"> </span><span className="subHeader-a-two-icon-text"> Holidays</span>
                  </a>
                </li>
                <li className="subHeader-li-one">
                  <a className="subHeader-a-one">
                  <span className="subHeader-a-four-icon"> </span><span className="subHeader-a-two-icon-text"> Trains</span>
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
                  <span className="subHeader-a-eight-icon"> </span><span className="subHeader-a-two-icon-text"> Villas</span>
                  </a>
                </li>
                <li className="subHeader-li-one">
                  <a className="subHeader-a-one">
                  <span className="subHeader-a-nine-icon"> </span><span className="subHeader-a-two-icon-text"> Coupons</span>
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
        </div>
       
      </div>
      
     
    );
  }
}

export default header;
