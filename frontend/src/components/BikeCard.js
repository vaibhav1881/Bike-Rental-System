import React from 'react';

function BikeCard() {
  return (
    <div className="bike-card">
      <img src="bike-image.jpg" alt="Bike" />
      <h3>Bike Model</h3>
      <p>Description of the bike</p>
      <button className="rent-btn">Rent Now</button>
    </div>
  );
}

export default BikeCard;
