import React from "react";
import Comment from "./Comment";

function CommentList(props) {
  const { data, setData } = props;
  return data.map((obj) => (
    <div className="ml-2">
      <Comment data={obj} setData={setData} />
      {obj.replies ? (
        <CommentList data={obj.replies} setData={setData} />
      ) : null}
    </div>
  ));
}

export default CommentList;
