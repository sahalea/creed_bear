import { Routes, Route } from "react-router-dom";
import Authentication from "pages/login";
import Users from "pages/users";
import PageNotFound from "./pageNotFound";

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
    </Routes>
  );
};

export default AppRoutes;
