import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../AppWrapper"; // Use AppWrapper for context

const Signout = () => {
  const { dispatch } = useContext(UserContext); // Access dispatch from context
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/signout", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    })
      .then((res) => {
        if (res.status === 200) {
          localStorage.removeItem("User");
          dispatch({ type: "USER", payload: false }); // Update context
          navigate("/login", { replace: true }); // Redirect to login page
          window.location.reload(); // Reload page to reset state
        } else {
          throw new Error("Failed to log out");
        }
      })
      .catch((error) => {
        console.error("Logout error:", error);
      });
  }, [dispatch, navigate]);

  return (
    <>
      <h1>Logging Out...</h1>
    </>
  );
};

export default Signout;
