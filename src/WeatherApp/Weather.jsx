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
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-cover sm:bg-[url(D:\Projects\React\learningreact\src\WeatherApp\assets\mobilebackground.jpg)] md:bg-[url(D:\Projects\React\learningreact\src\WeatherApp\assets\pcbackground.jpg)] bg-[url(D:\Projects\React\learningreact\src\WeatherApp\assets\mobilebackground.jpg)] xs:bg-[url(D:\Projects\React\learningreact\src\WeatherApp\assets\pcbackground.jpg)] text-teal-900 md:text-white">
      <div className="flex flex-col justify-center items-center w-screen h-[90vh] mt-[10vh] backdrop-blur-lg absolute "></div>
      <div className="flex flex-col justify-center items-center w-screen h-screen absolute">
        <h1 className="md:text-5xl lg:text-6xl text-4xl text-center font-extrabold top-[10%]  absolute">
          Whatever Weather
        </h1>
        <div className="flex flex-row  justify-center items-center top-0 rounded-[2rem] p-3 border-2 border-[#435342]">
          {weather && (
            <div className="w-auto animate-pulse flex flex-row mx-4">
              <p className="md:text-5xl  text-4xl lg:text-6xl font-bold mx-3">
                {weather.current.temp_c}
              </p>
              <p className="text-sm flex justify-center">
                <sup className="font-bold text-sm">o</sup>
              </p>
              <p className="md:text-5xl text-4xl lg:text-6xl font-bold">C</p>
              <div className="  w-[20%] h-[20%]">
                <img
                  className=""
                  src={weather.current.condition.icon}
                  alt="current weather icon"></img>
              </div>
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
              <p className=" h-auto text-2xl p-1">
                Date:{" "}
                {JSON.stringify(weather.location.localtime)
                  .split(" ")[0]
                  .split('"')}
              </p>
              <p className=" h-auto text-2xl p-1">
                Last updated:{" "}
                {JSON.stringify(weather.location.localtime)
                  .split(" ")[1]
                  .split('"')}
              </p>
            </div>
          )}
        </div>
        <footer className="bottom-0 absolute hover:text-cyan-300 transition-colors duration-300 hover:cursor-pointer">
          <a href="https://www.weatherapi.com/">Powered by weatherapi.com</a>
        </footer>
      </div>
    </div>
  );
}
export default Weather;
