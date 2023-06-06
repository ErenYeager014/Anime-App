import React from "react";
import { BsChevronLeft } from "react-icons/bs";
const MainHeader = () => {
  return (
    <>
      <div className="mainHeader">
        <BsChevronLeft
          className="icon1"
          style={{
            fontSize: "46px",
            padding: "10px",
            color: "white",
            fontWeight: 700,
          }}
        />

        <h3
          style={{
            color: "white",
            fontWeight: "500",
            fontSize: "25px",
          }}
        >
          Overview
        </h3>
        <h3
          style={{
            color: "white",
            fontWeight: "500",
            fontSize: "25px",
          }}
        >
          Synopsis
        </h3>
        <h3
          style={{
            color: "white",
            fontWeight: "500",
            fontSize: "25px",
            right: "30px",
          }}
        >
          Character
        </h3>
      </div>
    </>
  );
};

export default MainHeader;
