const express = require('express')
const hotels = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const Hotel = require('../models/Hotels')
hotels.use(cors())

process.env.SECRET_KEY = 'secret'

hotels.post('/hotels', (req, res) => {

  // console.log(req.body)
  const userData = {
    hotel: req.body.hotel,
    city: req.body.city,
    landmark: req.body.landmark,
    prize: req.body.prize,
    offer: req.body.offer,
    direction: req.body.direction,
    swimmingpool: req.body.sp,
    bf: req.body.bf,
    parking: req.body.parking,
    housekeeping: req.body.housekeeping,
    imgurl: req.body.imgurl,
    hotelList:req.body.hotelList,
    star:req.body.star
  }

  Hotel.findOne({
    hotel: req.body.hotel
  })
    .then(hotel => {
      if (!hotel) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          Hotel.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registered!' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'User already exists' })
      }
    })
    .catch(err => {
      res.send("error")
    })
})
hotels.post('/all', (req, res) => {
  //var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  //console.log(req.body.city)
  Hotel.find(
    {
      city: req.body.city
    }
  )
    .then(hotel => {
      // console.log(hotel)
      if (hotel) {

        res.json(hotel)

      } else {

        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
hotels.post('/sort', (req, res) => {
  //var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  // console.log(req.body.city)
  var mysort = { prize: req.body.order };
  Hotel.find(
    {
      city: req.body.city
    }
  ).sort(mysort)
    .then(hotel => {
      console.log(hotel)
      if (hotel) {

        res.json(hotel)

      } else {

        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
hotels.post('/review', (req, res) => {
  //var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  // console.log("hi"+req.body.hotel)
  // console.log(req.body.reviews)
  Hotel.findOne({
         hotel:req.body.hotel
       })
  
    .then(hotel => {
      console.log("hhhh"+hotel)
      hotel.update(
                { $set: { reviews: req.body.reviews} },function(e){
      if (hotel) {

        res.json(hotel)

      } else {

        res.send('User does not exist')
      }
    
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
})
hotels.post('/one', (req, res) => {
  //var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  // console.log(req.body.hotel)
  Hotel.find(
    {
      hotel: req.body.hotel
    }
  )
    .then(hotel => {
      console.log(hotel)
      if (hotel) {

        res.json(hotel)

      } else {

        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
hotels.post('/filter', (req, res) => {
  //var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  console.log(req.body)
  Hotel.find({
    $or:[{$and: [{ city: req.body.Search },{ swimmingpool: req.body.Swimmingpool }],$and: [{ city: req.body.Search },{ parking: req.body.Parking }],$and: [{ city: req.body.Search },{ housekeeping: req.body.HouseKeeping }],$and: [{ city: req.body.Search },{ bf: req.body.BreakFast }]}]

  }
  )
    .then(hotel => {
      console.log("Hello"+hotel)
      if (hotel) {

        res.json(hotel)

      } else {

        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
hotels.get('/allHotels', (req, res) => {
  //var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
  //console.log(req.body.city)
  Hotel.find(
  )
    .then(hotel => {
      // console.log(hotel)
      if (hotel) {

        res.json(hotel)

      } else {

        res.send('User does not exist')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
module.exports = hotels