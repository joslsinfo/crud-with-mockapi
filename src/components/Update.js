import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./navbar/NavBar";

const Update = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
    setAvatar(localStorage.getItem("avatar"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "") {
      alert("Please fill in all the fields");
    }

    const apiUrl = process.env.REACT_APP_API_URL;
    console.log("Id.....", id);
    axios
      .put(`${apiUrl}/crud/${id}`, {
        // id: id,
        name: name,
        email: email,
        avatar: avatar,
      })
      .then(() => {
        navigate("/users/read");
        console.log(`Les données de l'Id..... ${id} ont été mises à jour`);
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <>
      <Link to="/users/read" className="text-decoration-none">
        <NavBar />
      </Link>
      <h2>Update</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="form-control"
            aria-describedby="emailHelp"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="avatar" className="form-label">
            Url Image
          </label>
          <input
            type="text"
            id="avatar"
            className="form-control"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleUpdate}
        >
          Update
        </button>
        <Link to="/users/read">
          <button className="btn btn-secondary mx-3"> Back </button>
        </Link>
      </form>
    </>
  );
};

export default Update;
