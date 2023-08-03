import { useReducer } from "react";
import { TodoState } from "../interfaces/interfaces";
import { TodoContext } from "./TodoContext";
import { todoReducer } from "./todoReducer";

const INITIAL_STATE: TodoState = {
  todoCount: 2,
  todos: [
    { id: "1", description: "initial", completed: false },
    { id: "2", description: "initial", completed: false },
  ],
  completed: 0,
  pending: 2,
};

interface props {
  children: JSX.Element | JSX.Element[];
}

export const TodoProvider = ({ children }: props) => {
  const [state, dispatch] = useReducer(todoReducer, INITIAL_STATE);
  const toggleTodo = (id: string) => {
    dispatch({ type: "toggleTodo", payload: { id } });
  };
  return (
    <TodoContext.Provider value={{ state, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
