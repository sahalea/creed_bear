import React from "react";
import useAuthentication from "../../hooks/authentication";

const Authentication = () => {
  const { loginUser, requested } = useAuthentication();
  return (
    <div className="w-full h-screen flex">
      <div className="left_container w-7/12 bg-sky-800">sdf</div>
      <div className="auth_form w-5/12">232fsdfsfsdf</div>
    </div>
  );
};

export default Authentication;
