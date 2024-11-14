import React from 'react';
import BikeCard from './BikeCard';

function FeaturedBikes() {
  return (
    <div className="featured-bikes">
      <h2>Featured Bikes</h2>
      <div className="bike-list">
        {/* Array of BikeCard components, each representing a bike */}
        <BikeCard />
        <BikeCard />
        <BikeCard />
      </div>
    </div>
  );
}

export default FeaturedBikes;
