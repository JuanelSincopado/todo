import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/Global-state";
import CardButtons from "./Card-buttons";

const TaskCard = () => {
  const { getData } = useContext(GlobalContext);

  useEffect(() => {
    getData();
  });

  return (
    <div className="task__list">
      <div className="task__card">
        <p className="card__text">Algun texto</p>

        <div className="container__card_button">
          <CardButtons className="card__button edit" src="icon/edit.svg" />
          <CardButtons className="card__button delete" src="icon/delete.svg" />
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
