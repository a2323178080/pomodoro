import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/Default/index.css';
import "@ant-design/flowchart/dist/index.css";
import App from './App';
import reportWebVitals from './reportWebVitals';
import "./assets/Default/index.scss";
import {BrowserRouter} from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode >
    <BrowserRouter>
        <App/>
    </BrowserRouter>
  // </React.StrictMode>
);
reportWebVitals();
