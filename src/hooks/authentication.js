import Recat, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authenticateUser } from "utils/api";

/**
 * Custom hooks for authentication
 *
 */
const useAuthentication = () => {
  const navigate = useNavigate();
  const [userInput, setUserInput] = useState({
    userName: "creed_bear",
    password: "12345",
  });
  const [validationError, setValidationError] = useState({
    userName: true,
    password: true,
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [requested, setRequested] = useState(false);

  /**
   * Login user hooks function
   *
   */
  const loginUser = async () => {
    setRequested(true);
    const user = await authenticateUser(userInput.userName, userInput.password);
    if (user.status === "success") setIsAuthenticated(true);
    else alert("Incorrect username or password");
    setRequested(false);
  };

  /**
   * Checking form values are valid or not
   */
  const validationForm = () => {
    const model = {
      userName: true,
      password: true,
    };
    if (userInput.userName === null || userInput.userName === "") {
      model.userName = false;
    } else if (userInput.password === null || userInput.password === "") {
      model.password = false;
    }
    return model;
  };

  /**
   * It will run when isAuthenticated state will be true
   * and navigate to user page
   *
   */
  useEffect(() => {
    if (isAuthenticated) {
      // navigation to user router
      navigate("/user");
    }
  }, [isAuthenticated]);

  return { requested, loginUser, setUserInput, userInput };
};

export default useAuthentication;
