import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModule from "../UI/ErrorModule";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (newuser) => {
  const [enterdUsername, setEnterdUsername] = useState("");
  const [enterdAge, setEnterdAge] = useState("");
  const [error, setError] = useState();
  const adddUserHandler = (event) => {
    event.preventDefault();
    if (enterdUsername.trim().length === 0 || enterdAge.trim().length === 0) {
      setError({ title: "Invalid input", message: "Enter a valid Input" });
      return;
    }
    if (+enterdAge < 1) {
      setError({ title: "Invalid age", message: "Enter a valid age" });
      return;
    }
    newuser.onAddUser(enterdUsername, enterdAge);
    setEnterdUsername("");
    setEnterdAge("");
  };
  const usernameChangeHandler = (event) => {
    setEnterdUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnterdAge(event.target.value);
  };
  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModule
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={adddUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username "
            type="text"
            value={enterdUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age "
            type="number"
            value={enterdAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit"> Add User </Button>
        </form>
      </Card>
      </Wrapper>
  );
};

export default AddUser;
