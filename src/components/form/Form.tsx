import React from "react";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={submit}>
      <Input placeholder="Escribe una tarea..." onChange={handleOnChange} />

      <Button />
    </form>
  );
};

export default Form;
