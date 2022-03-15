import React, { useState } from "react";
import Card from "./UI/Card";

const Form = (props) => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [isValidFirstName, setIsValidFirstName] = useState(false);
  const [enteredLastName, setEnteredLastName] = useState("");
  const [isValidLastName, setIsValidLastName] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const firstNameChangeHandler = (event) => {
    const regName = /^([a-zA-Z]+)( [a-zA-Z]+)*( )*$/;
    if (regName.test(event.target.value)) {
      setEnteredFirstName(event.target.value);
      setIsValidFirstName(true);
    }else{
        setIsValidFirstName(false)
    }
  };

  const lastNameChangeHandler = (event) => {
    const regName = /^[a-zA-Z]+( [a-zA-Z]+)*( )*$/;
    if (regName.test(event.target.value)) {
      setEnteredLastName(event.target.value);
      setIsValidLastName(true);
    }else {
        setIsValidLastName(false)
    }
  };

  const emailChangeHandler = (event) => {
    // regular expression from https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
    const regEmail = /\S+@\S+\.\S+/; ///^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regEmail.test(event.target.value)) {
      setEnteredEmail(event.target.value);
      setIsValidEmail(true);
    }else{
        setIsValidEmail(false)
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredFirstName, enteredLastName, enteredEmail);
  };

  const formValidation = () => {
    if (isValidFirstName === true && isValidLastName === true && isValidEmail === true) {
        setIsDisabled(false);
    } else {
        setIsDisabled(true)
    }
  };

  return (
    <Card>
      <form onSubmit={submitHandler} onChange={formValidation}>
        <h2>Please submit your details</h2>
        <input
          type="text"
          placeholder="First Name"
          //value={enteredFirstName}
          onChange={firstNameChangeHandler}
        />
        <input
          type="text"
          placeholder="Last Name"
          //value={enteredLastName}
          onChange={lastNameChangeHandler}
        />
        <input
          type="email"
          placeholder="Email"
          //value={enteredEmail}
          onChange={emailChangeHandler}
        />
        <button type="subimt" disabled={isDisabled}>
          Submit
        </button>
      </form>
    </Card>
  );
};

export default Form;
