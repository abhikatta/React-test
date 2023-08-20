import React, { useState } from "react";
import { API } from "./weather.config";

function Weather() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState();
  // q = 48.8567,2.3508;

  if (navigator.geolocation) {
    if (location.length === 0) {
      navigator.geolocation.getCurrentPosition(success, error);
    }
  } else {
    console.log("Geolocation not supported");
  }

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    setLocation({ latitude, longitude });
    console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    // Make API call to OpenWeatherMap
    if (location.length === 0) {
      fetch(
        `https://api.weatherapi.com/v1/current.json?key=${API.apiKey}&q=${latitude},${longitude}&days=1&aqi=no&alerts=no`
      )
        .then(
          console.log(
            `https://api.weatherapi.com/v1/current.json?key=${API.apiKey}&q=${latitude},${longitude}&days=1&aqi=no&alerts=no`
          )
        )
        .then((response) => response.json())
        .then((data) => {
          setWeather(data);
          console.log(data);
        })
        .catch((error) => console.log(error));
    }
  }
  function error() {
    console.log("Unable to retrieve your location");
  }
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen bg-slate-800 text-teal-600">
      <h1 className="md:text-5xl lg:text-6xl text-4xl text-center font-extrabold top-[10%]  absolute">
        Whatever Weather
      </h1>
      <div className="flex flex-row justify-center items-center top-0  border-2 border-[#435342]">
        {weather && (
          <div className="w-auto flex flex-row mx-4">
            <p className="md:text-5xl text-4xl lg:text-6xl font-bold mx-3">
              {weather.current.temp_c}
            </p>
            <p className="text-sm flex justify-center">
              <sup className="font-bold">O</sup>
            </p>
            <p className="md:text-5xl text-4xl lg:text-6xl font-bold">C</p>
            <img
              className="w-[20%] h-[20%]"
              src={weather.current.condition.icon}
              alt="current weather icon"></img>
          </div>
        )}
        {weather && location.length !== 0 && (
          <div className=" flex flex-col">
            <p className=" h-auto font-bold md:text-5xl lg:text-6xl text-4xl  p-1">
              {weather && weather.location.name}
            </p>
            <p className=" h-auto md:text-5xl text-4xl lg:text-6xl p-1">
              {weather.location.region}
            </p>
            <p className=" h-auto text-2xl p-1">{weather.location.country}</p>
            <p className=" h-auto text-2xl p-1">{weather.location.localtime}</p>
          </div>
        )}
      </div>
    </div>
  );
}
export default Weather;
