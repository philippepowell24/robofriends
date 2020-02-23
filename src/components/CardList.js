import React from "react";
import Card from "./Card";

const CardList = props => {
  return (
    <div>
      {props.robots.map((value, i) => (
        <Card robot={value} key={i} />
      ))}
    </div>
  );
};

export default CardList;
