import React, { useContext } from "react";
import { GlobalContext } from "../../context/Global-state";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  const { input, edit, setInput, createTask, editTask, cancelEdit } =
    useContext(GlobalContext);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();

    if (input == "") {
      console.log("Ingrese una tarea");
      return;
    }

    if (edit) {
      editTask();
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
        edit={edit}
        cancelEdit={cancelEdit}
      />

      <Button edit={edit} />
    </form>
  );
};

export default Form;
