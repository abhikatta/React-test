import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row bg-[#0d370d] text-fuchsia-200 w-screen h-auto py-7 justify-around items-start fixed">
      <a href="/">Home</a>

      <a href="/meme_generator">Meme Generator</a>

      <a href="/number_guessing_game">Number Guessing Game</a>
    </div>
  );
}

export default Navbar;
