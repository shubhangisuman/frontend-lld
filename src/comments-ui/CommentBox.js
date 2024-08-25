import React from "react";

function CommentBox({ data }) {
  return data.map((comment) => (
    <div className="ml-10 border-l-2 border-black ">
      <div className="flex flex-row">
        <img
          alt="user"
          src="https://avatar.iran.liara.run/public/boy?username=Ash"
          className="h-10 w-10"
        />
        <div className="flex flex-col px-2 py-2">
          <p>{comment.username}</p>
          <p>{comment.comment}</p>
        </div>
      </div>
      {comment.replies ? <CommentBox data={comment.replies} /> : null}
    </div>
  ));
}

export default CommentBox;
