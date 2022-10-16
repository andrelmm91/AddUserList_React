import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";

// apply all data into a series of list
function UsersList(props) {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((users) => (
          <li key={users.id}>
            {users.name} ({users.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
}

export default UsersList;
