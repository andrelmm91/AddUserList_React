import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userList, setUserList] = useState([]);

  function addUserHandler(uName, uAge) {
    setUserList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  }

  return (
    <React.Fragment>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={userList} />
    </React.Fragment>
  );
}

export default App;
