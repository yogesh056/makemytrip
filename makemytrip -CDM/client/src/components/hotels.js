import React, { Component } from 'react';
import '../css/hotels.css'
import { getHotels } from './UserFunctions'
import { getHotelsSort } from './UserFunctions'
import { getHotelsFilter } from './UserFunctions'
import { withRouter } from 'react-router-dom';
import jwt from 'jsonwebtoken'
import jwt_decode from 'jwt-decode'

var a=false
var b=false
var c=false
var d=false
class first extends Component {


  constructor() {
    super()
    this.state = {
      hotels: [],
      Swimmingpool:false,
      Parking:false,
      BreakFast:false,
      HouseKeeping:false,
      main:''
    }
  }
  imageChange=(data,index)=>
  {
    document.querySelector(".main-img-"+index).src =data;
  }
  
  onChange = (e) => {
    console.log(e.target.name)
    if (e.target.value == "H2L") {
      const searchVal = {
        search: this.state.search,
        order: -1
      }
      getHotelsSort(searchVal).then(res => {
        if (res) {

          console.log(res)
          this.setState({ hotels: res })
        }
      })
    }

    else if (e.target.value == "L2H") {
      const searchVal = {
        search: this.state.search,
        order: 1
      }
      getHotelsSort(searchVal).then(res => {
        if (res) {

          console.log(res)
          this.setState({ hotels: res })
        }
      })
    }
  }
  onBook=(hotel)=>
  {
    this.props.history.push(`/booking/`+this.state.search+`/`+ this.state.start + `/` + this.state.end+`/`+this.props.match.params.count)
    localStorage.setItem('hotel',hotel);
  
  }
  onCheckBox = (e) => {
    
    if(e.target.name=="Swimmingpool")
   {  
     a=e.target.checked
      this.setState({Swimmingpool:e.target.checked})
   }

   if(e.target.name=="BreakFast")
   {
    b=e.target.checked
    this.setState({BreakFast:e.target.checked})
   }

   if(e.target.name=="Parking")
   {
    c=e.target.checked
    this.setState({Parking:e.target.checked})
   }

   if(e.target.name=="HouseKeeping")
   {
    d=e.target.checked
    this.setState({HouseKeeping:e.target.checked})
   }

      const filter={
        city:this.state.search,
        Swimmingpool:a,
        BreakFast:b,
        Parking:c,
        HouseKeeping:d
      }
    console.log(filter)
    getHotelsFilter(filter).then(res => {
      if (res) {

        console.log(res)
        this.setState({ hotels: res })
      }
    })
  }
  componentWillMount() {
    const token = localStorage.usertoken
    if(token!==undefined)
    {
    
    const decoded = jwt_decode(token)
    this.setState({
      userName:true,
    })
  }
    var a = this.props.match.params.place
    var b = a.charAt(0).toUpperCase() + a.slice(1);
    this.setState({ search: b })
    this.setState({ start: this.props.match.params.start })
    this.setState({ end: this.props.match.params.end })



    getHotels(b).then(res => {
      if (res) {

        console.log(res)
        this.setState({ hotels: res })
      }
    })
    // console.log(this.state.details)
  }

  render() {
    console.log(typeof this.state.hotels)
    console.log(this.state.hotels.length)
    return (
      <div className="main">
        <header className="hotels-one">
          <div className="hotels-two">
            <div className="hotels-three">
              <div className="hotels-four">
                <label className="hotels-l">
                  CITY, AREA OR HOTEL
                                                                                      </label>
                <input className="hotels-input" readOnly value={this.state.search} />
              </div>
              <div className="hotels-four">
                <label className="hotels-l">
                  CHECK-IN
                                                                                      </label>
                <input className="hotels-input" readOnly value={this.state.start.slice(11, 14) + ", " + this.state.start.slice(9, 11) + " " + this.state.start.slice(5, 8) + " " + this.state.start.slice(0, 4)}></input>
              </div>
              <div className="hotels-four">
                <label className="hotels-l">
                  CHECK-OUT
                                                                                      </label>
                <input className="hotels-input" readOnly value={this.state.end.slice(11, 14) + ", " + this.state.end.slice(9, 11) + " " + this.state.end.slice(5, 8) + " " + this.state.end.slice(0, 4)}></input>
              </div>
              <div className="hotels-four">
                <label className="hotels-l">
                  ROOMS & GUESTS
                                                                                      </label>
                <input className="hotels-input" readOnly value={(this.props.match.params.count).slice(0,1)+" Adults,"+(this.props.match.params.count).slice(2,3)+" Children"}></input>
              </div>
              <p className="search-p">
                <button className="search-btn" >
                  Search
                                                                                                  </button>
              </p>
            </div>
          </div>
        </header>
        <div className="hotels-list" >
          <div className="hotels-list-head" >
            <div className="hotels-desc" >
              <ul className="hotels-ul" >
                <li className="hotels-li" >
                  <a className="hotels-a" >
                    Home <span className="gre">></span>
                                </a>
                </li>
                <li className="hotels-li" >
                  <a className="hotels-a" >
                    Hotels and more in {this.state.search}
                  </a>
                </li>
              </ul>
              <div className="hotels-info">
                <div className="hotels-info-head">
                  <div className="hotels-info-1">
                    <p className="hotels-info-p">
                      Hotels and more in {this.state.search}
                    </p>
                  </div>
                </div>
                <div className="hotels-info-footer">
                  <div className="hotels-info-footer1">
                    <span className="hotels-info-footer-span1">
                      Showing {this.state.hotels.length} properties in {this.state.search}
                    </span>
                    <span className="hotels-info-footer-span2"> Sort By:</span>
                    <span className="hotels-info-footer-span3"> Popularity</span>
                    <form className="hotels-form">
                      <div className="hotels-form-div1">
                        <div className="hotels-form-div2">
                          <span className="search-icon"></span>
                          <input className="hotels-form-input" placeholder="Search by hotel name" >

                          </input>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

              </div>
            </div>
          </div>
          <div className="filter1">
            <div className="filter2">
              <div className="filter3">
                <p className="filter-p">
                  <span className="filter-p-span">
                    Select Filters
            </span>
                </p>

                <div className="filter-row">
                  <p className="filter-row-p">
                    Prize Filters
            </p>
                  <ul className="filter-row-ul">
                    <li className="filter-row-li">
                      <span className="filter-row-span">
                        <input type="radio" name="filter" value="H2L" onChange={this.onChange} />
                        <label className="filter-row-label">
                          High to Low
                    </label>
                        <div className="filter-row-label-l">
                          Hotel with option(s) that could be booked without any upfront payment.
                    </div>

                      </span>
                      <span></span>
                    </li>
                    <li className="filter-row-li">
                      <span className="filter-row-span">
                        <input type="radio" name="filter" value="L2H" onChange={this.onChange} />
                        <label className="filter-row-label">
                          Low to High
                    </label>
                        <div className="filter-row-label-l">
                          Hotel with option(s) that could be booked without any upfront payment.
                    </div>

                      </span>
                      <span></span>
                    </li>
                  </ul>
                </div>

                <div className="filter-row">
                  <p className="filter-row-p">
                    Popular Filters
            </p>
                  <ul className="filter-row-ul">
                    <li className="filter-row-li">
                      <span className="filter-row-span">
                        <input type="checkbox" name="Swimmingpool" onChange={this.onCheckBox}/>
                        <label className="filter-row-label">
                        Swimminpool
                    </label>
                        <div className="filter-row-label-l">
                          Hotel with option(s) that could be booked without any upfront payment.
                    </div>

                      </span>
                      <span></span>
                    </li>
                    <li className="filter-row-li">
                      <span className="filter-row-span">
                        <input type="checkbox" name="BreakFast" onChange={this.onCheckBox} />
                        <label className="filter-row-label">
                        BreakFast
                    </label>
                        <div className="filter-row-label-l">
                          Hotel with option(s) that could be booked without any upfront payment.
                    </div>

                      </span>
                      <span></span>
                    </li>
                    <li className="filter-row-li">
                      <span className="filter-row-span">
                        <input type="checkbox" name="Parking" onChange={this.onCheckBox}/>
                        <label className="filter-row-label">
                        Parking
                    </label>
                        <div className="filter-row-label-l">
                          Hotel with option(s) that could be booked without any upfront payment.
                    </div>

                      </span>
                      <span></span>
                    </li>
                    <li className="filter-row-li">
                      <span className="filter-row-span">
                        <input type="checkbox" name="HouseKeeping" onChange={this.onCheckBox} />
                        <label className="filter-row-label">
                        HouseKeeping
                    </label>
                        <div className="filter-row-label-l">
                          Hotel with option(s) that could be booked without any upfront payment.
                    </div>

                      </span>
                      <span></span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            <div>


              {

                this.state.hotels.length > 0 ? this.state.hotels.map((data, index) => {
                  { var a = parseInt(data.price) }
                  var total=0;
                  var length=data.reviews.length
                  data.reviews.map((data1, index)=>
                  {total=total+data1.rating}
                  )
                  console.log(this.state.hotels[0].imgurl[0])
                  return (


                    <div className="hotels-details" >

                      <div>
                        <div className="hotels-details-1">
                          <div className="hotels-details-2">

                            <a>
                              <div className="hotels-details-info">
                                <div className="hotels-details-info-1">
                                  <div>



                                    <div className="hotels-img">
                                      <img  className={`main-img-`+index} src={data.imgurl[1]} style={{ height: '162px', width: '243px' }}></img>
                                    </div>
                                    <div className="img-thumb">
                                      <img className="img-thumb-li" src={data.imgurl[1]} onClick={()=>this.imageChange(data.imgurl[1],index)}></img>
                                      <img className="img-thumb-li" src={data.imgurl[2]} onClick={()=>this.imageChange(data.imgurl[2],index)}></img>
                                      <img className="img-thumb-li" src={data.imgurl[3]} onClick={()=>this.imageChange(data.imgurl[3],index)}></img>
                                      <img className="img-thumb-li" src={data.imgurl[4]} onClick={()=>this.imageChange(data.imgurl[4],index)}></img>

                                    </div>
                                  </div>
                                  <div className="img-content">
                                    <div className="img-content-1">
                                      <div>
                                        <p className="img-p1">
                                          <span>{data.hotel}</span>
                                          {/* <span className="img-span-icon"> */}
                                            <span className={`img-span-icon-`+data.star}>

                                            </span>
                                          {/* </span> */}
                                        </p>
                                        <p className="img-p3">{data.landmark}</p>
                                        <p className="img-p4"> {data.direction}</p>
                                      </div>
                                      <div className="rating">
                                        <p className="rating-p">
                                          <span className="rating-span">
                                            <span className="rating-owl"></span>
                                            <span style={{ marginLeft: '8px' }}>
                                              <span className="rating-rate">
                                                {/* {data.reviews.rating/5.0} */}
                        </span>
                                              <span className="rating-rate">
                                                {(total/length).toFixed(1)+" /5"}
                        </span>
                                            </span>
                                          </span>
                                        </p>
                                        <p className="rating-rating-true">
                                          <span className="rating-rating-true">
                                         {data.reviews.length}
                      </span>
                                          Ratings
                    </p>
                                      </div>
                                    </div>
                                    <ul className="icon-list">
                                      <li className={`icon-list-sub-`+data.swimmingpool}>
                                        <span className="icon-types-1">
                                        </span>
                                        <span className="rating-rating-true">
                                          Swimming Pool
                    </span>
                                      </li>
                                      <li className={`icon-list-sub-`+data.parking}>
                                        <span className="icon-types-2">
                                        </span>
                                        <span className="rating-rating-true">
                                          Parking
                    </span>
                                      </li>
                                      <li className={`icon-list-sub-`+data.housekeeping}>
                                        <span className="icon-types-3">
                                        </span>
                                        <span className="rating-rating-true">
                                          House Keeping
                    </span>
                                      </li>
                                    </ul>
                                    <p style={{ margin: '0' }} >
                                      <span className={`rating-rating-`+data.bf}>More Options</span>
                                      <span className={`rating-rating-`+data.bf} style={{ color: '#1a7971' }}>Breakfast Included </span>
                                      <span className={`rating-rating-`+data.bf} style={{ color: '#1a7971' }}>|</span>
                                      <span className={`rating-rating-`+data.bf} style={{ color: '#1a7971' }}>Pay @ Hotel</span>
                                    </p>
                                  </div>

                                </div>
                                <div className="price">
                                  <div className="price-top" onClick={()=>this.onBook(data.hotel)}>
                                    <p className="price-top-p1">
                                      <span className="price-top-p2">
                                        <span className="price-top-p3">Save</span>
                                        INR {data.prize}
                                      </span>
                                      <span className="price-top-p4">
                                        <span className="price-top-p5">
                                          {data.offer} %
                                </span>
                                      </span>
                                    </p>
                                    <p className="price-top-p6">
                                      INR {data.prize * 2}
                                    </p>
                                    <p className="price-top-p7">
                                      INR {data.prize + 523}
                                      <p className="price-top-p8"> per night</p>
                                      <span className={`price-top-p9-`+this.state.userName}>Login & unlock a secret deal</span>
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </a>

                          </div>
                        </div>
                      </div>
                    </div>

                  )
                }) : ""
              }
            </div>







          </div>



        </div>
      </div>
    );
  }
}
export default withRouter(first);
