import React from "react";
import classes from "./Input.module.css";

const Input = props =>{
  return (
    <input className={classes.input}
      name={props.name}
      placeholder={props.placeholder}
      type={props.type}
      value={props.value}
      onChange={props.onChange}
    >
      {props.children}
    </input>
  );
}

export default Input;