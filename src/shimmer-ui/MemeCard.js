import React, { forwardRef } from "react";

const MemeCard = forwardRef((props, ref) => {
  const { url, author, title } = props.meme;
  return (
    <div ref={ref} className="p-5 m-5 border border-black">
      <img className="w-64 h-64" alt="meme" src={url} />
      <p>{author}</p>
    </div>
  );
});

export default MemeCard;
