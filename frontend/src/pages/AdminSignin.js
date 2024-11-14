// src/pages/AdminSignin.js

import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AdminContext } from "../AppWrapper"; // Ensure AdminContext is imported correctly


const AdminSignin = () => {
  const { dispatchAdmin } = useContext(AdminContext);

  const navigate = useNavigate();
  const [adminName, setAdminName] = useState("");
  const [adminPassword, setAdminPassword] = useState("");

  const signinAdmin = async (e) => {
    e.preventDefault();

    const res = await fetch("/signinAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        adminName,
        adminPassword,
      }),
    });

    const data = await res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      dispatchAdmin({ type: "ADMIN", payload: true });
      window.alert("Signin Successful");
      navigate("/dashboard");
    }
  };

  return (
    <>
      <header className="header">
        <div id="menu-btn" className="fas fa-bars"></div>
        <NavLink className="logo" to="/">
          {" "}
          <span>Bike</span>Book{" "}
        </NavLink>
        <nav className="navbar">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-link" to="/contact">
            Contact
          </NavLink>
        </nav>
        <div id="login-btn">
          <button className="btn">
            <NavLink className="nav-link" to="/signin">
              Login
            </NavLink>
          </button>
        </div>
      </header>

      <div className="maincontainer">
        <div className="firstcontainer">
          <div className="titled">Admin Sign In</div>
          <div id="adminsignin" className="content">
            <h2>Sign in as Admin</h2>
            <form method="POST">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">User Name</span>
                  <input
                    type="text"
                    value={adminName}
                    onChange={(e) => setAdminName(e.target.value)}
                    placeholder="Enter your user name"
                  />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="button">
                <input type="submit" value="Sign In" onClick={signinAdmin} />
              </div>
            </form>
            <button className="btn">
              <NavLink className="nav-link" to="/signup">
                Sign in as User
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSignin;
