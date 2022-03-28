import React, { useState } from "react";
import Card from "./UI/Card";
import Input from "./UI/Input";
import Button from "./UI/Button";
//import './UI/Button.css';


const Form = () => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [isValidFirstName, setIsValidFirstName] = useState(false);
  const [enteredLastName, setEnteredLastName] = useState("");
  const [isValidLastName, setIsValidLastName] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const validateText = (value) => {
    const regName = /^([a-zA-Z]+)( [a-zA-Z]+)*( )*$/;
    return regName.test(value);
  };

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
    const isValid = validateText(event.target.value);
    setIsValidFirstName(isValid);
  };

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
    const isValid = validateText(event.target.value);
    setIsValidLastName(isValid);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    // regular expression from https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
    const regEmail = /\S+@\S+\.\S+/; ///^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(regEmail.test(event.target.value));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(enteredFirstName, enteredLastName, enteredEmail);
  };

  const formValidation = () => {
    if (
      isValidFirstName === true &&
      isValidLastName === true &&
      isValidEmail === true
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  return (
    <Card>
      <form  onSubmit={submitHandler} onChange={formValidation}>
        <h2>Please submit your details</h2>
        <Input
          type="text"
          placeholder="First Name"
          value={enteredFirstName}
          onChange={firstNameChangeHandler}
        />
        <Input
          type="text"
          placeholder="Last Name"
          value={enteredLastName}
          onChange={lastNameChangeHandler}
        />
        <Input
          type="email"
          placeholder="Email"
          value={enteredEmail}
          onChange={emailChangeHandler}
        />
        <Button type="subimt" disabled={isDisabled}>
          Submit
        </Button>
      </form>
    </Card>
  );
};

export default Form;
