import React, { useState } from "react";

import NumberGuessingGame from "./NumberGuessingGame/Game";
import Meme from "./MemeGenerator/Meme";
import Navbar from "./components/Navbar";
import Home from "./Home/Home";
import Todo from "./Todo/Todo";
import Weather from "./WeatherApp/Weather";
const App = () => {
  // return (
  // navbar
  // <div className="flex flex-row justify-center items-start">
  //   <Navbar />
  //   <Routes>
  //     <Route path="/" element={<App />} />
  //     <Route path="/learningreact" element={<Home />} />
  //     <Route path="/meme_generator" element={<Meme />} />
  //     <Route path="/todo" element={<Todo />} />
  //     <Route path="/number_guessing_game" element={<NumberGuessingGame />} />
  //   </Routes>
  // </div>
  // Jugard for github pages:
  const [renderHome, setRenderHome] = useState(true);
  const [renderMeme, setRenderMeme] = useState(false);
  const [renderNumberGuessingGame, setRenderNumberGuessingGame] =
    useState(false);
  const [renderTodo, setRenderTodo] = useState(false);
  const [renderWeatherApp, setRenderWeatherApp] = useState(false);
  function handleRenderHome() {
    setRenderHome(true);
    setRenderMeme(false);
    setRenderNumberGuessingGame(false);
    setRenderTodo(false);
    setRenderWeatherApp(false);
    console.log("values changed to t f f f ");
  }
  function handleRenderMeme() {
    setRenderHome(false);
    setRenderMeme(true);
    setRenderNumberGuessingGame(false);
    setRenderTodo(false);
    setRenderWeatherApp(false);
    console.log("values changed to f t f f ");
  }
  function handleRenderNumberGuessingGame() {
    setRenderHome(false);
    setRenderMeme(false);
    setRenderNumberGuessingGame(true);
    setRenderTodo(false);
    setRenderWeatherApp(false);
    console.log("values changed to f f t f ");
  }
  function handleRenderTodo() {
    setRenderHome(false);
    setRenderMeme(false);
    setRenderNumberGuessingGame(false);
    setRenderTodo(true);
    setRenderWeatherApp(false);
    console.log("values changed to f f f t ");
  }
  function handleRenderWeatherApp() {
    setRenderHome(false);
    setRenderMeme(false);
    setRenderNumberGuessingGame(false);
    setRenderTodo(false);
    setRenderWeatherApp(true);
  }

  return (
    <div className="flex flex-row justify-center items-start">
      <Navbar
        handleRenderHome={handleRenderHome}
        handleRenderMeme={handleRenderMeme}
        handleRenderNumberGuessingGame={handleRenderNumberGuessingGame}
        handleRenderTodo={handleRenderTodo}
        handleRenderWeatherApp={handleRenderWeatherApp}
      />
      {renderHome && <Home />}
      {renderMeme && <Meme />}
      {renderNumberGuessingGame && <NumberGuessingGame />}
      {renderTodo && <Todo />}
      {renderWeatherApp && <Weather />}
    </div>
  );
};

export default App;
