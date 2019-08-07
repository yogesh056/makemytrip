const mongoose = require('mongoose')
const Schema = mongoose.Schema
const HotelsSchema = new Schema({
  hotel: {
    type: String,
    required:true
  },
  city: {
    type: String,
    required:true
  },
  landmark: {
    type: String,
    required:true
  },
  direction: {
    type: String,
    required:true
  },
  star: {
    type: Number,
    required:true
  },
  prize: {
    type: Number,
    required:true
  },
  offer: {
    type: Number,
    required:true
  },
  swimmingpool: {
    type: Boolean,
    
  },
  parking: {
    type: Boolean,
    
  },
  bf: {
    type: Boolean,
    
  },
  housekeeping: {
    type: Boolean,
   
  },
  imgurl:{
    type:Array,
    required:true
  },
  hotelList:{
    type:Array,
    required:true
  },
  reviews: {
    type:Array,
    required:true
  }
})
module.exports = User = mongoose.model('hotels', HotelsSchema)