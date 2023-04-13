import { useEffect, useState } from "react";
import "./Admin.css";
import axios from "axios";
import Member from "../member/Member";
import Loader from "../../Loader/Loader";

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAllUsers();
  }, []);
  const getAllUsers = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:4011/api/v1/getalluser"
      );
      setUsers(data.data.users);
      setLoading(false);
    } catch (err) {
      console.log(err);
      try {
        const { data } = await axios.get(
          "https://api.theautring.com/api/v1/getalluser"
        );
        setUsers(data.data.users);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    }
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
        {loading ? (
          <Loader />
        ) : !!users.length ? (
          users.map((user) => <Member user={user} key={user._id} />)
        ) : (
          <h3 className="no-users">No Users</h3>
        )}
      </ul>
    </div>
  );
};

export default Admin;
