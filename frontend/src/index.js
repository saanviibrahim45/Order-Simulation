// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

//add the rendering of the app here 
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // import your main component
import './styles.css';   // optional styling

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
