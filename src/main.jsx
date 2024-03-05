import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store';
import router from './router/index.jsx';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}>
        <Home />
      </RouterProvider>
    </Provider>
  </React.StrictMode>,
)
