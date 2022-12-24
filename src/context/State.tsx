import Task from "../model/Task";

interface State {
  data: Task[];
  taskToEdit: Task;
  input: string;
  edit: boolean;
  getData: () => void;
  setInput: (input: string) => void;
  createTask: () => void;
  getTaskToEdit: (id: number) => void;
  editTask: () => void;
  cancelEdit: () => void;
  deleteTask: (id: number) => void;
}

export const defaultState = {
  data: [] as State["data"],
  taskToEdit: {} as Task,
  input: "",
  edit: false,
  getData: () => {},
  setInput: () => {},
  createTask: () => {},
  getTaskToEdit: () => {},
  editTask: () => {},
  cancelEdit: () => {},
  deleteTask: () => {},
};

export default State;
