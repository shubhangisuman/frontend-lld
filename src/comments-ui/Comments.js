import React from "react";
import CommentBox from "./CommentBox";

const data = [
  {
    username: "shubhangi",
    comment: "comment 1",
    replies: [
      {
        username: "shubhangi",
        comment: "comment 1.1",
        replies: [
          {
            username: "shubhangi",
            comment: "comment 1.1.1",
            replies: [
              {
                username: "shubhangi",
                comment: "comment 1.1.1.1",
                replies: [
                  {
                    username: "shubhangi",
                    comment: "comment 1.1.1.1.1",
                    replies: [],
                  },
                ],
              },
            ],
          },
          {
            username: "shubhangi",
            comment: "comment 1.1.2",
          },
          {
            username: "shubhangi",
            comment: "comment 1.1.3",
          },
        ],
      },
    ],
  },
  {
    username: "elon musk",
    comment: "comment 1",
    replies: [],
  },
  {
    username: "blake lively",
    comment: "comment 1",
    replies: [],
  },
];

function Comments() {
  return (
    <div>
      <CommentBox data={data} />
    </div>
  );
}

export default Comments;
