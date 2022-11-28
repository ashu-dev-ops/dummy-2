import React from "react";
// import { AiFillAccountBook,AiFillStar } from 'react-icons/ai';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

const Rating = ({ rating, style, onClick }) => {
  return (
    <div>
      {/* [...Array(5)] it is an array of 5 span tag  & we are maping over it to render them*/}
      {[...Array(5)].map((_, i) => (
        // single  start/span tag
        //style={} assign the style that parent is giving the
        // always use callbacks in event if the other element is outside of the component
        <span key={i} onClick={() => onClick(i)} style={style}>  
          {rating > i ? (
            <AiFillStar fontSize="15px" />
          ) : (
            <AiOutlineStar fontSize="15px" />
          )}
        </span>
      ))}
    </div>
  );
};

export default Rating;
