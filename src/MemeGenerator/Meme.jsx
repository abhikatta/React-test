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
    fetch("https://api.imgflip.com/get_memes")
      .then((data) => data.json())
      .then((memes) => setAllMemes(memes.data.memes));
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
    <div className="flex flex-col justify-center items-center w-full min-h-screen h-full bg-slate-600 text-teal-900 md:text-white">
      <div className="flex flex-col justify-center items-center w-full min-h-screen pt-[15%] h-full ">
        <h1 className="md:text-5xl lg:text-6xl text-4xl text-center font-extrabold ">
          Meme Generator
        </h1>
        {meme.url.length !== 0 && (
          <div className="flex flex-row text-black my-[5%] justify-center items-center ">
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
        )}

        <button
          className="bg-[#375295]  px-2 py-1 shadow-md shadow-[#435324] text-white border-[#375295]"
          onClick={getMeme}>
          Get Meme
        </button>

        <div className="flex flex-col mt-[5%] justify-center items-center mb-10 max-w-lg ">
          <h2 className="meme--text relative top-20 ">{meme.topText}</h2>
          {meme.url && meme.url.length !== 0 ? (
            <img
              className=" rounded-md "
              src={meme.url}
              alt="Get some internet, you poor broke ass!"
            />
          ) : (
            <h1>Click the button above to get a meme...</h1>
          )}

          <h2 className="meme--text relative bottom-28">{meme.bottomText}</h2>
        </div>
      </div>
    </div>
  );
}

export default Meme;
