import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";
import UpdateTodo from "./components/UpdateTodo";
import { useSelector } from "react-redux";

function App() {
  const todos = useSelector((state) => state.todo.todos); // Accessing todos from Redux store
  const todo = todos.length > 0 ? todos[0] : { id: null, text: "" }; // Select the first todo for demo

  return (
    <>
      <h1 className="text-4xl font-extrabold text-center text-orange-600 my-4 underline decoration-4 decoration-orange-400">
        Learn about Redux Toolkit
      </h1>
      <AddTodo />
      {/* {todo.id && <UpdateTodo id={todo.id} currentText={todo.text} />} */}
      <Todos />
    </>
  );
}

export default App;
