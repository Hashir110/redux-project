import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice"; // Adjust the path as necessary

export const store = configureStore({
  reducer: {
    todo: todoReducer, // Ensure 'todo' matches the slice name
  },
});
