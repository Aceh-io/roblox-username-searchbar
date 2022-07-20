import React, { useState, useEffect } from "react";
import SearchBox from "../components/SearchBox";

export default function App() {
  const [data, setData] = useState("");
  const [inputValue, setInputValue] = useState("");

  const fetchData = async () => {
    const req = await fetch(`/api/search/${inputValue}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Content-Length": "30",
        Accept: "application/json",
      },
    });
    const newData = await req.json();

    return setData(newData);
  };
  const handleClick = (event) => {
    fetchData();
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue && inputValue.length >= 3) {
        handleClick();
      }
    }, 225);

    return () => clearTimeout(timer);
  }, [inputValue]);

  return (
    <div>
      <label>Input: </label>
      <input
        value={inputValue}
        type="text"
        onChange={(e) => setInputValue(e.target.value)}
      />
      {Object.entries(data).map((user) => {
        return <SearchBox key={Math.random()} user={data} />;
      })}
    </div>
  );
}
