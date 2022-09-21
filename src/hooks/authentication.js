import Recat, { useState, useEffect } from "react";

/**
 * Custom hooks for authentication
 *
 */
const useAuthentication = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [requested, setRequested] = useState(false);
  const [userDetails, setUserDetails] = useState({});

  /**
   * Login user function
   *
   */
  const loginUser = () => {
    setRequested(true);
    const data = ""; //isLogin()
    if (data.login) {
      setIsAuthenticated(true);
      setUserDetails(data);
    }
  };

  /**
   * It will run when isAuthenticated state will be true
   * and navigate to user page
   *
   */
  useEffect(() => {
    if (isAuthenticated) {
      // navigation to user router
    }
  }, [isAuthenticated]);

  return { requested, loginUser };
};

export default useAuthentication;
