import React, { useState, useEffect } from "react";
import "./meme.css";
function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    url: "",
  });
  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    try {
      fetch("https://api.imgflip.com/get_memes")
        .then((data) => data.json())
        .then((memes) => setAllMemes(memes.data.memes));
    } catch (error) {
      meme.bottomText = error.message;
    }
  }, []);
  function getMeme() {
    const memeIndex = Math.ceil(Math.random() * allMemes.length);
    const newUrl = allMemes[memeIndex].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      url: newUrl,
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
      <h1 className="text-bold mt-[5%] text-7xl">Meme Generator</h1>
      <div className="   flex flex-row text-black justify-center items-center w-full h-28">
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
          // className="bg-[black] transition-colors duration-300 shadow-md shadow-current hover:bg-[#8cc9ef]  border-[teal] px-2 py-1 rounded-md border-2 text-[cyan] hover:text-[#132436] font-semibold"
          className="bg-[#375295] ml-5 px-2 py-1 shadow-md shadow-[#435324] text-white border-[#375295]"
          onClick={getMeme}>
          Get Meme
        </button>
      </div>
      <div className="flex flex-col mt-5 justify-center items-center mb-10 max-w-lg ">
        <h2 className="meme--text relative top-20 ">{meme.topText}</h2>
        {meme.url.length !== 0 ? (
          <img className=" rounded-md max-w-lg:" src={meme.url} alt="meme" />
        ) : (
          <h1>Click the button above to get a meme...</h1>
        )}

        <h2 className="meme--text relative bottom-28">{meme.bottomText}</h2>
      </div>
    </div>
  );
}

export default Meme;
