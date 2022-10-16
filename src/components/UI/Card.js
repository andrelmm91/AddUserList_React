import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  // dinamically, we are adding the css from card and those from props by using ${}
  return (
    <div className={` ${classes.card} ${props.className} `}>{props.children}</div>
  );
}

export default Card;
