import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { reviewMovie } from '../actions/movieActions';

const ReviewMovie = ({ movie }) => {
  const [review, setReview] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(reviewMovie(movie._id, review));
    setReview(''); 
  };

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <label className="block text-sm font-medium text-gray-700">Review:</label>
      <textarea
        value={review}
        onChange={(e) => setReview(e.target.value)}
        className="block w-full border border-gray-300 rounded-md shadow-sm p-2"
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-black text-white p-2 m-2 rounded hover:bg-teal-950">Submit</button>
    </form>
  );
};

export default ReviewMovie;
