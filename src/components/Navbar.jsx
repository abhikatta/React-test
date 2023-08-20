import React from "react";

// anchors=>buttons + on press =>state change
function Navbar(props) {
  return (
    <div className="flex flex-row bg-[#4a5c61] text-[#c4d9ff] text-200 w-screen h-auto py-7 justify-around items-start fixed">
      {/* <a href="/learningreact">Home</a>
      <a href="/meme_generator">Meme Generator</a>
      <a href="/number_guessing_game">Number Guessing Game</a> */}
      <button onClick={props.handleRenderHome}>Home</button>
      <button onClick={props.handleRenderMeme}>Meme Generator</button>
      <button onClick={props.handleRenderNumberGuessingGame}>
        Number Guessing Game
      </button>
      <button onClick={props.handleRenderTodo}>Todo</button>
    </div>
  );
}

export default Navbar;
