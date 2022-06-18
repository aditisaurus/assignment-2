import React from 'react';
import ReactDOM from 'react-dom/client';
import { makeServer } from "./Server"
import './index.css';
import App from './App';

if (process.env.NODE_ENV === "development") {
  makeServer({ environment: "development" })
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


