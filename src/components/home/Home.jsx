import React, { useState } from "react";
import LoginPopup from "../../components/loginPopup/LoginPopup";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [showLogin, setShowLogin] = useState(false);

  const handleLoginOpen = () => setShowLogin(true);
  const handleLoginClose = () => setShowLogin(false);

  return (
    <div>
      <header className="home-header">
        <h1>Welcome to the CRUD Application</h1>
      </header>
      <section>
        <hr />
        <h2>Get Started</h2>
        <p>Ready to take your productivity to the next level?</p>
        Click the button below to log in and start using our application today.
        <button onClick={handleLoginOpen} className="login">
          Login
        </button>
      </section>
      <section>
        Click the button below to view the users list
        <Link to="/users/list">
          <button className="btn-user-list">View users list</button>
        </Link>
      </section>

      {showLogin && <LoginPopup handleClose={handleLoginClose} />}

      <hr />

      <section>
        <h2>Introduction</h2>
        <p>
          This application demonstrates basic CRUD (Create, Read, Update,
          Delete) operations using React and MockAPI.io. You can easily manage
          your data through an intuitive interface. Whether you're adding new
          entries, viewing existing ones, updating records, or deleting them,
          this application provides all the necessary tools to handle your data
          efficiently.
        </p>
        <p>
          Our CRUD application is designed to simplify data management. CRUD
          operations are fundamental to any database-driven application, and
          mastering these operations is essential for any developer. This
          application serves as a practical example, demonstrating how to
          implement these operations using React and MockAPI.io. By interacting
          with this app, you'll gain hands-on experience in handling data, which
          is crucial for building robust web applications.
        </p>
      </section>

      <section>
        <h2>Features</h2>
        <ul>
          <li>
            <strong>Create:</strong> Easily add new records to the database.
          </li>
          <li>
            <strong>Read:</strong> View detailed information about existing
            records.
          </li>
          <li>
            <strong>Update:</strong> Modify the details of existing records as
            needed.
          </li>
          <li>
            <strong>Delete:</strong> Remove records that are no longer needed.
          </li>
        </ul>
      </section>

      <section>
        <h2>User Testimonials</h2>
        <p>
          "This app is amazing! It makes managing data so simple and efficient."
          - User 1
        </p>
        <p>
          "CRUD operations have never been easier. The interface is very
          intuitive." - User 2
        </p>
        <p>
          "I love how straightforward it is to add, view, update, and delete
          records. Great job!" - User 3
        </p>
      </section>
    </div>
  );
};

export default Home;
