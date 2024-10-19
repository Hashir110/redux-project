import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../features/todo/todoSlice"; // Ensure you have an updateTodo action

function UpdateTodo({ id, currentText }) {
  const [newText, setNewText] = useState(currentText);
  const dispatch = useDispatch();

  const handleUpdate = (e) => {
    e.preventDefault();

    // Validate input to ensure it's not empty
    if (!newText.trim()) {
      alert("Todo text cannot be empty.");
      return;
    }

    dispatch(updateTodo({ id, text: newText }));
    setNewText(""); // Clear the input after dispatching
  };

  return (
    <form onSubmit={handleUpdate} className="mt-4">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-green-500 border-0 py-2 px-4 focus:outline-none hover:bg-green-600 rounded text-lg"
      >
        Update
      </button>
    </form>
  );
}

export default UpdateTodo;
