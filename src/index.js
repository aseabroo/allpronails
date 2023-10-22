import React from 'react';
import ReactDOM from 'react-dom'; // Corrected this import
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom'; // You named BrowserRouter as Router here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router> {/* Use Router here since that's what you named it in the import */}
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
