import React, { useState } from "react";
import Button from "../UI/Button"; // custom Button
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

function AddUser(props) {
  const [enteredUserName, setEnteredUsername] = useState("");
  const [enteredUserAge, setEnteredUserAge] = useState("");

  function addUserHandler(event) {
    event.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return;
    }
    if (+enteredUserAge < 1) {
      return;
    }
    console.log(enteredUserName, enteredUserAge);
    setEnteredUserAge("");
    setEnteredUsername("");
  }

  function usernameChangeHandler(event) {
    setEnteredUsername(event.target.value);
  }
  function userAgeChangeHandler(event) {
    setEnteredUserAge(event.target.value);
  }

  return (
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
  );
}

export default AddUser;
