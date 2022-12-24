import { createContext, useState } from "react";
import State, { defaultState } from "./State";
import Task from "../model/Task";
import Alert from "../model/Alert";

interface Props {
  children: React.ReactNode;
}

enum AlertType {
  success = "alert__success",
  danger = "alert__danger",
}

export const GlobalContext = createContext<State>(defaultState);

const GlobalState = ({ children }: Props) => {
  const [data, setData] = useState<Task[]>([]);
  const [taskToEdit, setTaskToEdit] = useState<Task>({} as Task);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);
  const [alert, setAlert] = useState<Alert>({
    active: false,
    text: "",
    type: AlertType.danger,
  });

  const getData = () => {
    const x = localStorage.getItem("tasks");

    if (typeof x === "string") {
      setData(JSON.parse(x));
    }
  };

  const createTask = () => {
    // Valicación del input
    if (input === "") {
      setAlert({
        active: true,
        text: "Escriba una tarea",
        type: AlertType.danger,
      });

      setTimeout(() => {
        setAlert({
          active: false,
          text: "",
          type: AlertType.success,
        });
      }, 2000);

      return;
    }

    // Crear el objeto Tarea
    const task: Task = {
      id: Math.random() * 100,
      text: input,
    };

    data.push(task);

    // Guardar en el Local Storage
    localStorage.setItem("tasks", JSON.stringify(data));

    setAlert({
      active: true,
      text: "Tarea creada con éxito",
      type: AlertType.success,
    });

    setTimeout(() => {
      setAlert({
        active: false,
        text: "",
        type: AlertType.success,
      });
    }, 2000);
    cancelEdit();
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

    setAlert({
      active: true,
      text: "Tarea editada con éxito",
      type: AlertType.success,
    });

    setTimeout(() => {
      setAlert({
        active: false,
        text: "",
        type: AlertType.success,
      });
    }, 2000);

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

    localStorage.setItem("tasks", JSON.stringify(x));

    setAlert({
      active: true,
      text: "Tarea eliminada con éxito",
      type: AlertType.success,
    });

    setTimeout(() => {
      setAlert({
        active: false,
        text: "",
        type: AlertType.success,
      });
    }, 2000);
  };

  return (
    <GlobalContext.Provider
      value={{
        data,
        taskToEdit,
        input,
        edit,
        alert,
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
