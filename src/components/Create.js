import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavBar from "./navbar/NavBar";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [emailValid, setEmailValid] = useState(true);
  const [nameValid, setNameValid] = useState(true);
  const [avatarValid, setAvatarValid] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const history = useNavigate();

  const header = { "Access-Control-Allow-Origin": "*" };

  const validateName = (name) => {
    if (name.trim() === "") {
      return false;
    }

    return true;
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateAvatar = (avatar) => {
    if (avatar.trim() === "") {
      return false;
    }

    return true;
  };

  const handleNameFocus = () => {
    setNameValid(true);
    setErrorMessage("");
  };

  const handleEmailFocus = () => {
    setEmailValid(true);
    setErrorMessage("");
  };

  const handleAvatarFocus = () => {
    setAvatarValid(true);
    setErrorMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateName(name)) {
      setNameValid(false);
      setErrorMessage("Please enter a valid name.");
      return;
    } else if (!validateEmail(email)) {
      setEmailValid(false);
      setErrorMessage("Please enter a valid email address.");
      return;
    } else if (!validateAvatar(avatar)) {
      setAvatarValid(false);
      setErrorMessage("Please enter a valid avatar Url Image.");
      return;
    }

    setEmailValid(true);
    setErrorMessage("");
    setNameValid(true);
    setErrorMessage("");
    setAvatarValid(true);
    setErrorMessage("");

    if (name.trim() === "" || email.trim() === "" || avatar.trim() === "") {
      setErrorMessage("Please fill in all the fields.");

      return;
    }
    const apiUrl = process.env.REACT_APP_API_URL;
    console.log("clicked!!!");
    axios
      .post(`${apiUrl}/crud`, {
        name: name,
        email: email,
        avatar: avatar,
        header,
      })

      .then((response) => {
        console.log("Data submitted successfully:", response.data);

        history("/users/read");
      })
      .catch((error) => {
        console.error("Error submitting form", error);
      });
  };

  return (
    <>
      <Link to="/users/read" className="text-decoration-none">
        <NavBar />
      </Link>
      <div className="d-flex justify-content-between m-2">
        <h2>Create</h2>
        <Link to="/users/read">
          <button className="btn btn-primary">Show Data</button>
        </Link>
      </div>
      <form>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onFocus={handleNameFocus}
            className={`form-control ${!nameValid ? "is-invalid" : ""}`}
          />
          {!nameValid && <div className="invalid-feedback">{errorMessage}</div>}
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={handleEmailFocus} // Ajouter cette ligne pour gérer l'événement onFocus
            className={`form-control ${!emailValid ? "is-invalid" : ""}`}
          />
          {!emailValid && (
            <div className="invalid-feedback">{errorMessage}</div>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="avatar" className="form-label">
            URL image
          </label>
          <input
            type="text"
            id="avatar"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            onFocus={handleAvatarFocus} // Ajouter cette ligne pour gérer l'événement onFocus
            className={`form-control ${!avatarValid ? "is-invalid" : ""}`}
          />
          {!avatarValid && (
            <div className="invalid-feedback">{errorMessage}</div>
          )}
        </div>

        {/* {name}
      {email} */}

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default Create;
