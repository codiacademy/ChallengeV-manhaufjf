import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import App from './App';
import FormListTable from './components/FormListTable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path={process.env.REACT_APP_ADMIN_ROUTE} element={<FormListTable />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

