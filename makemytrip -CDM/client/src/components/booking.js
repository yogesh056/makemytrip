import React, { Component } from 'react';
import '../css/hotels.css'
import '../css/booking.css'
import jwt from 'jsonwebtoken'
import jwt_decode from 'jwt-decode'
import { getHotelOne } from './UserFunctions'
import { reviewUpdate } from './UserFunctions'
import StarRatings from 'react-star-ratings';
import { decode } from 'punycode';
var count = 0;
var re;
var total = 0;
const $ = window.$;
const radiobtn = ['radio', 'radio', 'radio', 'radio', 'radio', 'radio', 'radio', 'radio', 'radio', 'radio']
class booking extends Component {


    constructor() {
        super()
        this.state = {
            hotels: [],
            rating: 2,
            list: [],
            details: '',
            Swimmingpool: false,
            Parking: false,
            BreakFast: false,
            HouseKeeping: false,
            imgsrc: [],
            review: '',
            color: '',
            rr: [],
            title: '', reviewRate: []
        }
    }
    noSelect = (el) => {
        console.log("classz ")
        $(el).removeClass('stay-li');
        $(el).addClass('stay-li-true');
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.name + "-" + e.target.value)
    }
    changeRating = (newRating) => {
        console.log(newRating)
        this.setState({
            rating: newRating
        });
    }
    roomSelect = (value) => {
        count++;
        if (count != 0) {
            document.querySelector(".book-btn").style.display = "block";
        }
        else {
            document.querySelector(".book-btn").style.display = "none";
        }
        if (count == 1) {
            document.querySelector(".room-table-left-1-sticky-111").style.display = "none";
            document.querySelector(".selected-room-1").style.display = "block";
            this.setState({ option1: value })
        }
        if (count == 2) {
            document.querySelector(".room-table-left-1-sticky-112").style.display = "none";
            document.querySelector(".selected-room-2").style.display = "block";
            this.setState({ option2: value })
        }
        if (count == 3) {
            document.querySelector(".room-table-left-1-sticky-113").style.display = "none";
            document.querySelector(".selected-room-3").style.display = "block";
            this.setState({ option3: value })
        }

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

        var todayDate = yyyy + '-' + mm.slice(0, 3) + '-' + dd;
        return todayDate
    }
    book() {
        document.querySelector(".review-rating-text").style.display = "block";
    }
    review() {
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        console.log(this.state.rating)
        var color;
        if (this.state.rating == 3) {
            color = 'orange'
            console.log("ggggg")
        }
        if (this.state.rating <= 2) {
            color = 'red'
            console.log("ooooo")
        }
        if (this.state.rating > 3) {
            color = 'green'
            console.log("iiii")
        }
        const value = {
            review: this.state.review,
            rating: this.state.rating,
            title: this.state.title,
            date: this.datesetter(new Date()),
            author: decoded.name,
            color: color,

        }
        console.log(value)
        re.push(value)
        const value2 = {
            rr: re,
            hotel_name: localStorage.getItem('hotel')
        }
        reviewUpdate(value2).then(res => {
            if (res) {
                console.log(res)
            }
        })
    }
    roomRemove = () => {

        if (count == 1) {
            document.querySelector(".room-table-left-1-sticky-111").style.display = "block";
            document.querySelector(".selected-room-1").style.display = "none";
            this.setState({ option1: '' })
            count--
        }
        if (count == 2) {
            document.querySelector(".room-table-left-1-sticky-112").style.display = "block";
            document.querySelector(".selected-room-2").style.display = "none";
            this.setState({ option1: '' })
            count--
        }
        if (count == 3) {
            document.querySelector(".room-table-left-1-sticky-113").style.display = "block";
            document.querySelector(".selected-room-3").style.display = "none";
            this.setState({ option1: '' })
            count--
        }
        if (count != 0) {
            document.querySelector(".book-btn").style.display = "block";
        }
        else {
            document.querySelector(".book-btn").style.display = "none";
        }
    }
    componentWillMount = () => {


        var one;
        var a = this.props.match.params.place
        var b = a.charAt(0).toUpperCase() + a.slice(1);
        this.setState({ search: b })
        this.setState({ start: this.props.match.params.start })
        this.setState({ end: this.props.match.params.end })
        var hotel = localStorage.getItem('hotel');


        getHotelOne(hotel).then(res => {
            if (res) {
                console.log(res[0])
                this.setState({ details: res[0] })
                this.setState({ imgsrc: res[0].imgurl })
                this.setState({ hotels: res[0].hotelList })
                this.setState({ reviewRate: res[0].reviews });
                total = 0;
                res[0].reviews.map((data, index1) => {
                    total = total + data.rating
                })
                re = res[0].reviews
                one = res[0].hotelList
                var sr = 0;
                var rs = 0;
                var lr = 0;
                var rl = 0;
                {
                    one.map((item, key) => {
                        if (one[key].Inr == "Superior Rio") {
                            sr++;
                        }
                        if (one[key].Inr == "Rio Suite") {
                            rs++;
                        }
                        if (one[key].Inr == "Luxury Rio") {
                            lr++;
                        }
                        if (one[key].Inr == "Royale Luxury") {
                            rl++;
                        }
                    }
                    )
                }
                var list = [
                    { name: 'Superior Rio', count: sr, src: 'https://www.ashlinghotel.ie/wp-content/uploads/2019/02/Classic-Rooms-Accommodation-Dublin.jpg' },
                    { name: 'Luxury Rio', count: lr, src: 'https://img.huffingtonpost.com/asset/5acfad701f0000260616d02f.jpeg?ops=crop_0_86_6444_4173%2Cscalefit_720_noupscale' },
                    { name: 'Rio Suite', count: rs, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnXEdnX0Q6MCUbLmBjCizo9NTqunuDwhSetW59V3eEEelxq9rAtQ' },

                    { name: 'Royale Luxury', count: rl, src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeLGtS_IUhImPqweZALtlB9cosCm0pq8B8j9-Xibdu_lkzJy6Vsw' }
                ]
                this.setState({ list: list })
            }
        })

    }

    render() {
        console.log(this.state.imgsrc)
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








                <div className="wrapper-book">
                    <div className="booking-details">




                        <div className="hotels-list"  >
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
                                </div>
                            </div>
                        </div>



                        <div style={{ paddingBottom: '20px' }}></div>
                        <div className="relative-img">
                            <div className="page-head">
                                <div className="page-flex-head">
                                    <div className="page-flex">
                                        <span style={{ display: 'flex' }}>
                                            <span className="page-flex-sp"> {this.state.details.city}</span>
                                            <span className="img-span-icon-1" style={{ marginTop: '7px', marginLeft: '10px' }}></span>
                                        </span>
                                        <span className="page-flex-sp2">  {this.state.details.landmark}</span>
                                    </div>
                                </div>

                            </div>


                            <div className="page-bottom-1">
                                <div style={{ position: 'relative' }}>
                                    <div className="page-bottom">
                                        <div className="page-bottom-2">
                                            <div className="page-bottom-3">
                                                <a className="page-bottom-a">View all {this.state.imgsrc.length} photos</a>
                                            </div>
                                            <div className="page-bottom-4">
                                                <div id="slider">
                                                    <figure>
                                                        {this.state.imgsrc.map((item, key) =>
                                                            <img src={item} key={key} ></img>

                                                        )}
                                                    </figure>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="page-bottom-5">
                                            <div className="page-video">
                                                <div className="page-video-1">

                                                    <iframe style={{ width: '100%', height: '100%' }} src="https://www.youtube.com/embed/tgbNymZ7vqY">
                                                    </iframe>
                                                </div>
                                            </div>
                                            <div className="page-bottom-6">
                                                <a className="page-link-a">
                                                    <div className="page-link-1">
                                                        <div className="page-link-2">
                                                            <p className="page-link-p1">
                                                                <span className="page-link-sp1">
                                                                    What Guests Said
                                                        </span>
                                                            </p>
                                                            <p className="page-link-p2"> Based on {this.state.reviewRate.length} Reviews</p>

                                                        </div>
                                                        <span className="page-link-sp2"> {(total / this.state.reviewRate.length).toFixed(1)}</span>

                                                    </div>
                                                    <ul className="page-link-ul">
                                                        <li className="page-link-li">
                                                            <span className="page-link-li-sp"></span>
                                                            <span className="page-link-li-sp1">
                                                                Good Room
                                                            </span>
                                                        </li>
                                                        <li className="page-link-li">
                                                            <span className="page-link-li-sp"></span>
                                                            <span className="page-link-li-sp1">
                                                                Good Staff
                                                            </span>
                                                        </li>
                                                        <li className="page-link-li">
                                                            <span className="page-link-li-sp"></span>
                                                            <span className="page-link-li-sp1">
                                                                Good Location
                                                            </span>
                                                        </li>
                                                        <li className="page-link-li">
                                                            <span className="page-link-li-sp"></span>
                                                            <span className="page-link-li-sp1">
                                                                Good Infrastructure
                                                            </span>
                                                        </li>
                                                    </ul>
                                                </a>

                                            </div>


                                        </div>
                                        <div className="hotels-sug">
                                            <div style={{ marginBottom: '10px' }}>
                                                <div className="border-rooms">
                                                    <div className="hotels-sug-1">
                                                        <div className="hotels-sug-2">
                                                            <div style={{ flex: '1' }}>
                                                                <p className="hotels-sug-3"> Room 1
                                                        <span> Luxury Rio</span>
                                                                </p>
                                                                <p className="hotels-sug-4">2 Adults + 2 Child </p>
                                                            </div>
                                                            <div className="hotels-sug-5">
                                                                <p className="hotels-sug-6"> INR 8500</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="hotels-sug-1">
                                                        <div className="hotels-sug-2">
                                                            <div style={{ flex: '1' }}>
                                                                <p className="hotels-sug-3"> Room 2
                                                        <span> Superior Rio</span>
                                                                </p>
                                                                <p className="hotels-sug-4">2 Adults + 1 Child </p>
                                                            </div>
                                                            <div className="hotels-sug-5">
                                                                <p className="hotels-sug-6"> INR 6480</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="hotels-sug-1">
                                                        <div className="hotels-sug-2">
                                                            <div style={{ flex: '1' }}>
                                                                <p className="hotels-sug-3"> Room 3
                                                        <span>  Rio Suite</span>
                                                                </p>
                                                                <p className="hotels-sug-4">2 Adults </p>
                                                            </div>
                                                            <div className="hotels-sug-5">
                                                                <p className="hotels-sug-6"> INR 4200</p>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="others-room">
                                                        <span className="others-room-sp"> Other rooms</span>
                                                        <span>
                                                            <button className="others-room-btn">
                                                                View this Combo
                                                        </button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>



                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>




                </div>
                <div className="navbar-rooms">
                    <ul className="navbar-rooms-ul">
                        <li className="navbar-rooms-li">
                            <a className="navbar-rooms-a" href="#rooms">
                                Room
                        </a>
                        </li>
                        <li className="navbar-rooms-li">
                            <a className="navbar-rooms-a">
                                Facilites
                        </a>
                        </li>
                        <li className="navbar-rooms-li">
                            <a className="navbar-rooms-a">
                                Loaction
                        </a>
                        </li>
                        <li className="navbar-rooms-li">
                            <a className="navbar-rooms-a">
                                Policies
                        </a>
                        </li>
                        <li className="navbar-rooms-li">
                            <a className="navbar-rooms-a" href="#review">
                                Rating and Reviews
                        </a>
                        </li>
                    </ul>
                </div>
                <section className="section-1" id="rooms">
                    <div className="rooms-table">
                        <div>
                            {/* ?????????????????????????????////////////////////////////// */}
                        </div>
                        <div>

                        </div>
                        <div className="second-rooms-table">
                            <p className="second-rooms-table-p">
                                <span className='second-rooms-table-sp'>
                                    Or Make Your Own Choice
                            </span>
                               
                            </p>
                            <div className="table-head-1">
                                <span className="table-head-sp1" style={{ width: '224px' }}>Room Type</span>
                                <span className="table-head-sp1" style={{ width: '184px' }}>Options</span>
                                <span className="table-head-sp1" style={{ width: '140px' }}>Included in this Price</span>
                                <span className="table-head-sp1" style={{ width: '138px' }}>Select guest</span>
                                <span className="table-head-sp1" style={{ width: '130px' }}>Price/night</span>
                                <span className="table-head-sp1" style={{ width: '144px', borderRight: '0px' }}>Cart</span>
                            </div>
                            <div className="roomwrap">
                                <div className="rr-1">
                                    {
                                        this.state.list.length > 0 ? this.state.list.map((data, index1) => {
                                            { console.log(data.count) }

                                            return (
                                                <div className="roomwrap-1">
                                                    <div className="roomwrap-2">
                                                        <div className="room-left" style={{ width: '224px' }}>
                                                            <div className="room-left-sticky">
                                                                <h2 className="room-left-sticky-p">
                                                                    {data.name}
                                                                </h2>
                                                                <img className="room-left-sticky-img" src={data.src}></img>
                                                                <ul className="room-left-sticky-ul">
                                                                    <li className="room-left-sticky-li">
                                                                        <span className="room-left-sticky-span-icon">

                                                                        </span>
                                                                        Room Size: 8.53 X 7.01 sq.mtr
                                                                </li>
                                                                    <li className="room-left-sticky-li">
                                                                        <span className="room-left-sticky-span-icon-2">

                                                                        </span>
                                                                        Work Desk
                                                                </li>
                                                                    <li className="room-left-sticky-li">
                                                                        <span className="room-left-sticky-span-icon-3">

                                                                        </span>
                                                                        Daily Housekeeping
                                                                </li>
                                                                    <li className="room-left-sticky-li">
                                                                        <span className="room-left-sticky-span-icon-2">

                                                                        </span>
                                                                        Closet
                                                                </li>
                                                                    <li className="room-left-sticky-li">
                                                                        <span className="room-left-sticky-span-icon-2">

                                                                        </span>
                                                                        Chair
                                                                </li>
                                                                </ul>
                                                                <a className="room-left-sticky-img-a" >More about this Room
                                                                <span className="room-left-sticky-span-icon-4">

                                                                    </span>
                                                                </a>
                                                            </div>

                                                        </div>




                                                        <div className="room-middle">
                                                            {
                                                                this.state.hotels.length > 0 ? this.state.hotels.map((data1, index) => {
                                                                    {/* { console.log(this.state.hotels[index].Inr==data[0].name) } */ }
                                                                    if (this.state.hotels[index].Inr == data.name) {
                                                                        return (
                                                                            <div className="room-middle-col" >
                                                                                <div className="room-middle-col1" style={{ width: '225px' }}>
                                                                                    <p className="room-middle-col1-p">
                                                                                        <span className="room-middle-col1-sp">Option {index + 1}</span>
                                                                                    </p>
                                                                                    <div className="room-middle-col1-div1">
                                                                                        <span className="room-middle-col1-div1-sp1"></span>

                                                                                        <p className="room-middle-col1-div1-p1">
                                                                                            Room only
                                                                        </p>

                                                                                    </div>
                                                                                    <div className="room-middle-col1-div1">
                                                                                        <span className="room-middle-col1-div1-sp1" style={{ backgroundPosition: " -5px -298px" }}></span>

                                                                                        <p className="room-middle-col1-div1-p1" style={{ color: 'red' }}>
                                                                                            Non-refundable
                                                                        </p>

                                                                                    </div>
                                                                                    <div className="room-middle-col1-div1">
                                                                                        <span className="room-middle-col1-div1-sp1-0"></span>

                                                                                        <p className="room-middle-col1-div1-p1" style={{ color: 'blue' }}>
                                                                                            Read-more
                                                                        </p>

                                                                                    </div>



                                                                                </div>
                                                                                <div className="room-middle-col2" style={{ width: '140px' }}>
                                                                                    <ul className="room-middle-col2-ul">
                                                                                        <li className="room-middle-col2-li">
                                                                                            <span className="room-left-sticky-span-icon-2">

                                                                                            </span>
                                                                                            <span style={{ marginTop: '2px' }}>Accommodation</span>
                                                                                        </li>
                                                                                        <li className="room-middle-col2-li">
                                                                                            <span className="room-left-sticky-span-icon-2">

                                                                                            </span>
                                                                                            <span style={{ marginTop: '2px' }}>Wifi Access</span>
                                                                                        </li>
                                                                                        <li className="room-middle-col2-li">
                                                                                            <span className="room-left-sticky-span-icon-2">

                                                                                            </span>
                                                                                            <span style={{ marginTop: '2px' }}>Water Bottle</span>
                                                                                        </li>
                                                                                        <li className="room-middle-col2-li">
                                                                                            <span className="room-left-sticky-span-icon-2">

                                                                                            </span>
                                                                                            <span style={{ marginTop: '2px' }}>Room only</span>
                                                                                        </li>
                                                                                        <li className="room-middle-col2-li">
                                                                                            <span className="room-left-sticky-span-icon-2">

                                                                                            </span>
                                                                                            <span style={{ marginTop: '2px' }}>Free Breakfast</span>
                                                                                        </li>
                                                                                    </ul>

                                                                                </div>
                                                                                <div className="room-middle-col3" style={{ width: '138px' }}>
                                                                                    <div className="room-middle-col3-div">
                                                                                        <div class="dropdown-col2">
                                                                                            <button class="dropbtn-col2" value="hello">Dropdown</button>
                                                                                            <div class="dropdown-content-col2">
                                                                                                <a href="#">2 Adults 2 Child</a>
                                                                                                <a href="#">2 Adults 1 Child</a>
                                                                                                <a href="#">2 Adults</a>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>

                                                                                </div>
                                                                                <div className="room-middle-col4" style={{ width: '130px' }}>
                                                                                    <div className="room-middle-col4-div1">
                                                                                        <div className="room-middle-col4-div2">
                                                                                            INR {data.type}
                                                                                        </div>
                                                                                        <span>
                                                                                            <button className="room-middle-col4-btn" onClick={() => this.roomSelect(index)}>
                                                                                                Add Room {index + 1}
                                                                                            </button>
                                                                                        </span>

                                                                                    </div>

                                                                                </div>
                                                                            </div>
                                                                        )
                                                                    }
                                                                }) : ""
                                                            }







                                                        </div>





                                                    </div>
                                                </div>

                                            )

                                        }) : ""
                                    }
                                </div>

                                <div className="room-table-left-1-sticky" style={{ width: '138px' }}>
                                    <div className="room-table-left-1-sticky-1">
                                        <p className="room-table-left-1-sticky-p">
                                            No rooms selected
                                    </p>
                                        <div className="room-table-left-1-sticky-111">
                                            <span className="room-table-left-1-sticky-12">
                                                Room 1
                                    </span>
                                        </div>
                                        <div className="selected-room-1">
                                            <span className="selected-room-btn">
                                                <span className="selected-room-btn-x" onClick={this.roomRemove}>x</span></span>
                                            <div className="room-table-left-1-sticky-11">
                                                <span className="room-table-left-1-sticky-12">
                                                    Option   {this.state.option1 + 1}
                                                </span>
                                            </div>

                                        </div>
                                        <div className="room-table-left-1-sticky-112">
                                            <span className="room-table-left-1-sticky-12">
                                                Room 2
                                    </span>
                                        </div>
                                        <div className="selected-room-2">
                                            <span className="selected-room-btn">
                                                <span className="selected-room-btn-x" onClick={this.roomRemove}>x</span></span>
                                            <div className="room-table-left-1-sticky-11">
                                                <span className="room-table-left-1-sticky-12">
                                                    Option {this.state.option2 + 1}
                                                </span>
                                            </div>

                                        </div>
                                        <div className="room-table-left-1-sticky-113">
                                            <span className="room-table-left-1-sticky-12">
                                                Room 3
                                    </span>
                                        </div>
                                        <div className="selected-room-3">
                                            <span className="selected-room-btn">
                                                <span className="selected-room-btn-x" onClick={this.roomRemove}>x</span></span>
                                            <div className="room-table-left-1-sticky-11">
                                                <span className="room-table-left-1-sticky-12">
                                                    Option {this.state.option3 + 1}
                                                </span>
                                            </div>

                                        </div>
                                        <button className="book-btn" onClick={() => this.book()}>Book</button>
                                    </div>

                                    {/* {////////////////////////////////////////////////////////} */}
                                </div>



                            </div>

                        </div>
                    </div>
                </section>
                <section className="section-1" id="review">

                    <div className="review-1">
                        <div className="review-2"></div>
                        <div className="review-3">

                            <div className="review-31">
                                <h2>{(total / this.state.reviewRate.length).toFixed(1)}</h2>
                            </div>
                            <div className="review-32">
                                <span className="review-33">{total} Ratings</span>
                                <span className="review-33">{this.state.reviewRate.length} Reviews</span>
                            </div>

                        </div>
                        <div className="review-5" >
                            <ul className="review-5-ul">
                                <li className="review-5-li">
                                    <span className="review-5-sp1">
                                        2.0
                                    </span>
                                    <span className="review-5-sp2">
                                        Security
                                    </span>
                                </li>
                                <li className="review-5-li">
                                    <span className="review-5-sp1">
                                        3.6
                                    </span>
                                    <span className="review-5-sp2">
                                        Staff Service
                                    </span>
                                </li>
                                <li className="review-5-li">
                                    <span className="review-5-sp1">
                                        4.8
                                    </span>
                                    <span className="review-5-sp2">
                                        HouseKeeping
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="review-5-rating-1">
                            <ul className="review-5-rating-2">
                                <li className="review-5-rating-3">
                                    <a className="review-5-rating-4"> All Reviews</a>
                                </li>
                                <li className="review-5-rating-3">
                                    <a className="review-5-rating-5"> Staff</a>
                                </li>
                                <li className="review-5-rating-3">
                                    <a className="review-5-rating-5"> Balcony</a>
                                </li>
                                <li className="review-5-rating-3">
                                    <a className="review-5-rating-5">Space in room</a>
                                </li>
                                <li className="review-5-rating-3">
                                    <a className="review-5-rating-5"> Check-in</a>
                                </li>
                                <li className="review-5-rating-3">
                                    <a className="review-5-rating-5"> Bed quality</a>
                                </li>
                                <li className="review-5-rating-3">
                                    <a className="review-5-rating-5"> Service quality</a>
                                </li>
                                <li className="review-5-rating-3">
                                    <a className="review-5-rating-5"> Room Amenties</a>
                                </li>
                                <li className="review-5-rating-3">
                                    <a className="review-5-rating-5"> Bathroom Hygiene </a>
                                </li>
                                <li className="review-5-rating-3">
                                    <a className="review-5-rating-5"> House Keeping</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className=" review-rating-text">
                        <div className="txt">
                            <input className="txttitle" name="title" onChange={this.onChange} type="text" placeholder="Enter title.."></input>
                            <StarRatings
                                className='star'
                                rating={this.state.rating}
                                starRatedColor="blue"
                                changeRating={this.changeRating}
                                numberOfStars={5}
                                name='rating'
                                starDimension="20px"
                                starSpacing="10px"
                            />

                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <textarea name="review" className="txtarea" rows="7" cols="100" onChange={this.onChange} placeholder="write your review...">
                            </textarea>
                            <button className="book-btn-1" onClick={() => this.review()}>Submit</button>
                        </div>


                    </div>
                    {
                        this.state.reviewRate.length > 0 ? this.state.reviewRate.map((data, index) => {
                            { var a = data.color }

                            return (
                                <div className=" review-5-6-1">
                                    <div className=" review-5-6-2">
                                        <div className=" review-5-6-3">
                                            <p className=" review-5-6-4">{data.title}</p>
                                            <p className=" review-5-6-5">
                                                {data.author + " " + data.date} </p>
                                            <p className=" review-5-6-6">
                                                {data.review}
                                            </p>
                                        </div>
                                        <span className=" review-5-6-7" style={{ color: a, borderColor: a }}>{(data.rating).toFixed(1)}</span>
                                    </div>
                                </div>


                            )

                        }) : ""
                    }


                </section>


            </div>


        );
    }
}
export default booking;
