import { Navigate, Outlet } from "react-router-dom";

import Navbar from "../layouts/admin/Navbar";
import Sidebar from "../layouts/admin/Sidebar";

function PrivateRouteAdmin() {
  const isAdmin = () => {
    const local = localStorage.getItem("user");
    if (local) {
      const user = JSON.parse(local);
      if (user.roleSet.some((item) => item.authority === "ROLE_ADMIN")) {
        return true;
      }
    }
    return false;
  };

  return (
    <div>
      <Sidebar />
      <div>
        <Navbar />
        {isAdmin() ? <Outlet /> : <Navigate to={"/"} />}
      </div>
    </div>
  );
}

export default PrivateRouteAdmin;
