import React, { useContext } from "react";
import { GlobalContext } from "../../context/Global-state";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  const { input, setInput, createTask } = useContext(GlobalContext);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input == "") {
      console.log("Ingrese una tarea");
      return;
    }

    createTask();
  };

  return (
    <form onSubmit={submit}>
      <Input
        placeholder="Escribe una tarea..."
        value={input}
        onChange={handleOnChange}
      />

      <Button />
    </form>
  );
};

export default Form;
