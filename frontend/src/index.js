import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { DocumentsContextProvider } from './context/DocumentContext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DocumentsContextProvider>
      <App />
    </DocumentsContextProvider>
  </React.StrictMode>
);