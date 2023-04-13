import { useRef } from "react";
import "./Member.css";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

const Member = ({ user }) => {
  const token = localStorage.getItem("token");
  const { _id, name, email, role } = user;
  const menuRef = useRef(null);
  const roleRef = useRef(null);
  const roles = ["admin", "member", "user"];
  const [activeRole, setActiveRole] = useState(role);
  const handleRole = async (e, _id, role) => {
    e.stopPropagation();
    e.target.parentElement.classList.remove("active");
    setActiveRole(role);
    try {
      await axios.post(
        `http://localhost:4011/api/v1/updateuserrole/${_id}`,
        {
          role,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
      try {
        await axios.post(
          `https://api.theautring.com/api/v1/updateuserrole/${_id}`,
          {
            role,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      } catch (err) {
        console.log(err);
      }
    }
  };
  return (
    <li
      className="user"
      onClick={() => {
        if (menuRef.current.classList.contains("active")) {
          return menuRef.current.classList.remove("active");
        }
        document
          .querySelectorAll(".more-menu")
          .forEach((menu) => menu.classList.remove("active"));
        menuRef.current.classList.add("active");
      }}
    >
      <div className="user-details">
        <div className="user-img">
          <FaUserCircle />
        </div>
        <div className="user-name">{name}</div>
      </div>
      <div className="user-email">{email}</div>
      <button className="user-role" ref={roleRef}>
        {activeRole}
      </button>
      <div className="more-menu" ref={menuRef}>
        {roles.map((role, index) => (
          <div
            className="menu-item"
            onClick={(e) => handleRole(e, _id, role)}
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
