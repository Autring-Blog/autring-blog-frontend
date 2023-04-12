import "./Member.css";
import { FaUserCircle } from "react-icons/fa";

const Member = ({ user }) => {
  const { name, email, role } = user;
  return (
    <li className="user">
      <div className="user-details">
        <div className="user-img">
          <FaUserCircle />
        </div>
        <div className="user-name">{name}</div>
      </div>
      <div className="user-email">{email}</div>
      <button className="user-role">{role}</button>
    </li>
  );
};

export default Member;
