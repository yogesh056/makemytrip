const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'

users.post('/register', (req, res) => {
  const userData = {
    name:req.body.name,
    email: req.body.email,
    password: req.body.password,
  }

  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
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

users.post('/login', (req, res) => {
  User.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          // Passwords match
          console.log(user)
          const payload = {
            _id: user._id,
            name:user.name,
            email: user.email,
          }
          let token = jwt.sign(payload, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          res.send(token)
        } else {
          // Passwords don't match
          res.json({ error: 'User does not exist' })
        }
      } else {
        res.json({ error: 'User does not exist' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})


// users.get('/profile', (req, res) => {
//   var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

//   User.findOne({
//     _id: decoded._id
//   })
//     .then(user => {
//       if (user) {
//         res.json(user)
//       } else {
//         res.send('User does not exist')
//       }
//     })
//     .catch(err => {
//       res.send('error: ' + err)
//     })
// })

// users.post('/friends', (req, res) => {
//   //var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
//    console.log("in db")
//    User.findOne({
//      _id:req.body.id
//    })
  
//    //
//      .then(user => {
//        if (user) {
//        //  console.log
//          User.update({_id:req.body.id},{$set:{friends:req.body.friends}},function(e){
//          if(e)
//          {
//            error(e);
//            res.json(e)
//          }
//          else{
//            res.json(user)
//          }
//        })
//        } else {
//          res.send('no user found')
//        }
//      })
//      .catch(err => {
//        res.send('error: ' + err)
//      })
//  })
//  users.post('/friendsEvent', (req, res) => {
//   //var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)
//    console.log("in db")
//    User.findOne({
//      user_name:req.body.user_name
//    })
  
//    //
//      .then(user => {
//        if (user) {
//        //  console.log
       
      
//       User.update(
//         {user_name:req.body.user_name},
//         { $set: {mutualEvents: req.body.mutualEvent} },function(e){
//          if(e)
//          {
//            error(e);
//            res.json(e)
//          }
//          else{
//            res.json(req.body.mutualEvent)
//          }
//        })
//        } else {
//          res.send('no user found')
//        }
//      })
//      .catch(err => {
//        res.send('error: ' + err)
//      })
//  })
// users.get('/all', (req, res) => {
//   //var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

//   User.find()
//     .then(user => {
//       if (user) {
//         res.json(user)
//       } else {
//         res.send('User does not exist')
//       }
//     })
//     .catch(err => {
//       res.send('error: ' + err)
//     })
// })
module.exports = users
