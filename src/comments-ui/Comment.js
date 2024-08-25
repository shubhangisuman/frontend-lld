import React, { useState } from "react";

function Comment({ data, setData }) {
  const [inputValue, setInputValue] = useState("");
  const [showCommentBox, setShowCommentBox] = useState(false);

  const addComment = (comments, curNode) => {
    return comments.map((obj) => {
      console.log(obj.id, curNode.id);
      if (obj.id === curNode.id) {
        return {
          ...obj,
          replies: [
            ...obj.replies,
            { id: Date.now().toString(), comment: inputValue, replies: [] },
          ],
        };
      } else {
        return {
          ...obj,
          replies: addComment(obj.replies, data),
        };
      }
    });
  };

  const onAddReply = () => {
    setShowCommentBox(true);
  };

  const onSubmit = () => {
    setShowCommentBox(false);
    setData((prevValue) => {
      return addComment(prevValue, data);
    });
    setInputValue("");
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <div className="flex flex-col ml-2 max-w-xs border border-black">
        <p className="text-left">{data.comment}</p>
        <button className="bg-blue-300 w-20" onClick={onAddReply}>
          Add reply
        </button>
      </div>
      {showCommentBox ? (
        <div className="flex flex-col max-w-xs ml-4 mt-2">
          <input
            className="border border-black p-2"
            placeholder="Write a comment..."
            value={inputValue}
            onChange={handleInputChange}
          />
          <button className="bg-blue-300 mt-2" onClick={onSubmit}>
            Submit
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default Comment;
