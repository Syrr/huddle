import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './index.css';
import { ToastContainer, collapseToast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import store from './store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
    <ToastContainer position='top-center' autoClose={2000} />
  </Provider>
);
