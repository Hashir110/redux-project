import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice"; // Ensure to import updateTodo

function Todos() {
  const todos = useSelector((state) => state.todo.todos); // Ensure correct state
  const dispatch = useDispatch();

  const [selectedTodo, setSelectedTodo] = useState(null); // State for the todo being edited
  const [newText, setNewText] = useState(""); // State for new todo text

  const handleEdit = (todo) => {
    setSelectedTodo(todo);
    setNewText(todo.text); // Set the newText to current todo text for editing
  };

  const handleUpdate = (e, todo) => {
    e.preventDefault();
    if (!newText.trim()) {
      alert("Todo text cannot be empty.");
      return;
    }
    dispatch(updateTodo({ id: todo.id, text: newText }));
    setSelectedTodo(null); // Reset selected todo after updating
    setNewText(""); // Clear the newText input after dispatching
  };

  return (
    <>
      <div className="text-orange-600 text-3xl">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {selectedTodo?.id === todo.id ? (
              <form
                onSubmit={(e) => handleUpdate(e, todo)}
                className="flex items-center"
              >
                <input
                  type="text"
                  className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={newText}
                  onChange={(e) => setNewText(e.target.value)}
                />
                <button
                  type="submit"
                  className="text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-lg ml-2"
                >
                  Update
                </button>
              </form>
            ) : (
              <>
                <div className="text-white">{todo.text}</div>
                <div>
                  <button
                    onClick={() => handleEdit(todo)} // Set selected todo
                    className="text-white bg-blue-500 border-0 py-1 px-4 focus:outline-none hover:bg-blue-600 rounded text-md mx-2"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                  >
                    Remove
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
