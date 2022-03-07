import React, { FC, useEffect, useState } from "react";
import List from "./List";
import { ITodo, IUser } from "./types/types";
import UserItem from "./UserItem";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((users) => users.json())
      .then((data: IUser[]) => {
        setUsers(data);
        console.log(data);
      });
  };

  return (
    <div>
      <List
        items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
    </div>
  );
};
export default UserPage;
