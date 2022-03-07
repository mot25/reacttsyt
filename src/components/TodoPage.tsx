import React, { FC, useEffect, useState } from "react";
import List from "./List";
import TodoItem from "./TodoItem";
import { ITodo } from "./types/types";

type Props = {};

const TodoPage: FC = () => {
  const [todos, settodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);
  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((users) => users.json())
      .then((data: ITodo[]) => {
        settodos(data);
      });
  };
  return (
    <div>
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
    </div>
  );
};

export default TodoPage;
