import React, { useEffect } from "react";
import { Table } from "antd";
import CreedButton from "components/button";
import { useNavigate } from "react-router-dom";
import UserForm from "./userForm";
import { useGetUsers } from "hooks/user";

const Users = () => {
  const navigate = useNavigate();
  const { usersList, pageConfig } = useGetUsers();

  console.log(usersList);
  const columns = [
    {
      title: "First Name",
      dataIndex: "first_name",
      key: "first_name",
    },
    {
      title: "Last Name",
      dataIndex: "last_name",
      key: "last_name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
    },
  ];
  return (
    <div>
      <section>
        <h1>dfnsfndfjsndfjsdjfsdf</h1>
        <CreedButton onClick={() => navigate("/add-user/create")}>
          Add User
        </CreedButton>
      </section>
      <div className="flex">
        <Table dataSource={usersList} columns={columns} />
        <div>
          <UserForm />
        </div>
      </div>
    </div>
  );
};

export default Users;
