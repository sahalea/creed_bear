import React from 'react';
import loginBanner from 'assets/images/fingerprint.png';
import useAuthentication from 'hooks/authentication';
import CreedInput from 'components/input';
import CreedButton from 'components/button';

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
      <div className="auth_form w-5/12 flex flex-col justify-center items-center	">
        <h4>Login to Your Account</h4>
        <div className="flex flex-col w-96 p-12 bg-slate-200 rounded-lg	">
          <CreedInput
            name="userName"
            value={userInput?.userName}
            onChange={(e) => inputChange(e)}
            placeholder="User Name"
          />
          <CreedInput
            name="password"
            type="password"
            value={userInput?.password}
            onChange={(e) => inputChange(e)}
            placeholder="Password"
            css="mt-4"
          />
          <CreedButton
            disabled={requested}
            text="Login"
            onClick={() => loginUser()}
            css="mt-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Authentication;
