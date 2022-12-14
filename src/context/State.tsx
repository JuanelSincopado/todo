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

export default State;
