import React, { useCallback, useEffect, useState, useRef } from "react";
import MemeCard from "./MemeCard";
import Shimmer from "./Shimmer";

function Body() {
  const [memes, setMemes] = useState([]);
  const [showShimmer, setShowShimmer] = useState(false);
  const observer = useRef(null);

  /*
  A callback ref is a function that receives the DOM element 
  or component instance as an argument when the component mounts or unmounts.
  */
  const lastNodeRef = useCallback((node) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((enteries) => {
      if (enteries[0].isIntersecting) fetchMemes();
    });
    if (node) observer.current.observe(node);
  });

  useEffect(() => {
    window.addEventListener("scroll", handleOnScroll);
    fetchMemes();
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  const handleOnScroll = () => {
    // if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
    //   fetchMemes();
    // }
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
      {memes.map((meme, i) =>
        i == memes.length - 1 ? (
          <MemeCard ref={lastNodeRef} key={i} meme={meme} />
        ) : (
          <MemeCard key={i} meme={meme} />
        )
      )}
      {showShimmer ? <Shimmer /> : null}
    </div>
  );
}

export default Body;
