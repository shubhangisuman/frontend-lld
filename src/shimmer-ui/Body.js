import React, { useEffect, useState } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

function Body() {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
    fetchMemes();
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  const handleOnScroll = () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      fetchMemes();
    }
  };

  const fetchMemes = async () => {
    setShowShimmer(true);
    const response = await fetch("https://meme-api.com/gimme/20");
    const data = await response.json();
    setShowShimmer(false);
    setMemes((prevValue) => [...prevValue, ...data.memes]);
  };

  return (
    <div className="flex flex-wrap ">
      {memes.map((meme, i) => (
        <MemeCard key={i} meme={meme} />
      ))}
      {showShimmer ? <Shimmer /> : null}
    </div>
  );
}

export default Body;
