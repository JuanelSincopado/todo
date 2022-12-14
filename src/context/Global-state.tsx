import { createContext, useState } from "react";
import State from "./State";
import Task from "../model/Task";

interface Props {
  children: React.ReactNode;
}

const defaultState = {
  data: [] as State["data"],
  input: "",
  getData: () => {},
  setInput: () => {},
  createTask: () => {},
  deleteTask: () => {},
};

export const GlobalContext = createContext<State>(defaultState);

const GlobalState = ({ children }: Props) => {
  const [data, setData] = useState<Task[]>([]);
  const [input, setInput] = useState("");

  const getData = () => {
    const x = localStorage.getItem("tasks");

    if (typeof x === "string") {
      setData(JSON.parse(x));
    }
  };

  const createTask = () => {
    const task: Task = {
      id: Math.random() * 100,
      text: input,
    };

    data.push(task);

    localStorage.setItem("tasks", JSON.stringify(data));

    setInput("");
  };

  const deleteTask = (id: number) => {
    const x: Task[] = data.filter((element) => element.id !== id);

    setData(x);

    localStorage.setItem("tasks", JSON.stringify(data));
  };

  return (
    <GlobalContext.Provider
      value={{ data, input, getData, setInput, createTask, deleteTask }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
