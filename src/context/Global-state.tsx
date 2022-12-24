import { createContext, useState } from "react";
import State, { defaultState } from "./State";
import Task from "../model/Task";

interface Props {
  children: React.ReactNode;
}

export const GlobalContext = createContext<State>(defaultState);

const GlobalState = ({ children }: Props) => {
  const [data, setData] = useState<Task[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<Task>({} as Task);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);

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

  const getTaskToEdit = (id: number) => {
    let x: Task = data.find((task) => task.id === id)!;

    setTaskToEdit(x);

    setInput(x.text);

    setEdit(true);
  };

  const editTask = () => {
    let objectTaskToEdit: Task = taskToEdit;

    objectTaskToEdit.text = input;

    const newData = data.map((element) => {
      if (element.id === objectTaskToEdit.id) {
        return { ...element, text: objectTaskToEdit.text };
      }

      return element;
    });

    setData(newData);

    localStorage.setItem("tasks", JSON.stringify(data));

    cancelEdit();
  };

  const cancelEdit = () => {
    setInput("");
    setEdit(false);
    setTaskToEdit({
      id: 0,
      text: "",
    });
  };

  const deleteTask = (id: number) => {
    const x: Task[] = data.filter((element) => element.id !== id);

    setData(x);

    localStorage.setItem("tasks", JSON.stringify(data));
  };

  return (
    <GlobalContext.Provider
      value={{
        data,
        taskToEdit,
        input,
        edit,
        getData,
        setInput,
        createTask,
        getTaskToEdit,
        editTask,
        cancelEdit,
        deleteTask,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
