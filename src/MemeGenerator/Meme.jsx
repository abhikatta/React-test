import React, { useState, useEffect } from "react";
import "./index.css";
function Meme() {
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((data) => data.json())
      .then((memes) => setAllMemes(memes.data.memes))
      .finally(console.log("Memes Fetched"));
  }, []);
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    url: "https://i.imgflip.com/1bij.jpg",
  });
  const [allMemes, setAllMemes] = useState([]);
  function getMeme() {
    const memeIndex = Math.ceil(Math.random() * allMemes.length);
    const url = allMemes[memeIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  function handleTextChange(e) {
    const { name, value } = e.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <div name="meme_generator" className="w-full h-screen max-h-screen">
      <div className="flex flex-col justify-center items-center h-screen w-screen bg-[#5c687b]">
        <input
          type="text"
          name="topText"
          onChange={handleTextChange}
          placeholder="Top Text"
          value={meme.topText}
        />
        <input
          type="text"
          name="bottomText"
          onChange={handleTextChange}
          placeholder="Bottom Text"
          value={meme.bottomText}
        />
        <button onClick={getMeme}>Get Meme</button>
        <div className="flex flex-col justify-center items-center">
          <img
            className="max-w-[90%] rounded-md"
            src={meme.randomImage}
            alt="Click The Button above to get a meme "
          />
          <div className="meme--text top-0">{meme.topText}</div>
          <div className="meme--text bottom-0">{meme.bottomText}</div>
        </div>
      </div>
    </div>
  );
}

export default Meme;
