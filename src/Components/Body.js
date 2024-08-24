import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

function Body() {
  const [memes, setMemes] = useState(null);

  useEffect(() => {
    fetchMemes();
  }, []);

  const fetchMemes = async () => {
    const response = await fetch("https://meme-api.com/gimme/20");
    const data = await response.json();
    console.log(data);
    setMemes(data.memes);
  };

  return (
    <div className="flex flex-wrap ">
      {memes ? (
        memes.map((meme, i) => <MemeCard key={i} meme={meme} />)
      ) : (
        <Shimmer />
      )}
    </div>
  );
}

export default Body;
