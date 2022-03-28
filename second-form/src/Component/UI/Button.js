import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={props.className || classes.button}
      style={props.style}
      type={props.type || "button"}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default Button;