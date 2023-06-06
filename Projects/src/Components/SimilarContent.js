import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import ScrollingContent from "./ScrollingContent";
const SimilarContent = () => {
  return (
    <>
      <div className="scrollElement">
        <div className="recommended">
          <h3>Similiar Contents</h3>
          <div className="gap"></div>
          <div className="arrow">
            <AiOutlineArrowRight />
          </div>
        </div>
        <ScrollingContent />
      </div>
    </>
  );
};

export default SimilarContent;
