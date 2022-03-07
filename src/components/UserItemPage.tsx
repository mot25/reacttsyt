import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { IUser } from "./types/types";

interface ParamsUserItem {
  id: string;
}

const UserItemPage = () => {
  const [Itemusers, setItemUsers] = useState<IUser | null>(null);
  const params = useParams();
  const history = useNavigate();
  console.log(history);
  useEffect(() => {
    fetchItemUsers();
  }, []);

  const fetchItemUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users/" + params.id)
      .then((users) => users.json())
      .then((data: IUser) => {
        setItemUsers(data);
        console.log(data);
      });
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button onClick={() => history("/users")}>back</button>

      <div>page name: {Itemusers?.name}</div>
      <div> email: {Itemusers?.email}</div>
      <div>address: {Itemusers?.address.street}</div>
    </div>
  );
};

export default UserItemPage;
