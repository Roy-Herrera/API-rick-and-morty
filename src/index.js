import React from 'react';
import createRoot from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from './context'
import 'bootstrap/dist/css/bootstrap.min.css';


createRoot.render(
  <React.StrictMode>
    <Provider>
      <App />
    </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);