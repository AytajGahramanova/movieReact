import React from "react";
import "./Card.css";

const Card = ({ item, addToWishlist  }) => {
  console.log(item);
  return (
    <div className="wrapper">
      <div className="image">
        <img src={item?.Poster} />
      </div>
      <p>{item?.Title}</p>
      <p>{item?.Year}</p>
      <button
        style={{
          padding: "15px 30px",
          border: "none",
          background: "#3876BF",
          color: "#fff",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => addToWishlist(item)}
      >
        Add to WishList
      </button>
    </div>
  );
};

export default Card;
