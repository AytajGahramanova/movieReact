import React, { useState } from "react";
import { Modal } from "antd";

const Form = ({ input, setInput, getData, wishlistCount}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    </div>
  );
};

export default Form;


