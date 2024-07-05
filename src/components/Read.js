import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import NavBar from "./navbar/NavBar";
import Search from "./Search";

const Read = () => {
  const [data, setData] = useState([]);
  const [tableDark, setTableDark] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const apiUrl = process.env.REACT_APP_API_URL;
  const getData = () => {
    axios
      .get(`${apiUrl}/crud`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.error("Erreur lors de l'appel à l'API : ", error);
      });
  };

  //
  function handleDelete(id) {
    axios.delete(`${apiUrl}/crud/${id}`).then(() => {
      getData();
    });
  }

  const setToLocalStorage = (id, name, email, avatar) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
    localStorage.setItem("avatar", avatar);
  };

  useEffect(() => {
    getData();
  }, []);
  const filteredUsers = searchTerm
    ? data.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data;
  return (
    <>
      <Link to="/users/read" className="text-decoration-none">
        <NavBar />
      </Link>
      <Search handleSearch={handleSearch} />

      <div className="form-check form-switch mt-2">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if (tableDark === "table-dark") setTableDark("");
            else setTableDark("table-dark");
          }}
        />
      </div>

      <div className="d-flex justify-content-between m-2">
        <h2>Read Operation</h2>
        <Link to="/create">
          <button className="btn btn-secondary">
            <i className="fa fa-plus" aria-hidden="true"></i> Create
          </button>
        </Link>
      </div>

      {filteredUsers.length > 0 ? (
        <table
          className={`table ${tableDark} table-striped text-center table-hover shadow-lg`}
        >
          <thead className="bg-dark text-white">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Photo</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((eachData) => (
              <tr key={eachData.id}>
                <th scope="row">{eachData.id}</th>
                <td>
                  <Link
                    to={`/users/${eachData.id}`}
                    className="text-decoration-none text-success fw-bold"
                  >
                    {eachData.name}
                  </Link>
                </td>
                <td>{eachData.email}</td>
                <td>
                  <img
                    src={eachData.avatar}
                    alt=""
                    className="img-fluid"
                    style={{ maxWidth: "50px" }}
                  />
                </td>
                <td>
                  <Link to="/update">
                    <button
                      className="btn btn-success"
                      onClick={() =>
                        setToLocalStorage(
                          eachData.id,
                          eachData.name,
                          eachData.email,
                          eachData.avatar
                        )
                      }
                    >
                      <i className="fa fa-edit"></i>
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(eachData.id)}
                  >
                    {" "}
                    <i className="fa fa-trash"></i>{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No matches for {searchTerm}</p>
      )}
    </>
  );
};

export default Read;
