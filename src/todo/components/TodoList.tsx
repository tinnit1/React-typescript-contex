// import { useContext } from "react";
// import { TodoContext } from "../context/TodoContext";
import { TodoItem } from "./TodoItem";
import { useTodos } from "../hooks/useTodos";

export const TodoList = () => {
  const { todos } = useTodos();
  // const {
  //   state: { todos },
  // } = useContext(TodoContext);
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};
