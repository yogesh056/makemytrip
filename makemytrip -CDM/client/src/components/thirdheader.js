import React, { Component } from "react";
import { withRouter } from 'react-router-dom';
import "../css/thirdHeader.css";
import Autosuggest from 'react-autosuggest';
import { getallHotels } from './UserFunctions'
import { DateRangePicker, DateRange } from "@matharumanpreet00/react-daterange-picker";
import { Row, Col, Navbar, Nav, FormControl, Button, Form } from 'react-bootstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 350px;
  padding: 20px;
`;
const radiobtn = ['radio', 'radio', 'radio', 'radio', 'radio', 'radio', 'radio', 'radio', 'radio', 'radio']

class thirdHeader extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      suggestions: [],
      languages: [

      ],
      aCount:1,
      cCount:2,
      searchCity: [],
      cityData: 'Banglore',
      display: false,
      open: false,
      dateRange: {},
      start: '2019-Jul-03Wednesday',
      end: '2019-Jul-03Wednesday',
    };
  }
  aChange=(e)=>
  {
    this.setState({aCount:e.target.value},()=>
    {
console.log(this.state.aCount)
    })
  }
  cChange=(e)=>
  {
    this.setState({cCount:e.target.value},()=>
    {
console.log(this.state.cCount)
    })
  }
  datesetter(today) {
    var monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    var dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"

    ];

    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(monthNames[today.getMonth()]).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var da = dayNames[today.getDay() - 1]
    var todayDate = yyyy + '-' + mm.slice(0, 3) + '-' + dd + da;
    return todayDate
  }
  citySelect = (e) => {
    e.preventDefault();
    document.querySelector(".journey-from-search-container").style.display = "block";
    
  }
  openNo=()=>{
    document.querySelector(".sttt").style.display = "block";
    document.querySelector(".mr-sm-2").focus();
    document.querySelector(".mr-sm-2").addEventListener("focusout", function (e) {
      e.preventDefault();
      document.querySelector(".sttt").style.display = "none";
    });
  }
  ondate = () => {
    console.log("hello")
    var a = this.state.open
    console.log(a)
    this.setState({ open: !a })
  }
  dateChange = (a) => {
    this.setState({ start: this.datesetter(a.startDate) })
    this.setState({ end: this.datesetter(a.endDate) })
    console.log(this.state.start)
  }

  onChange(e) {
    console.log(this.state.languages)
    this.setState({ cityData: e.target.value  });
    this.setState({ searchCity: this.state.languages.filter(d => d.toLowerCase().startsWith(e.target.value.toLowerCase())) },()=>{document.querySelector(".mr-sm-2").focus();
    document.querySelector(".mr-sm-2").addEventListener("focusout", function (e) {
      e.preventDefault();
      document.querySelector(".journey-from-search-container").style.display = "none";
    });})
    if (e.target.value === "") { this.setState({ searchCity: [] }) }
    
  }
  changeValue(t, data) {
    console.log(t,data);
    this.setState({ cityData: data, city: data, searchCity: [] })
  }
  componentWillMount() {

    getallHotels().then(res => {
      if (res) {
        var hotels = []
        console.log(res)
        res.map((data, index) => {
          hotels.push(data.city)
        })
        console.log(hotels)
        this.setState({ languages: hotels })
      }
    })
    // console.log(this.state.details)
  }



  search = () => {
    this.props.history.push(`/hotels/`+this.state.cityData+`/`+ this.state.start + `/` + this.state.end+`/`+this.state.aCount+`-`+this.state.cCount)
  }



  render() {




    return (
      <div className="thirdHeader-main-container">
        <div className="thirdHeader-sub-container">
          <div className="thirdHeader-list-trip">




            <h className="thirdHeader-journey-from-label-p" >
              Book
                          <a className="thirdHeader-trip-a" style={{ marginRight: '3px', marginLeft: '3px' }}>Domestic</a>
              and
                          <a className="thirdHeader-trip-a" style={{ marginRight: '3px', marginLeft: '3px' }}>International hotels</a>
            </h>
            <span className="thirdHeader-span">
              and homestays. To list your property
                      <a className="thirdHeader-trip-a1" style={{ marginRight: '3px', marginLeft: '3px' }}>click here</a>
            </span>

          </div>






          <div className="thirdHeader-journey">

            <div className="thirdHeader-journey-one">
              <div className="thirdHeader-journey-from">
                <label className="thirdHeader-journey-from-label" onClick={this.citySelect}>
                  <span className="thirdHeader-journey-from-label-span">CITY /HOTEL /AREA /BULIDING</span>
                  <input className="thirdHeader-journey-from-label-input" readOnly value={this.state.cityData}></input>

                  <p className="thirdHeader-journey-from-label-p">
                    <span className="thirdHeader-journey-from-span-two">
                      India
                              </span>
                  </p>
                </label>
                  <div className="journey-from-search-container">
                  <Form inline onSubmit={(e) => { e.preventDefault(); }}>
                    <FormControl type="text" placeholder="City" autocomplete="off" className="mr-sm-2" id="searcher" value={this.state.cityData} onChange={this.onChange.bind(this)}>
                    </FormControl>
                    <div className="search-suggestion">  
                    {this.state.searchCity.slice(0, 5).map((d, i) => (
                      <div className="sugges" key={i} onClick={(e => {this.changeValue(e, d)})}> {d}</div>
                    ))}
                    </div>

                  </Form>
                  </div>

              </div>
              <div className="thirdHeader-checkin">
                <label className="thirdHeader-checkin-label" onClick={this.ondate}>
                  <span className="thirdHeader-journey-from-label-span">CHECK-IN</span>
                  <input className="thirdHeader-checkin-input"></input>
                  <p className="thirdHeader-checkin-p">
                    <span className="thirdHeader-checkin-p-span-one">{this.state.start.slice(9, 11)}</span>
                    <span className="thirdHeader-checkin-p-span-two">
                      {this.state.start.slice(5, 8)}
                    </span>
                    <span className="thirdHeader-checkin-p-span-two">
                      {this.state.start.slice(2, 4)}
                    </span>
                  </p>
                  <p className="thirdHeader-checkin-p"> {this.state.start.slice(11)}</p>
                  <div className="thalavali"><DateRangePicker
                    open={this.state.open}
                    onChange={this.dateChange}
                    startDate={this.state.start}
                    endDate={this.state.end}
                  /></div>
                </label>


              </div>
              <div className="thirdHeader-checkin">
                <label className="thirdHeader-checkin-label" onClick={this.ondate}>
                  <span className="thirdHeader-journey-from-label-span">CHECK-OUT</span>
                  <input className="thirdHeader-checkin-input"></input>
                  <p className="thirdHeader-checkin-p">
                    <span className="thirdHeader-checkin-p-span-one">{this.state.end.slice(9, 11)}</span>
                    <span className="thirdHeader-checkin-p-span-two">
                      {this.state.end.slice(5, 8)}
                    </span>
                    <span className="thirdHeader-checkin-p-span-two">
                      {this.state.end.slice(2, 4)}
                    </span>
                  </p>
                  <p className="thirdHeader-checkin-p"> {this.state.end.slice(11)}</p>
                </label>
              </div>
              <div className="thirdHeader-rooms">
                <label className="thirdHeader-rooms-label" onClick={this.openNo}>
                  <span className="thirdHeader-journey-from-label-span">GUESTS</span>
                  <input className="thirdHeader-checkin-input"></input>
                  <p className="thirdHeader-checkin-p">
                    <span className="thirdHeader-checkin-p-span-one">{this.state.aCount}</span>
                    <span className="thirdHeader-checkin-p-span-two">
                    Adults
                                  </span>
                    <span className="thirdHeader-checkin-p-span-one">
                    {this.state.cCount}
                                  </span>
                    <span className="thirdHeader-checkin-p-span-two">
                     Children
                                  </span>
                  </p>
                  <p className="thirdHeader-checkin-p" style={{ paddingTop: `20px` }}>  </p>
                </label>
                <div className="sttt">
                <div className="stay">
                                        <div className="stay-1">
                                        <span id="H123">Adults(12y+)</span>
                                        <br></br>
                                            <ul className="stay-ul">
                                           
                                          
                                                {radiobtn.map((data,index) =>
                                                    <span>
                                                        <input type="radio" className="radio1" id={data+"-"+index+1} name="radios" value={index+1} onChange={this.aChange} />
                                                        <label for={data+"-"+index+1}>{index+1}</label>
                                                    </span>
                                                )}
                                                


                                                
                                            </ul>
                                            <br></br>
                                            <span id="H123">Children (12y and below)</span>
                                            <br></br>
                                            <ul className="stay-ul">
                                           
                                               
                                               
                                                {radiobtn.map((data,index) =>
                                                    <span>
                                                        <input type="radio" className="radio1" id={data+"-"+index+1+1} name="radios1" value={index+1} onChange={this.cChange} />
                                                        <label for={data+"-"+index+1+1}>{index+1}</label>
                                                    </span>
                                                )}


                                                
                                            </ul>
                                        </div></div>
                                        </div>
              </div>
              <div className="thirdHeader-checkin" style={{ borderRight: 'none' }}>
                <label className="thirdHeader-checkin-label" style={{ paddingBottom: '35px', width: '134px' }}>
                  <span className="thirdHeader-journey-from-label-span">TRAVELLING FOR</span>
                  <input className="thirdHeader-checkin-input"></input>
                  <div className="thirdHeader-travel">
                    <p className="thirdHeader-travel-optional">Select a Reason (optional)</p>
                  </div>
                </label>
              </div>
            </div>
            <div className="thirdHeader-rs">
              <span className="thirdHeader-rs-span">
                Recent Searches
                      </span>
              <ul className="thirdHeader-rs-ul">
                <li className="thirdHeader-rs-l">
                  <a className="thirdHeader-rs-a"></a>
                  <p className="thirdHeader-rs-p1">Delhi,India</p>
                  <p className="thirdHeader-rs-p2">26 Jul 19 to 27 Jul 19</p>
                </li>
                <li className="thirdHeader-rs-l">
                  <a className="thirdHeader-rs-a"></a>
                  <p className="thirdHeader-rs-p1">Goa,India</p>
                  <p className="thirdHeader-rs-p2">26 Jul 19 to 27 Jul 19</p>
                </li>
                <li className="thirdHeader-rs-l">
                  <a className="thirdHeader-rs-a"></a>
                  <p className="thirdHeader-rs-p1">Bangkok,Thaila..</p>
                  <p className="thirdHeader-rs-p2">26 Jul 19 to 27 Jul 19</p>
                </li>
              </ul>
            </div>
            <p className="search-p">
              <button className="search-btn" onClick={this.search}>
                Search
                      </button>
            </p>
          </div>

        </div>
      </div>
    );
  }
}

export default withRouter(thirdHeader);
