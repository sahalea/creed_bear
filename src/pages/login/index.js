import React from "react";
import loginBanner from "assets/images/fingerprint.png";
import useAuthentication from "hooks/authentication";
import CreedInput from "components/input";
import CreedButton from "components/button";

const Authentication = () => {
  const { loginUser, requested, userInput, setUserInput } = useAuthentication();

  /**
   * Input change event
   * The data will store in to userInput state
   *
   * @param {*} e
   */
  const inputChange = (e) => {
    setUserInput({
      ...userInput,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="w-full h-screen flex">
      <div className="left_container w-7/12 bg-sky-800">
        <img src={loginBanner} className="object-cover w-full h-full" />
      </div>
      <div className="auth_form w-5/12">
        <CreedInput
          name="userName"
          value={userInput?.userName}
          onChange={(e) => inputChange(e)}
        />
        <CreedInput
          name="password"
          type="password"
          value={userInput?.password}
          onChange={(e) => inputChange(e)}
        />
        <CreedButton
          disabled={requested}
          text="Login"
          onClick={() => loginUser()}
        />
      </div>
    </div>
  );
};

export default Authentication;
