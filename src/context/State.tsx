import Task from "../model/Task";

interface State {
  data: Task[];
  input: string;
  getData: () => void;
  setInput: (input: string) => void;
  createTask: () => void;
  deleteTask: (id: number) => void;
}

export default State;
