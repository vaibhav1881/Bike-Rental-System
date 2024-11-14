import React, { useState, useEffect } from "react";
import axios from "axios";

function AdminDashboard() {
  const [bikes, setBikes] = useState([]);
  const [revenue, setRevenue] = useState(0);

  useEffect(() => {
    fetchBikes();
    fetchRevenue();
  }, []);

  const fetchBikes = async () => {
    const response = await axios.get("http://localhost:5000/api/bikes");
    setBikes(response.data);
  };

  const fetchRevenue = async () => {
    const response = await axios.get(
      "http://localhost:5000/api/rentals/revenue"
    ); // Define this route
    setRevenue(response.data.totalRevenue);
  };

  const deleteBike = async (id) => {
    await axios.delete(`http://localhost:5000/api/bikes/delete/${id}`);
    fetchBikes();
  };

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <h2>Total Revenue: ${revenue}</h2>
      <div>
        <h2>Bikes</h2>
        {bikes.map((bike) => (
          <div key={bike._id}>
            <h3>{bike.name}</h3>
            <p>Type: {bike.type}</p>
            <p>Hourly Rate: ${bike.hourlyRate}</p>
            <button onClick={() => deleteBike(bike._id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;
