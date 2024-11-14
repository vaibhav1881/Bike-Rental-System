import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup"; // Import Signup component
import AdminDashboard from "./pages/AdminDashboard";
import Payment from "./pages/Payment";
import Navbar from "./components/Navbar";
import NotFound from "./pages/NotFound";
import Signout from "./pages/Signout";
import AdminSignin from "./pages/AdminSignin";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Add Signup route */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/signout" element={<Signout />} /> 
        <Route path="/adminsignin" element={<AdminSignin />} />
      </Routes>
    </Router>
  );
}

export default App;
