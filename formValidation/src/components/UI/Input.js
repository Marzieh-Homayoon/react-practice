import React from "react";

const Input = props =>{
  return (
    <input
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