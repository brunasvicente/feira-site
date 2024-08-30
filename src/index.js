import './index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import UserChegada from './pages/chegada/pages/page2';


import Navegacao from './routes';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserChegada />
  </React.StrictMode>
);

