import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../registerStyle.css"; // Assuming your CSS file is here

const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cPassword: "",
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { name, phone, email, password, cPassword } = user;

    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        password,
        cPassword,
      }),
    });

    const data = await res.json();

    if (res.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("Registration Successful");
      navigate("/");
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
          <NavLink to="/">Home</NavLink>
          <NavLink to="/exploreRentBikes">Bike Showcase</NavLink>
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
          <div className="titled">Registration</div>
          <div className="content">
            <form method="POST">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={user.name}
                    onChange={handleInputs}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="input-box">
                  <span className="details">Email</span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={user.email}
                    onChange={handleInputs}
                    placeholder="Enter your email"
                  />
                </div>
                <div className="input-box">
                  <span className="details">Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    value={user.phone}
                    onChange={handleInputs}
                    placeholder="Enter your number"
                  />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    value={user.password}
                    onChange={handleInputs}
                    placeholder="Enter your password"
                  />
                </div>
                <div className="input-box">
                  <span className="details">Confirm Password</span>
                  <input
                    type="password"
                    name="cPassword"
                    id="cPassword"
                    value={user.cPassword}
                    onChange={handleInputs}
                    placeholder="Confirm your password"
                  />
                </div>
              </div>
              <div className="button">
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  value="Register"
                  onClick={postData}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
