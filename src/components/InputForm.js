import React from "react";
import TextInput from "./TextInput";

const InputForm = (props) => {
  const [enteredUsername, setEnteredUsername] = React.useState("");
  const [enteredAge, setEnteredAge] = React.useState("");

  const submitHandler = (event) => {
    event.preventDefault();

    props.onAddNewUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  return (
    <form onSubmit={submitHandler}>
      <TextInput
        label="Username"
        value={enteredUsername}
        setValue={setEnteredUsername}
      />
      <TextInput
        label="Age (Years)"
        value={enteredAge}
        setValue={setEnteredAge}
      />
      <button type="submit">Add User</button>
    </form>
  );
};

export default InputForm;
