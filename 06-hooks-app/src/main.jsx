import './index.css';
import { HooksApp } from './HooksApp.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './01-useState/CounterApp';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <HooksApp />
    <CounterApp/>
  // </React.StrictMode>,
)
