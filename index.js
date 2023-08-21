import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { UseContextProvider } from './Context/UseContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <UseContextProvider>
  <App />

  </UseContextProvider>
  </>
);



