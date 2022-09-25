import React, { useState, useEffect } from "react";
import { getUsersList } from "utils/api";

const useUsers = () => {
  const [usersList, setUsersList] = useState([]);
  const [pageConfig, setPageConfig] = useState({
    pageNumber: 1,
    limit: 10,
    totalSize: usersList.length,
  });

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
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
  };

  return {
    usersList,
    pageConfig,
  };
};
export default useUsers;
