import { logOut } from "../../redux/actions/userAction";
import { useDispatch } from "react-redux";
import "./Dashboard.css";
import { Outlet, useNavigate } from "react-router-dom";
import { MdOutlineArticle } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { AiOutlineLogout } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(logOut);
    navigate("/signin");
  };
  const handleDrawer = () => {
    const drawer = document.getElementById("drawer");
    drawer.classList.toggle("active");
  };
  return (
    <div className="dashboard-container">
      <div className="drawer" id="drawer">
        <ul>
          <li className="hamburger" onClick={() => handleDrawer()}>
            <span className="icon">
              <RxHamburgerMenu />
            </span>
          </li>
          <li onClick={() => navigate("./")}>
            <span className="icon">
              <MdOutlineArticle />
            </span>
            <span className="title">Blogs</span>
          </li>
          <li onClick={() => navigate("./admin")}>
            <span className="icon">
              <RiAdminLine />
            </span>
            <span className="title">Admin</span>
          </li>
          <li className="logout" onClick={() => handleLogOut()}>
            <span className="icon">
              <AiOutlineLogout />
            </span>
            <span className="title">Logout</span>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Dashboard;
