import React, { Component } from 'react';
//const jwt = require('jsonwebtoken')
 import { addHotel } from './UserFunctions'
 import {storage} from '../firebase';
import "../css/admin.css";
const $ = window.$;
class Admin extends Component {
    constructor() {
        super()
        this.state = {
            star:'',
            hotelList:[],
            hotelName:"",
            city:'',
            landmark:"",
            prize:'',
            offer:'',
            direction:'',
            sp:false,
            bf:false,
            parking:false,
            housekeeping:false,
            imgurl:''
        }

        this.onChange = this.onChange.bind(this)
        this.onChange1 = this.onChange1.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

uploadImage=(e)=>
  {
    
    const files=e.target.files;
   var img=[];
    console.log()
    Object.keys(files).map(function(key) {
  const uploadTask=storage.ref(`images/${files[key].name}`).put(files[key]);
    uploadTask.on('state_changed',(snapshot)=>{},
    (error)=>{console.log(error)},
    ()=>{
      storage.ref('images').child(files[key].name).getDownloadURL().then(url=>{console.log(url)
        img[key]=url
        console.log(img[key])
      
      })
    })
  });
  this.setState({imgurl:img})

  }
    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
        console.log(e.target.name+"-"+e.target.value)
    }
    onChange1(e) {
        this.setState({ [e.target.name]: e.target.checked });
        console.log(e.target.name+"-"+e.target.checked)
    }
    onSubmit(e) {
        e.preventDefault()
        
          var id=document.getElementsByClassName("aa")
          var id1=document.getElementsByClassName("bb")
          const hello=[]
          for (let i = 0; i < id.length; i++) {
            const hotels={
                type:id[i].value,
                Inr:id1[i].value
            }
            hello.push(hotels)
          }
          this.setState({hotelList:hello})
          const hotel = {
            name:this.state.hotelName,
            city:this.state.city,
            landmark:this.state.landmark,
            star:this.state.star,
            prize:this.state.prize,
            offer:this.state.offer,
            direction:this.state.direction,
            sp:this.state.sp,
            bf:this.state.bf,
            parking:this.state.parking,
            housekeeping:this.state.housekeeping,
            imgurl:this.state.imgurl,
            hotelList:hello
       
           }
           console.log(hotel)
        
       
    
      
            addHotel(hotel).then(res => {
                console.log(res)
            
            })
        
    }
    onN=()=>{
        console.log("kkkk")
    }
    componentDidMount()
    {
        $(document).ready(function() {  
            $("#Add").on("click", function() {  
                $("#textboxDiv").append("<div><br>INR:<input class='aa' type='text' pattern='[0-9]' title='Not a valid price' name='type' onChange={{this.onN}}><br><select name='cars' class='bb'><option value='Superior Rio'>Superior Rio</option><option value='Luxury Rio'>Luxury Rio</option><option value='Rio Suite'>Rio Suite</option><option value='Royale Luxury'>Royale Luxury</option></select><br><br></div>");  
            });  
            $("#Remove").on("click", function() {  
                $("#textboxDiv").children().last().remove();  
            });  
        });  
    }

    render() {
        return (
            <div className="container-form">
                <form  noValidate onSubmit={this.onSubmit} action="post">
                    <div className="row">
                        <div className="col-25">
                            <label className="label-1" for="fname">Hotel Name</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="fname" name="hotelName" placeholder="Hotel name" value={this.state.hotelName}
                  onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label className="label-1" for="lname">City</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="city" placeholder="City name" value={this.state.city}
                  onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label className="label-1" for="lname">Star</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="star" placeholder="Star" value={this.state.star}
                  onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label className="label-1" for="lname">Landmark</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="landmark" placeholder="landmark" value={this.state.lamdmark}
                  onChange={this.onChange}/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label className="label-1" for="lname">Prize</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="prize" placeholder="Prize" value={this.state.prize}
                  onChange={this.onChange} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-25">
                            <label className="label-1" for="lname">Offer %</label>
                        </div>
                        <div className="col-75">
                            <input type="text" id="lname" name="offer" placeholder="Offer"  value={this.state.offer}
                  onChange={this.onChange}/>
                        </div>
                    </div>
                    <label class="container" >Swimming pool
  <input type="checkbox" name="sp" value={this.state.sp}
                  onChange={this.onChange1}/>
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">Parking
  <input type="checkbox" name="parking" value={this.state.parking}
                  onChange={this.onChange1}/>
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">HouseKeeping
  <input type="checkbox" name="housekeeping"value={this.state.housekeeping}
                  onChange={this.onChange1} />
                        <span class="checkmark"></span>
                    </label>
                    <label class="container">Breakfast
  <input type="checkbox" name="bf" value={this.state.bf}
                  onChange={this.onChange1} />
                        <span class="checkmark"></span>
                    </label>
                    <br></br>
                    <input style={{paddigRight:"10px"}}onChange={this.uploadImage} id="file-upload" type="file"multiple/>

                    <div className="row">
                        <div className="col-25">
                            <label className="label-1" for="subject">Direction</label>
                        </div>
                        <div className="col-75">
                            <textarea id="subject" name="direction" placeholder="Write something.." value={this.state.direction}
                  onChange={this.onChange}></textarea>
                        </div>
                    </div>

                    <button class="cc"  type="button" id="Add">+</button> <button class="cc" type="button"id="Remove">X</button>  
    <div id="textboxDiv" onChange={this.onN}></div>  
   
                    <div className="row">
                        <input type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
    }
}

export default Admin;
