import React, { useEffect, useState } from "react";
import { Modal } from "antd";
import axios from "axios";

const Form = ({ input, setInput, getData, wishlistCount }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [basket, setBasket] = useState([]);

  const getBasket = async () => {
    const res = await axios.get("http://localhost:3000/cart");
    setBasket(res?.data);
  };

  console.log(basket);
  useEffect(() => {
    getBasket();
  }, []);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <div
      style={{
        background: "#1D5D9B",
        padding: 20,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div>
        <input
          style={{ padding: "10px 20px", borderRadius: "5px", border: "none" }}
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          style={{
            padding: "10px 20px",
            marginLeft: "10px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
          onClick={getData}
        >
          Search
        </button>
      </div>
      <div style={{ position: "relative" }}>
        <button
          onClick={showModal}
          style={{
            padding: "10px 20px",
            borderRadius: "5px",
            border: "none",
            cursor: "pointer",
          }}
        >
          WishList
        </button>
        <div
          style={{
            background: "#ED7D31",
            padding: "3px 10px",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            position: "absolute",
            top: -12,
            right: 0,
          }}
        >
          <span>{wishlistCount}</span>
        </div>
        <Modal
          title="WishList"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          {basket.length > 0 &&
            basket?.map((item) => (
              <div>
                <h1>{item.title}</h1>
                <h1>{item.price}</h1>
              </div>
            ))}
        </Modal>
      </div>
    </div>
  );
};

export default Form;
