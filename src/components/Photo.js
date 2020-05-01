import React from "react";

const Photo = (props) => {
  return (
    <div>
      <img src={props.item.path}  alt="placeholder" ></img>
      <p className="legend">{props.item.caption}</p>
    </div>
  );
};

export default Photo;
