import React from "react";


function Input(props){

    return (
        <input name={props.name} placeholder={props.placeholder} type={props.type} className="ui-textfield">{props.children}</input>
    );
}

export default Input;