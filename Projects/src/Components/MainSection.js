import React from "react";
import Character from "./Character";
import MainImage from "./MainImage";
import MainPageOverview from "./MainPageOverview";
import MainPageSynopsis from "./MainPageSynopsis";
const MainSection = () => {
  return (
    <>
      <div className="mainSection">
        <MainImage />
        {/* <Character /> */}
        {/* <MainPageSynopsis /> */}
        <MainPageOverview />
      </div>
    </>
  );
};

export default MainSection;
