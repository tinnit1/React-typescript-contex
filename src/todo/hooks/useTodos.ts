import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { TodoState } from "../interfaces/interfaces";

export const useTodos = () => {
  const { state, toggleTodo } = useContext(TodoContext);
  const { todos } = state;
  return {
    todos: state.todos,
    pendingTodos: todos.filter((todo) => !todo.completed).length,
    toggleTodo,
  };
};
