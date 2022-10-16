import React, { useState } from "react";
import Button from "../UI/Button"; // custom Button
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const [enteredUserName, setEnteredUsername] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  function addUserHandler(event) {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid title",
        message: "Please, enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please, enter a valid age (greater than 0)",
      });
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    // console.log(enteredUserName, enteredUserAge);
    setEnteredUserAge("");
    setEnteredUsername("");
  }

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }
  function userAgeChangeHandler(event) {
    setEnteredUserAge(event.target.value);
  }
  function errorHandler(event) {
    setError(null);
  }

  // rendering the errorModal by looking at the error, if exists, this line of code will be added. otherwise, not.
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">User Name</label>
          <input
            value={enteredUserName}
            id="username"
            type="text"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            value={enteredUserAge}
            id="age"
            type="number"
            onChange={userAgeChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUser;
