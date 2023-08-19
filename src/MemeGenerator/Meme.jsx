import React, { useState, useEffect } from "react";
import "./meme.css";
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
    <div
      name="meme_generator"
      className="flex flex-col justify-center items-center max-h-full min-h-screen w-full bg-[#5c687b]">
      <div className=" mt-[15%]  flex flex-row text-black justify-center items-center w-full h-28">
        <input
          type="text"
          className="bg-[#375295] mr-5 px-2 py-1 text-white shadow-md shadow-[#435324] border-[#375295]"
          name="topText"
          onChange={handleTextChange}
          placeholder="Top Text"
          value={meme.topText}
        />
        <input
          type="text"
          name="bottomText"
          className="bg-[#375295] ml-5 px-2 py-1 shadow-md shadow-[#435324] text-white border-[#375295]"
          onChange={handleTextChange}
          placeholder="Bottom Text"
          value={meme.bottomText}
        />
      </div>
      <div>
        <button
          className="bg-[black] transition-colors duration-300 shadow-md shadow-current hover:bg-[#8cc9ef]  border-[teal] px-2 py-1 rounded-md border-2 text-[cyan] hover:text-[#132436] font-semibold"
          onClick={getMeme}>
          Get Meme
        </button>
      </div>
      <div className="flex flex-col mt-5 justify-center items-center  max-w-lg ">
        <h2 className="meme--text relative top-20 ">{meme.topText}</h2>
        <img
          className=" rounded-md max-w-lg:"
          src={meme.randomImage}
          alt="Click The Button above to get a meme "
        />
        <h2 className="meme--text relative bottom-28">{meme.bottomText}</h2>
      </div>
    </div>
  );
}

export default Meme;
