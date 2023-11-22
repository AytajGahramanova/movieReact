import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import Cards from "./components/Cards";
import axios from "axios";

const App = () => {
  const BASE_URL = `https://www.omdbapi.com`;
  const API_KEY = "9fa6ce35";
  const [elements, setElements] = useState([]);
  const [input, setInput] = useState("");
  const [wishlistCount, setWishlistCount] = useState(0);
  const addToWishlist = () => {
    setWishlistCount(wishlistCount + 1);
  };

  const getData = async () => {
    try {
      const res = await axios.get(BASE_URL, {
        params: {
          s: `${input ? input: "call"}`,
          apikey: API_KEY,
        },
      });
      setElements(res.data.Search);
      // console.log(res.data.Search);
    } catch (err) {
      console.error("AxiosError:", err);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Form input={input} setInput={setInput} getData={getData} wishlistCount={wishlistCount}/>
      <Cards elements={elements} addToWishlist={addToWishlist}/>
    </div>
  );
};

export default App;
