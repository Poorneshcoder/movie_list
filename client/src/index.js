import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import store from './store/store';
import './index.css';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3045/api/movies';

const container = document.getElementById('root');
const root = createRoot(container); 

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

