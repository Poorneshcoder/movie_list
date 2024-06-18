import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { rateMovie } from '../actions/movieActions';

const RateMovie = ({ movie }) => {
  const [rating, setRating] = useState(movie.rating || 0);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(rateMovie(movie._id, rating));
    setRating('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <label className="block text-sm font-medium text-gray-700">Rating:</label>
      <input
        type="number"
        min="1"
        max="5"
        value={rating}
        onChange={(e) => setRating(Number(e.target.value))}
        className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-black text-white p-2 m-2 rounded hover:bg-teal-950">Submit</button>
    </form>
  );
};

export default RateMovie;
