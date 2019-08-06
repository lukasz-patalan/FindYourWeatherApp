import React, { Component } from 'react';
import './App.css';
import { Form } from "./Form"
import { Result } from "./Result"
import { Clock } from "./Clock"

const APIKEY = `5f138fbd42045a96c7747ef12a87530d`
const nowDate = new Date().toLocaleDateString()
class App extends Component {
  state = {
    imgs: [
      "https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/128x128/Sunny.png",
      "https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/256x256/Overcast.png",
      "https://cdn4.iconfinder.com/data/icons/iconsland-weather/PNG/128x128/Hail_Heavy.png"
    ],
    value: "",
    date: nowDate,
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: "",
    description: "",
    minTemp: "",
    maxTemp: "",

  }

  handleInputChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  findCity = (event) => {
    event.preventDefault()  //!!!!
    const API = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&APPID=${APIKEY}&units=metric`

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("nie udało sie")
      }
      )
      .then(response => response.json())
      .then(data => {

        this.setState({
          value: "",
          err: false,
          city: this.state.value + ", ",
          sunrise: "wschód : " + new Date(data.sys.sunrise * 1000).toLocaleTimeString(),
          sunset: "zachód: " + new Date(data.sys.sunset * 1000).toLocaleTimeString(),
          temp: Math.round(data.main.temp) + " °C",
          pressure: "Ciśnienie: " + data.main.pressure + " hPa",
          wind: data.wind.speed,
          description: data.weather[0].main,
          minTemp: Math.round(data.main.temp_min) + " °C/ ",
          maxTemp: + Math.round(data.main.temp_max) + " °C",
        })

      }
      )
      .catch(error => {
        this.setState({
          value: "",
          err: true,
          city: this.state.value
        })
      })
  }






  render() {
    return (
      <div className="App">

        <Clock />
        <Form value={this.state.value}
          change={this.handleInputChange}
          search={this.findCity}
        />

        <Result
          weather={this.state}
        />
      </div>
    );
  }
}

export default App;
