import React, { useState, useEffect } from "react";
import "../App.css";
function Banner() {
  const [Data, setData] = useState();
  useEffect(() => {
    fetch("https://api.jikan.moe/v4/random/anime")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch(() => {
        console.log("error");
      });
  }, []);
  const image = Data?.data.images.webp.large_image_url;
  console.log(image);
  return (
    <div>
      <div className="banner" style={{ background: `url(${image})` }}>
        <h1
          style={{
            padding: "50px 30px",
          }}
        >
          {Data?.data.title}
        </h1>
        <p
          style={{
            width: "70%",
            padding: "0 30px",
            textAlign: "justify",
            overflow: "scroll",
            lineHeight: "35px",
            fontSize: "20px",
            overflowY: "scroll",
          }}
        >
          {Data?.data.synopsis}
        </p>
        <h3
          style={{
            fontWeight: 400,
            padding: "5px 30px",
          }}
        >
          Genre:
          {Data?.data?.genres?.length > 0
            ? Data?.data?.genres?.map((data, index) => {
                return data.name;
              })
            : "None"}
        </h3>
      </div>
    </div>
  );
}

export default Banner;
