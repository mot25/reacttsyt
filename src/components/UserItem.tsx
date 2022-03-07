import React, { FC } from "react";
import { IUser } from "./types/types";
import { useNavigate } from "react-router-dom";

interface UserItemProps {
  user: IUser;
}

const UserItem: FC<UserItemProps> = ({ user }) => {
  const history = useNavigate();
  return (
    <div
      onClick={() => {
        history("/users/" + user.id);
        console.dir(history);
      }}
      style={{ padding: 15, border: "1px solid gray" }}
    >
      {user.id}. {user.name} проживает в городе {user.address.city} на улице{" "}
      {user.address.street}
    </div>
  );
};

export default UserItem;
