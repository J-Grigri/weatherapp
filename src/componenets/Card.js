import React, { Component, componentDidMount } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: null
    }
  }
  //get current user location
  getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {this.localWeather(position.coords.latitude, position.coords.longitude) })
  }
  //get location by geographic coordinates
async localWeather (lat, lon) {
  const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_APIKEY}&units=metric`) ;
  const data = await resp.json() ; 

  //save data to the state
  this.setState({localWeather:data});
}
componentDidMount(){
  this.getLocation();
}
render(){
  console.log("localWeather", this.state.localWeather); 

  if (!this.state.localWeather) return <h1>Loading....... </h1>
 
  else return (
    <>
    
    <div class="container-fluid">
      <div id="myCarousel" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner row w-100 mx-auto">
              <div class="carousel-item col-md-4 active">
                  <div class="card">
                    <img class="card-img-top img-fluid" alt="Card image cap"/>
                    <div class="card-body">
                  <h2 class="card-title">{this.state.localWeather.name}</h2>
                      <h3 class="card-text">{this.state.localWeather.main.temp}°C</h3>
                  <h4 class="card-text">{this.state.localWeather.weather[0].description}</h4>
                      <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </>
  )
}
}

export default App;
