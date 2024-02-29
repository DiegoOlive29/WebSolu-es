import React from 'react';

interface StarRatingProps {
  rating: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < Math.floor(rating) ? 'text-yellow-500' : 'text-black'}>
      &#9733;
    </span>
  ));

  return <div>{stars}</div>;
};

export default StarRating;