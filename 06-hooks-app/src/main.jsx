import './index.css';
import { HooksApp } from './HooksApp.jsx';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './01-useState/CounterApp';
import { CounterCustomHook } from './01-useState/CounterCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';


ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <HooksApp />
    // <CounterApp/>
    // <CounterCustomHook/>
    <SimpleForm/>
  // </React.StrictMode>,
)
