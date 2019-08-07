import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Hotels from "./components/hotels";
import First from "./components/first";
import Booking from "./components/booking";
import Admin from "./components/admin";
import './App.css'



function App() {
  return (



    <Router>
    <div className="App">
      <Route exact path="/" component={First} />

      
        <Route exact path="/hotels/:place/:start/:end/:count?" component={Hotels} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/booking/:place/:start/:end/:count?" component={Booking} />

        
      </div>
  </Router>
  );
}

export default App;
