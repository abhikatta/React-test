import React, { useState } from "react";
import { API } from "./weather.config";

function Weather() {
  const [location, setLocation] = useState("");
  const [forCustomCity, setForCustomCity] = useState(false);
  const [weather, setWeather] = useState();
  const [customCity, setCustomCity] = useState("");
  // q = 48.8567,2.3508;

  if (navigator.geolocation && !forCustomCity) {
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
  function getWeatherFromCity(e) {
    const city = e;
    fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API.apiKey}&q=${city}&days=1&aqi=no&alerts=no`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeather(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }
  function error() {
    console.log("Unable to retrieve your location");
  }
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen bg-cover sm:bg-[url(D:\Projects\React\learningreact\src\WeatherApp\assets\mobilebackground.jpg)] md:bg-[url(D:\Projects\React\learningreact\src\WeatherApp\assets\pcbackground.jpg)] bg-[url(D:\Projects\React\learningreact\src\WeatherApp\assets\mobilebackground.jpg)] xs:bg-[url(D:\Projects\React\learningreact\src\WeatherApp\assets\mobilebackground.jpg)] text-teal-900 md:text-white">
      <div className="flex flex-col rounded-[2rem] justify-center items-center md:w-[33.5rem] md:h-[16rem] lg:w-[39.25rem] lg:h-[17.5rem] sm:w-[31rem] sm:h-[15rem] h-[13.75rem] w-[27.25rem] backdrop-blur-lg"></div>
      <div className="flex flex-col justify-center items-center w-screen h-screen absolute">
        <h1 className="md:text-5xl lg:text-6xl text-4xl text-center font-extrabold xs:top-[12%] sm:top-[10%] top-[10%]  absolute">
          Whatever Weather
        </h1>
        <div className="flex flex-row  justify-center items-center top-0 rounded-[2rem] p-3 border-l-2  border-r-2 border-l-[#63cca9] border-r-[#63cca9]">
          {weather && (
            <div className="w-auto animate-pulse hover:animate-none hover:cursor-pointer flex flex-row mx-4">
              <p className="md:text-5xl sm:text-4xl text-3xl lg:text-6xl font-bold mx-3">
                {weather.current.temp_c}
              </p>
              <p className="text-sm flex justify-center">
                <sup className="font-bold text-sm">o</sup>
              </p>
              <p className="md:text-5xl sm:text-4xl text-3xl lg:text-6xl font-bold">
                C
              </p>
              <div className=" w-[20%] h-[20%]">
                <img
                  className=""
                  src={weather.current.condition.icon}
                  alt="current weather icon"></img>
              </div>
            </div>
          )}
          {weather && location.length !== 0 && (
            <div className=" flex flex-col">
              <p className="md:text-5xl sm:text-4xl text-3xl lg:text-6xl font-bold">
                {weather && weather.location.name}
              </p>
              <p className=" h-auto md:text-5xl sm:text-4xl text-3xl lg:text-6xl p-1">
                {weather.location.region}
              </p>
              <p className=" h-auto md:text-4xl lg:text-5xl sm:text-2xl text-xl p-1">
                {weather.location.country}
              </p>
              <p className=" h-auto md:text-4xl lg:text-5xl sm:text-2xl text-xl p-1">
                Date:{" "}
                {JSON.stringify(weather.location.localtime)
                  .split(" ")[0]
                  .split('"')}
              </p>
              <p className=" h-auto md:text-4xl lg:text-5xl sm:text-2xl text-xl p-1">
                Last updated:{" "}
                {JSON.stringify(weather.location.localtime)
                  .split(" ")[1]
                  .split('"')}
              </p>
            </div>
          )}
        </div>
        <footer className="bottom-0 absolute hover:text-cyan-300 transition-colors duration-300 hover:cursor-pointer hover:animate-bounce">
          Powered by weatherapi.com
        </footer>
      </div>
    </div>
  );
}
export default Weather;
