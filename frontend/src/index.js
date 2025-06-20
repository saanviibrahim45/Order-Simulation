//add the rendering of the app here 
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'; // import your main component
import './styles.css';   // optional styling

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
