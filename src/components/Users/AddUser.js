
import React from "react";

function AddUser(){
    function addUserHandler(event) {
        event.preventDefault();
    };

    <form onSubmit={addUserHandler}>
        <label htmlFor="username">User Name</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age</label>
        <input id="age" type="number" />
        <buttton type="submit">Add User</buttton>
    </form>
};

export default AddUser;
