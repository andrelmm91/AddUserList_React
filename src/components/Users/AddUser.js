import React, { useState, useRef } from "react";
import Button from "../UI/Button"; // custom Button
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";
import Wrappers from "../helpers/Wrappers";

function AddUser(props) {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUserName, setEnteredUsername] = useState("");
  // const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  function addUserHandler(event) {
    // storing current value by using ref
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid title",
        message: "Please, enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please, enter a valid age (greater than 0)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value = ''; // to reset the state after submitting, we can use the DOM directly.
    ageInputRef.current.value = '';

    // console.log(enteredUserName, enteredUserAge);
    // setEnteredUserAge("");
    // setEnteredUsername("");
  }

  // function usernameChangeHandler(event) {
  //   setEnteredUsername(event.target.value);
  // }
  // function userAgeChangeHandler(event) {
  //   setEnteredUserAge(event.target.value);
  // }
  function errorHandler(event) {
    setError(null);
  }

  // rendering the errorModal by looking at the error, if exists, this line of code will be added. otherwise, not.
  return (
    <Wrappers>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input id="username" type="text" ref={nameInputRef} />
          <label htmlFor="age">Age (Years)</label>
          <input id="age" type="number" ref={ageInputRef} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </Wrappers>
  );
}

export default AddUser;
