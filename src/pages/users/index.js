import useUsers from "hooks/user";
import React from "react";

const Users = () => {
  const { usersList, pageConfig } = useUsers();
  return <h1>Users list</h1>;
};

export default Users;
