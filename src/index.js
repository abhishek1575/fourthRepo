import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Login from './Component/Login/Login';
import Dashboard2 from './Component/dashboard/Dashboard2'
import AddElememt from './Component/AddElement';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <Login/> */}
    <Dashboard2/>
    {/* <AddElememt/> */}
  </React.StrictMode>
);

