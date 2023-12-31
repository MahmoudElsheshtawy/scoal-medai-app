import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import App from './App';
import {DarkModeContextProvider} from './context/darkModeContext'
import { BrowserRouter } from 'react-router-dom';
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
     <BrowserRouter>
     <App />
     </BrowserRouter>
        
   
    </DarkModeContextProvider>
  </React.StrictMode>
);

