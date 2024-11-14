import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/admin">Admin</Link>
      <Link to="/payment">Payment</Link>
    </nav>
  );
}

export default Navbar;
