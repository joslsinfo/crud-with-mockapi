import logo from "./logo.svg";
import "./App.css";

import { Routes, Route } from "react-router-dom";
import Create from "./components/Create";
import Read from "./components/Read";
import Home from "./components/home/Home";
import Update from "./components/Update";
import Details from "./components/Details";
import Footer from "./components/Footer";
import UserList from "./components/users/UserList";

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>CRUD in React with MockAPI online is very interesting</h1>
        <h2>Que c'est beau de faire la programmation!</h2>
        <h2>It's nice to do the programming!</h2>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="users/read" element={<Read />} />
        <Route path="/users/:id" element={<Details />} />
        <Route path="/create" element={<Create />} />
        <Route path="/update" element={<Update />} />
        <Route path="users/list" element={<UserList />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
