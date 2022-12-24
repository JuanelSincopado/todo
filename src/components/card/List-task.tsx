import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/Global-state";
import TaskCard from "./Task-card";

const ListTask = () => {
  const { data, getData } = useContext(GlobalContext);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="task__list">
      {data.map((task) => (
        <TaskCard task={task} key={task.id} />
      ))}
    </div>
  );
};

export default ListTask;
