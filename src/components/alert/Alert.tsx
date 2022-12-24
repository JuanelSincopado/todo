import { useContext } from "react";
import { GlobalContext } from "../../context/Global-state";

const Alert = () => {
  const { alert } = useContext(GlobalContext);

  return (
    <div className={alert.active ? `alert ${alert.type}` : "alert__off"}>
      <p>{alert.text}</p>
    </div>
  );
};

export default Alert;
