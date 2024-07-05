import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "./navbar/NavBar";

const Details = () => {
  let { id } = useParams();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");

  const apiUrl = process.env.REACT_APP_API_URL;

  const getDataById = () => {
    axios

      .get(`${apiUrl}/crud/${id}`)
      .then((res) => {
        console.log(res.data);

        setName(res.data.name);
        setEmail(res.data.email);
        setAvatar(res.data.avatar);
      })
      .catch((error) => {
        console.error("Erreur lors de l'appel à l'API : ", error);
      });
  };

  useEffect(() => {
    if (id) {
      getDataById();
    }
  }, [id]);

  return (
    <>
      <Link to="/users/read" className="text-decoration-none">
        <NavBar />
      </Link>
      <div className="container mt-3">
        <div className="row">
          <div className="col">
            <h2>Details</h2>
            <p className="fst-italic">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque
              soluta quos minus error! Iure nobis reiciendis, perspiciatis sit
              esse tempore alias totam, nam accusantium beatae sunt. Quis
              voluptas iure praesentium?
            </p>
          </div>
        </div>
        {Object.keys(id).length > 0 && (
          <div>
            <h2>ID: {id}</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>

            <td>
              <img
                src={avatar}
                alt=""
                className="img-fluid"
                style={{ maxWidth: "200px" }}
              />
            </td>
          </div>
        )}
        <div className="mt-5">
          <Link to="/users/read">
            <button className="btn btn-secondary mx-3"> Back </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Details;
