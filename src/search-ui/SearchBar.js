import React, { useEffect, useState } from "react";

function SearchBar() {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [cache, setCache] = useState({});

  useEffect(() => {
    const id = setTimeout(() => {
      fetchData();
    }, 500);
    return () => clearTimeout(id);
  }, [searchText]);

  const fetchData = async () => {
    if (cache[searchText]) {
      setSearchResult(cache[searchText]);
    } else {
      const response = await fetch(
        "https://www.google.com/complete/search?client=firefox&q=" + searchText
      );
      const json = await response.json();
      setSearchResult(json[1]);
      setCache((prevValue) => ({ ...prevValue, [searchText]: json[1] }));
      console.log(json[1]);
    }
  };

  const handleResultClick = (result) => {
    console.log("ss here");
    setSearchText(result);
    setSearchResult([]);
  };

  return (
    <div className="flex flex-col items-center">
      <input
        className="border border-black p-2 w-full rounded-t-xl  max-w-xs shadow-lg"
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        // onFocus={() => setShowResult(true)}
        // onBlur={() => setShowResult(false)}
      />
      {searchText ? (
        <ul className="p-2 w-full border border-black rounded-b-xl max-w-xs shadow-lg">
          {searchResult.map((value, id) => (
            <li
              className="hover:bg-gray-100 cursor-pointer"
              key={id}
              onClick={() => handleResultClick(value)}
            >
              {value}
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

export default SearchBar;

//items-center : Aligns items in a vertical column and centers them horizontally.
// can cache search result in backend: reddis
