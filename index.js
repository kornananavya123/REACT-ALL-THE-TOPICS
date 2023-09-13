import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from "./App"; // importing


const root = ReactDOM.createRoot(document.getElementById('root'));
// we have rendering my app 4 times thatswhy its printing this is my heading print 4 times
root.render (
        <React.StrictMode>
        <App />
        </React.StrictMode>
);
