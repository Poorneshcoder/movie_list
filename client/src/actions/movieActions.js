import axios from 'axios';


// Fetch movies
export const getMovies = () => async (dispatch) => {
  try {
    const response = await axios.get('/');
    dispatch({ type: 'GET_MOVIES', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

// Add movie
export const addMovie = (movie) => async (dispatch) => {
  try {
    const response = await axios.post('/', movie);
    dispatch({ type: 'ADD_MOVIE', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

// Update movie
export const updateMovie = (id, updatedMovie) => async (dispatch) => {
  try {
    const response = await axios.put(`/${id}`, updatedMovie);
    dispatch({ type: 'UPDATE_MOVIE', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

// Delete movie
export const deleteMovie = (id) => async (dispatch) => {
  try {
    await axios.delete(`/${id}`);
    dispatch({ type: 'DELETE_MOVIE', payload: id });
  } catch (error) {
    console.error(error);
  }
};


export const reviewMovie = (id, review) => async (dispatch) => {
  try {
    const res = await axios.put(`/${id}/review`, { review });
    dispatch({ type: 'REVIEW_MOVIE', payload: res.data });
  } catch (error) {
    console.error('Error reviewing movie:', error);
  }
};

export const rateMovie = (id, rating) => async (dispatch) => {
  try {
    const res = await axios.put(`/${id}/rate`, { rating });
    dispatch({ type: 'RATE_MOVIE', payload: res.data });
  } catch (error) {
    console.error('Error rating movie:', error);
  }
};




export const toggleWatched = (id, watched) => async (dispatch) => {
  try {
    const res = await axios.put(`/${id}`, { watched });
    dispatch({
      type: 'TOGGLE_WATCHED',
      payload: { id, watched: res.data.watched }
    });
  } catch (err) {
    console.error(err);
  }
};

