import React from "react";
// import cloud from "../pictures/clouds-icon.svg";
import DailyWeatherDetails from "./DailyWeatherDetails";
import WeatherSlider from "./WeatherSlider";
import "../css/WeatherDisplay.css";
import LocationSearchBar from "./LocationSearchBar.js";
// import WeatherSlider from "./WeatherSlider.js";
import BackgroundIMG from "./Background-img-change";
import Snow from "./Snow.js";
import Rain from "./Rain.js";
import Clouds from "./Clouds.js";
import BgMeteo from "./BgMeteo";

var today = new Date();
var day = today.getDay();
var daylist = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday"
];

let hour = today.getHours();
let minute = today.getMinutes();
let second = today.getSeconds();
let prepand = hour >= 12 ? " PM " : " AM ";
hour = hour >= 12 ? hour - 12 : hour;
if (hour === 0 && prepand === " PM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Noon";
  } else {
    hour = 12;
    prepand = " PM";
  }
}
if (hour === 0 && prepand === " AM ") {
  if (minute === 0 && second === 0) {
    hour = 12;
    prepand = " Midnight";
  } else {
    hour = 12;
    prepand = " AM";
  }
}
let Today = new Date();
let date =
  Today.getFullYear() + "." + (Today.getMonth() + 1) + "." + Today.getDate();

function WeatherCard(props) {
  return (
    <div className="weatherCard-container">
      {/* <div className="background" /> */}
      <div className="bg-container">
        <BackgroundIMG weatherDetailsProps={props.weatherProps} />
        <BgMeteo
          weatherCondition={props.weatherProps.list[0].weather[0].main}
        />
      </div>
      <div className="Weather-infos">
        <div className="date-temperature">
          <LocationSearchBar
            onSearch={props.onSearch}
            handleChange={props.handleChange}
          />
          <ul>
            <li className="temperature">
              {Math.round(props.weatherProps.list[0].main.temp)}°
            </li>
            <li className="">
              <p className="city">{props.weatherProps.city.name}</p>
              <p className="date">
                {daylist[day]}, {date}
                <br /> {hour}:{minute}
                {prepand}
              </p>
            </li>
          </ul>
        </div>
        <DailyWeatherDetails weatherDetailsProps={props.weatherProps} />
        <div className="weekly-weather slider">
          {/* slider component goes here! */}
          {props.weatherProps.list.slice(0, 5).map((element, idx) => (
            <WeatherSlider
              key={idx}
              day={daylist[(day + idx + 1) % daylist.length]}
              daylist={daylist}
              uniquePropsForecast={element}
            />
          ))}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}

export default WeatherCard;
