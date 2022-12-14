import { useContext } from "react";
import { GlobalContext } from "../../context/Global-state";
import Task from "../../model/Task";
import CardButtons from "./Card-buttons";

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  const { deleteTask } = useContext(GlobalContext);

  return (
    <div className="task__card">
      <p className="card__text">{task.text}</p>

      <div className="container__card_button">
        <CardButtons
          id={task.id}
          className="card__button edit"
          src="icon/edit.svg"
          onClick={() => deleteTask(task.id)}
        />
        <CardButtons
          id={task.id}
          className="card__button delete"
          src="icon/delete.svg"
          onClick={() => deleteTask(task.id)}
        />
      </div>
    </div>
  );
};

export default TaskCard;
