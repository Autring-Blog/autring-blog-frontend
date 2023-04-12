import { useEffect, useState } from "react";
import "./Admin.css";
import axios from "axios";
import Member from "../member/Member";

const Admin = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    const { data } = await axios.get("http://localhost:4011/api/v1/getalluser");
    setUsers(data.data.users);
  };
  return (
    <div className="admin-panel">
      <h1>Members({users.length})</h1>
      <ul>
        <li className="heading">
          <h3>
            <span>Name</span>
            <span>Email</span>
            <span>Role</span>
          </h3>
        </li>
        {users.map((user) => (
          <Member user={user} key={user._id} />
        ))}
      </ul>
    </div>
  );
};

export default Admin;
