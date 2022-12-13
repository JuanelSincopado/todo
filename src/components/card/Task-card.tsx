import Task from "../../model/Task";
import CardButtons from "./Card-buttons";

interface Props {
  task: Task;
}

const TaskCard = ({ task }: Props) => {
  return (
    <div className="task__card">
      <p className="card__text">{task.text}</p>

      <div className="container__card_button">
        <CardButtons className="card__button edit" src="icon/edit.svg" />
        <CardButtons className="card__button delete" src="icon/delete.svg" />
      </div>
    </div>
  );
};

export default TaskCard;
