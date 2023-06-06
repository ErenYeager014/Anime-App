import React from "react";
import { useContext } from "react";
import { mainpage } from "./MainPage";
const MainPageOverview = () => {
  const data = useContext(mainpage);
  return (
    <>
      <div className="mainpageOverview">
        <h4>Type:{data?.data.type}</h4>
        <h4>Episodes:{data?.data.episodes}</h4>
        <h4>Duration:{data?.data.duration}</h4>
        <h4>Rating:{data?.data.rating}</h4>
        <h4>Year:{data?.data.year}</h4>
        <h4>Title in Japanese:{data?.data.title_japanese}</h4>
        <h4
          style={{
            textTransform: "capitalize",
          }}
        >
          Season:{data.data.season}
        </h4>
      </div>
    </>
  );
};

export default MainPageOverview;
