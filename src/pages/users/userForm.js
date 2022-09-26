import React, { useState } from "react";
import CreedButton from "components/button";
import CreedInput from "components/input";
import useUsers, { useSaveUser } from "hooks/user";
import { createUser } from "utils/api";

const UserForm = () => {
  const [model, setModel] = useState({});
  const [buttonText, setButtonText] = useState("Create");
  const { create, data } = useSaveUser();

  console.log(data);

  /**
   * Input change event
   * The values will be save in to model state while change input
   *
   * @param {*} e
   */
  const onChange = (e) => {
    const data = { ...model };
    data[e.target.name] = e.target.value;
    setModel(data);
  };

  return (
    <div>
      create user
      <CreedInput name="firstName" onChange={onChange} />
      <CreedInput name="lastName" onChange={onChange} />
      <CreedInput name="email" onChange={onChange} />
      <CreedButton
        text="Save"
        onClick={() => create(model.email, model.firstName, model.lastName)}
      />
      <CreedButton text="Cancel" />
    </div>
  );
};

export default UserForm;
