import ListTask from "./components/card/List-task";
import Form from "./components/form/Form";
import Titulo from "./components/Titulo";

function App() {
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
