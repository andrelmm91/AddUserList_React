import React from "react";
import Button from "../UI/Button"; // custom Button
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

function AddUser(props) {
  function addUserHandler(event) {
    event.preventDefault();
  }

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}

export default AddUser;