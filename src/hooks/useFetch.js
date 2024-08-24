import React, { useEffect, useState } from "react";

function useFetch(url, transformData) {
  const [data, setData] = useState();

  const fetchData = async () => {
    const response = await fetch(url);
    const json = await response.json;
    setData(transformData(json));
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data };
}

export default useFetch;
