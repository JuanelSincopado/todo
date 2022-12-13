import { useContext, useEffect } from "react";
import ListTask from "./components/card/List-task";
import TaskCard from "./components/card/Task-card";
import Form from "./components/form/Form";
import Titulo from "./components/Titulo";
import { GlobalContext } from "./context/Global-state";

function App() {
  const { getData } = useContext(GlobalContext);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="container">
      <Titulo text="ToDo" />

      <Form />

      <p className="list__title">Lista de tareas</p>

      <ListTask />
    </div>
  );
}

export default App;
