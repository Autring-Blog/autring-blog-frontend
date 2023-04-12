import { useRef } from "react";
import "./Member.css";
import { FaUserCircle } from "react-icons/fa";

const Member = ({ user }) => {
  const { _id, name, email, role } = user;
  const menuRef = useRef(null);
  const roles = ["admin", "member", "user"];
  const handleRole = (role) => {
    document
      .querySelectorAll(".more-menu")
      .forEach((menu) => menu.classList.remove("active"));
    console.log(
      document
        .querySelectorAll(".more-menu")
        .forEach((menu) => menu.classList.contains("active"))
    );
  };
  return (
    <li
      className="user"
      onClick={() => menuRef.current.classList.toggle("active")}
    >
      <div className="user-details">
        <div className="user-img">
          <FaUserCircle />
        </div>
        <div className="user-name">{name}</div>
      </div>
      <div className="user-email">{email}</div>
      <button className="user-role">{role}</button>
      <div className="more-menu" ref={menuRef}>
        {roles.map((role, index) => (
          <div
            className="menu-item"
            onClick={() => handleRole(_id, role)}
            key={index}
          >
            {role}
          </div>
        ))}
      </div>
    </li>
  );
};

export default Member;
