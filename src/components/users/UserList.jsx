import React, { useState, useEffect } from "react";
import axios from "axios";
import "./UserList.css";
import { Link } from "react-router-dom";

const apiUrl = process.env.REACT_APP_API_URL;

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${apiUrl}/crud`);
        setUsers(response.data);
        console.log("Users list:", response.data);
      } catch (error) {
        console.error("Erreur lors de l'appel à l'API : ", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h2>Liste des utilisateurs</h2>

      <ul className="user-list">
        {users.map((user) => (
          <li key={user.id} className="user-card">
            <img src={user.avatar} alt={user.name} />
            <div className="user-card-body">
              <h3>{user.name}</h3>
              <p>{user.email}</p>
            </div>
          </li>
        ))}
      </ul>

      <Link to="/">
        <button className="btn btn-secondary mx-3"> Back </button>
      </Link>
    </div>
  );
};

export default UserList;
