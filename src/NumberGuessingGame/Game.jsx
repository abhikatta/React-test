import React, { useState } from "react";

const NUmberGuessingGame = () => {
  const [counter, setCounter] = useState(0);
  const [guess, setGuess] = useState("How's your guess?");

  const Increment = () => {
    setCounter(counter + 1);
  };
  const Decrement = () => {
    setCounter(counter - 1);
  };
  const Check = () => {
    let guessnum = 14;
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
      className="flex flex-col min-h-screen h-screen max-h-screen w-screen">
      <div className=" flex flex-col items-center t-3 font-black text-[cyan] text-4xl bg-[#3F4856]">
        <h1>GuessingGame</h1>
      </div>
      <div
        name="number-guessing-game"
        className=" flex flex-col items-center justify-center  w-full h-full bg-[#3F4856] ">
        <div>
          <div className=" flex text-[cyan] justify-center items-center">
            {counter}
          </div>
          <button
            className="bg-[black] mx-2 my-2 transition-colors duration-300 shadow-md shadow-current hover:bg-[#8cc9ef]  border-[teal] px-2 py-1 rounded-md border-2 text-[cyan] hover:text-[#132436] font-semibold"
            onClick={Increment}>
            +Increment+
          </button>
          <button
            className="bg-[black] mx-2 my-2 transition-colors duration-300 shadow-md shadow-current hover:bg-[#8cc9ef]  border-[teal] px-2 py-1 rounded-md border-2 text-[cyan] hover:text-[#132436] font-semibold"
            onClick={Decrement}>
            -Decrement-
          </button>
        </div>
        <button
          className="bg-[black] mx-2 my-2 transition-colors duration-300 shadow-md shadow-current hover:bg-[#8cc9ef]  border-[teal] px-2 py-1 rounded-md border-2 text-[cyan] hover:text-[#132436] font-semibold"
          onClick={Check}>
          Check
        </button>
        <div className="cursor-none text-[cyan]">{guess}</div>
      </div>
    </div>
  );
};

export default NUmberGuessingGame;
