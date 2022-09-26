import { Routes, Route } from "react-router-dom";
import Authentication from "pages/login";
import Users from "pages/users";
import PageNotFound from "./pageNotFound";
import UserForm from "pages/users/userForm";

/**
 * Declare the application routes for navigation to the pages
 * If url not valid it will redirect to PageNotFound component
 *
 * @returns components
 */
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<Authentication />} />
      <Route path="/user" element={<Users />} />
      <Route path="/user/:action" element={<UserForm />} />
    </Routes>
  );
};

export default AppRoutes;
