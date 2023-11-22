import React from "react";
import Card from "./Card";

const Cards = ({ elements, addToWishlist }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 10,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {elements && elements.map((item) => (
        <Card item={item} addToWishlist={addToWishlist} key={item.Title}/>
      ))}
    </div>
  );
};

export default Cards;
