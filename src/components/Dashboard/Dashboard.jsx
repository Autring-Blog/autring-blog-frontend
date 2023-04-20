import "./Dashboard.css";
import { Outlet } from "react-router-dom";
import Drawer from "./drawer/Drawer";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Drawer />
      <Outlet />
    </div>
  );
};

export default Dashboard;
