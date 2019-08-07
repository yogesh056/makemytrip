import React, { Component } from "react";
import "../css/cities.css";
class cities extends Component {
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
      <div className="cities-main">
          <div className="cities-main1">
              <div className="city">
                  <img src="https://promos.makemytrip.com/store/GoaDT.JPG" className="city-img">
                      
                  </img>
                  <div className="city-desc">
                      <p className="city-p1">
                          <p className="city-p11"> Goa</p>
                      </p>
                      <p className="city-p1">
                          <p className="city-p2">
                            Hotels,Budget Hotels,Best Hotels,Resort,North Goa,Villas
                          </p>
                      </p>
                  </div>
              </div>
              <div className="city">
                  <img src="https://promos.makemytrip.com/store/DelhiDT.JPG" className="city-img">
                      
                  </img>
                  <div className="city-desc">
                      <p className="city-p1">
                          <p className="city-p11"> Delhi</p>
                      </p>
                      <p className="city-p1">
                          <p className="city-p2">
                            Hotels,Budget Hotels,Best Hotels,Resort,South Delhi,Villas
                          </p>
                      </p>
                  </div>
              </div>
              <div className="city">
                  <img src="https://promos.makemytrip.com/store/BangaloreDT.JPG" className="city-img">
                      
                  </img>
                  <div className="city-desc">
                      <p className="city-p1">
                          <p className="city-p11"> Banglore</p>
                      </p>
                      <p className="city-p1">
                          <p className="city-p2">
                            Hotels,Budget Hotels,Best Hotels,Resort,Electronic city,Villas
                          </p>
                      </p>
                  </div>
              </div>
              <div className="city">
                  <img src="http://promos.makemytrip.com/images/50x50-Ooty-23052019.png" className="city-img">
                      
                  </img>
                  <div className="city-desc">
                      <p className="city-p1">
                          <p className="city-p11"> Ooty</p>
                      </p>
                      <p className="city-p1">
                          <p className="city-p2">
                            Hotels,Budget Hotels,Best Hotels,Resort,Top Hill,Villas
                          </p>
                      </p>
                  </div>
              </div>
              <div className="city">
                  <img src="https://promos.makemytrip.com/store/MumbaiDT.JPG" className="city-img">
                      
                  </img>
                  <div className="city-desc">
                      <p className="city-p1">
                          <p className="city-p11"> Mumbai</p>
                      </p>
                      <p className="city-p1">
                          <p className="city-p2">
                            Hotels,Budget Hotels,Best Hotels,Resort,India Gate,Villas
                          </p>
                      </p>
                  </div>
              </div>
              <div className="city">
                  <img src="http://promos.makemytrip.com/images/50x50-Shimla-23052019.png" className="city-img">
                      
                  </img>
                  <div className="city-desc">
                      <p className="city-p1">
                          <p className="city-p11"> Shimla</p>
                      </p>
                      <p className="city-p1">
                          <p className="city-p2">
                            Hotels,Budget Hotels,Best Hotels,Resort,Villas
                          </p>
                      </p>
                  </div>
              </div>
              <div className="city">
                  <img src="https://promos.makemytrip.com/store/JaipurDT.JPG" className="city-img">
                      
                  </img>
                  <div className="city-desc">
                      <p className="city-p1">
                          <p className="city-p11"> Jaipur</p>
                      </p>
                      <p className="city-p1">
                          <p className="city-p2">
                            Hotels,Budget Hotels,Best Hotels,Resort,South Jaipur,Villas
                          </p>
                      </p>
                  </div>
              </div>
              <div className="city">
                  <img src="data:image/jpeg;base64,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" className="city-img">
                      
                  </img>
                  <div className="city-desc">
                      <p className="city-p1">
                          <p className="city-p11"> Manali</p>
                      </p>
                      <p className="city-p1">
                          <p className="city-p2">
                            Hotels,Budget Hotels,Best Hotels,Resort,East Manali,Villas
                          </p>
                      </p>
                  </div>
              </div>
              <div className="city">
                  <img src="http://promos.makemytrip.com/images/50x50-Other-23052019.png" className="city-img">
                      
                  </img>
                  <div className="city-desc">
                      <p className="city-p1">
                          <p className="city-p11"> Other</p>
                      </p>
                      <p className="city-p1">
                          <p className="city-p2">
                            Hotels,Budget Hotels,Best Hotels,Resort,Villas
                          </p>
                      </p>
                  </div>
              </div>
          </div>
      </div>
     
    );
  }
}

export default cities;
