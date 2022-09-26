import React, { useState, useEffect } from "react";
import { fetchUsers, getUsersList } from "utils/api";
import { useNavigate } from "react-router-dom";
import { createUser } from "utils/api";

export const useGetUsers = async () => {
  const [usersList, setUsersList] = useState([]);
  const [pageConfig, setPageConfig] = useState({
    pageNumber: 1,
    limit: 10,
    totalSize: 10,
  });
  useEffect(async () => {
    try {
      const result = await getUsersList();
      setUsersList(result.data);
      setPageConfig({
        ...pageConfig,
        totalSize: result.data.length,
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return {
    usersList,
    pageConfig,
  };
};

export const useSaveUser = async () => {
  const [data, setData] = useState([]);
  const create = async (values) => {
    const response = await createUser(
      values.email,
      values.firstName,
      values.lastName
    );
    if (response.status === "success") {
      setData(fetchUsers());
    }
  };

  return { data, create };
};
