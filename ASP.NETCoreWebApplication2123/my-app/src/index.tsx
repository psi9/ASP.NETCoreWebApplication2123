import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterContext, RouterContextProvider } from './RouterContext'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
        <RouterContextProvider>
            <App/>
        </RouterContextProvider>
);
