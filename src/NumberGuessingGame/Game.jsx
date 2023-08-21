import React, { useState } from "react";
import "./ngg.css";
const NUmberGuessingGame = () => {
  const [counter, setCounter] = useState(0);
  const [guess, setGuess] = useState("How's your guess?");
  const guessnum = 14;
  const Increment = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };
  const Decrement = () => {
    setCounter((prevCounter) => prevCounter - 1);
  };
  const Check = () => {
    if (counter > guessnum) {
      setGuess("More than guess value");
    } else if (counter < guessnum) {
      setGuess("Less than guess value");
    } else if (counter === guessnum) {
      setGuess("Bingo!");
    }
  };
  return (
    <div
      name="number_guessing_game"
      className="flex flex-col min-h-screen h-screen w-screen">
      <div
        name="number-guessing-game"
        className=" flex flex-col items-center justify-center  w-full h-full bg-[#3F4856] ">
        <h1 className=" font-extrabold mt-[5%] text-7xl text-[cyan]">
          Number Guessing Game
        </h1>
        <div>
          <div className=" flex text-[cyan] justify-center items-center">
            {counter}
          </div>
          <button
            className="bg-[black] mx-2 my-2 buttons px-2 py-1 font-semibold"
            onClick={Increment}>
            +Increment+
          </button>
          <button
            className="bg-[black] mx-2 my-2 buttons px-2 py-1  font-semibold"
            onClick={Decrement}>
            -Decrement-
          </button>
        </div>
        <button
          className="bg-[black] mx-2 my-2 buttons px-2 py-1  font-semibold"
          onClick={Check}>
          Check
        </button>
        <div className="cursor-none text-[cyan] border-2 rounded-md px-2 font-bold py-1">
          {guess}
        </div>
        <p className=" bottom-10 absolute hover:text-[cyan] transition-colors duration-500 cursor-pointer text-normal text-sm">
          Why is this here? I don't know. this was the first thing I made in
          react so just left it as is
        </p>
      </div>
    </div>
  );
};
export default NUmberGuessingGame;
