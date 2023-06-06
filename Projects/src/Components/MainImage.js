import React, { useContext } from "react";
import { mainpage } from "./MainPage";

const MainImage = () => {
  const Data = useContext(mainpage);
  console.log(Data);
  return (
    <>
      <div className="mainimage">
        <img src={Data?.data.images.jpg.large_image_url} alt="" />
        <h3>{Data?.data.title_english}</h3>
      </div>
    </>
  );
};

export default MainImage;
