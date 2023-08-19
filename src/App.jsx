import React from "react";
import { Route, Routes } from "react-router-dom";
import NumberGuessingGame from "./NumberGuessingGame/Game";
import Meme from "./MemeGenerator/Meme";
import Navbar from "./components/Navbar";
import Home from "./Home/Home";
const App = () => {
  return (
    // navbar
    <div className="flex flex-row justify-center items-start">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/meme_generator" element={<Meme />} />
        <Route path="/number_guessing_game" element={<NumberGuessingGame />} />
      </Routes>
    </div>
  );
};

export default App;
