import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
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
  function handleRenderHome() {
    setRenderHome(true);
    setRenderMeme(false);
    setRenderNumberGuessingGame(false);
    setRenderTodo(false);
    console.log("values changed to t f f f ");
  }
  function handleRenderMeme() {
    setRenderHome(false);
    setRenderMeme(true);
    setRenderNumberGuessingGame(false);
    setRenderTodo(false);
    console.log("values changed to f t f f ");
  }
  function handleRenderNumberGuessingGame() {
    setRenderHome(false);
    setRenderMeme(false);
    setRenderNumberGuessingGame(true);
    setRenderTodo(false);
    console.log("values changed to f f t f ");
  }
  function handleRenderTodo() {
    setRenderHome(false);
    setRenderMeme(false);
    setRenderNumberGuessingGame(false);
    setRenderTodo(true);
    console.log("values changed to f f f t ");
  }

  return (
    <div className="flex flex-row justify-center items-start">
      {/* <Navbar
        handleRenderHome={handleRenderHome}
        handleRenderMeme={handleRenderMeme}
        handleRenderNumberGuessingGame={handleRenderNumberGuessingGame}
        handleRenderTodo={handleRenderTodo}
      />
      {renderHome && <Home />}
      {renderMeme && <Meme />}
      {renderNumberGuessingGame && <NumberGuessingGame />}
      {renderTodo && <Todo />} */}
      <Weather />
    </div>
  );
};

export default App;
