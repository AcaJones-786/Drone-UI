import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./pages/Header";
import Order from "./pages/OrderPage";
import Dashboard from "./pages/DeliveryDashboard";
import NotFound from "./pages/404";
import HomePage from './pages/Home';
import RegisterPage from './pages/Register';
import Login from './pages/Login-page';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<RegisterPage />} />
          <Route path="Login" element={<Login />} />
          <Route path="Home" element={<HomePage />} />
          <Route path="DeliveryDashboard" element={<Dashboard />} />
          <Route path="OrderPage" element={<Order />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);