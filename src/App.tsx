import Alert from "./components/alert/Alert";
import ListTask from "./components/card/List-task";
import Form from "./components/form/Form";
import Titulo from "./components/titulo/Titulo";

function App() {
  return (
    <div className="container">

      <Alert />

      <Titulo text="ToDo" />

      <Form />

      <p className="list__title">📃 Lista de tareas 📃</p>

      <ListTask />
    </div>
  );
}

export default App;
