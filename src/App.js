import logo from "./logo.svg";
import "./App.css";
import Body from "./Components/Body";
import SearchBar from "./search-ui/SearchBar";
import Comments from "./comments-ui/Comments";
import Comment from "./comments-ui/Comment";
import CommentList from "./comments-ui/CommentList";
import { useState } from "react";
const comments = [
  {
    id: "1",
    comment: "hey",
    replies: [
      {
        id: "1.1",
        comment: "hiiii",
        replies: [],
      },
      {
        id: "1.2",
        comment: "hiiii",
        replies: [
          {
            id: "1.2.1",
            comment: "hiiii",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    id: "22",
    comment: "hey 22",
    replies: [],
  },
];

function App() {
  const [data, setData] = useState(comments);

  return (
    <div className="App">
      <p>App</p>
      {/* <Body /> */}
      {/* <SearchBar /> */}
      {/* <Comments /> */}
      <CommentList data={data} setData={setData} />
    </div>
  );
}

export default App;
