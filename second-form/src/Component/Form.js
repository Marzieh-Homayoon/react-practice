import React, { Fragment, useState } from "react";
import Card from "./UI/Card";
import Input from "./UI/Input";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";

const Form = () => {
  const [enteredFirstName, setEnteredFirstName] = useState("");
  const [enteredLastName, setEnteredLastName] = useState("");
  const [enteredEmail, setEnteredEmail] = useState("");
  const [error, setError] = useState();

  const validateName = (value) => {
    const regName = /^(\s*)([a-zA-Z]+)( [a-zA-Z]+)*(\s*)$/;
    return regName.test(value);
  };

  const validateEmail = (value) =>{
    //Reg experssion is from: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
    const regEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regEmail.test(value);
  };

  const firstNameChangeHandler = (event) => {
    setEnteredFirstName(event.target.value);
  };

  const lastNameChangeHandler = (event) => {
    setEnteredLastName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    console.log(enteredFirstName, enteredLastName, enteredEmail);
  };

  const formValidation = () => {
  
    if (!validateName(enteredFirstName)) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid First Name!",
      });
      return;
    }

    if (!validateName(enteredLastName)) {
      setError({
        title: "Invalid Input",
        message: "Please enter a valid Last Name!",
      });
      return;
    }

     if (!validateEmail(enteredEmail)) {
      setError(
        { title:"Invalid Email",
        message: "Please enter a valid Email address (e.x. test@test.com) "});
        return;
    }
  };


  const errorHandler = () =>{
    setError(null);
  }

  return (
    <Fragment>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
      <Card>
        <form onSubmit={submitHandler}>
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
            type="text"
            placeholder="Email"
            value={enteredEmail}
            onChange={emailChangeHandler}
          />
          <Button type="subimt" onClick={formValidation}>
            Submit
          </Button>
        </form>
      </Card>
    </Fragment>
  );
};

export default Form;
