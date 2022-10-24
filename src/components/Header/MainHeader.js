import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const MainHeader = () => {
  return (
    <div className="main-header">
      <nav>
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/blogs">Blogs</Link>
        <Link className="nav-link" to="/users">User</Link>
      </nav>
    </div>
  );
};

export default MainHeader;
