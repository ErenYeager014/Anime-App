import React from "react";
import { useContext } from "react";
import { mainpage } from "./MainPage";
const MainPageSynopsis = () => {
  const data = useContext(mainpage);
  return (
    <>
      <div className="Synopsis">
        <h2>Synopsis</h2>
        <p>{data.data.synopsis}</p>
      </div>
    </>
  );
};

export default MainPageSynopsis;
