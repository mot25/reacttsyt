import { useEffect, useState } from "react";
import "./App.css";
import Card, { CardVariant } from "./components/Card";
import List from "./components/List";
import TodoItem from "./components/TodoItem";
import { ITodo, IUser } from "./components/types/types";
import UserItem from "./components/UserItem";
import UserList from "./components/UserList";
import ExentExemle from "./components/ExentExemple";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, settodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers();
    fetchTodos();
  }, []);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((users) => users.json())
      .then((data: IUser[]) => {
        setUsers(data);
        console.log(data);
      });
  };
  const fetchTodos = () => {
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((users) => users.json())
      .then((data: ITodo[]) => {
        settodos(data);
      });
  };

  return (
    <div className="App">
      <Card
        onClick={(num) => console.log("click" + num)}
        variant={CardVariant.outlined}
        width="200px"
        height="200px"
      >
        card
      </Card>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
      />
      <ExentExemle />
    </div>
  );
}

export default App;
