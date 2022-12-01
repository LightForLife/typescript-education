import React, { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}

const onChange = (event: React.ChangeEvent) => {
  console.log(event);
};

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} onChange={onChange} />
      {todo.id}. {todo.title}
    </div>
  );
};

export default TodoItem;
