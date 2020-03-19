import React, { Component, componentDidMount } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      weather: null
    }
  }
  //get current user location
  getLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {this.currentWeather(position.coords.latitude, position.coords.longitude) })
  }
  //get location by geographic coordinates
async currentWeather (lat, lon) {
  const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_APIKEY}&units=metric`) ;
  const data = await resp.json() ; 

  //save data to the state
  this.setState({weather:data});
}
componentDidMount(){
  this.getLocation();
}
render(){
  console.log("weather", this.state.weather); 

  if (!this.state.weather) return <h1>Loading....... </h1>
 
  else return (
    <div className="outputBox">
      <h1>Weather App</h1>
      <h2>{this.state.weather.name}</h2>
      <h3>{this.state.weather.weather[0].description}</h3>
      <h3>{this.state.weather.main.temp}°C</h3>
    </div>
  )
}
}

export default App;
