import Dashboard from "../pages/admin/Dashboard";
import Index from "../pages/users/Index";
import LoginPage from "../pages/auth/LoginPage";
import ManageCategories from "../pages/admin/ManageCategories";
import PrivateRouteAdmin from "./PrivateRouteAdmin";
import RegisterPage from "../pages/auth/RegisterPage";

const routerConfig = [
  {
    path: "/",
    element: <Index />,
    children: [],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
  {
    path: "/admin",
    element: <PrivateRouteAdmin />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "/admin/categories",
        element: <ManageCategories />,
      },
    ],
  },
];

export default routerConfig;
