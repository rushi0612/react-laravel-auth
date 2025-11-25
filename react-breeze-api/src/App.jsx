import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import './index.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {

  return (
    <div className="bg-slate-100 min-h-screen">

      {/* NAVBAR START */}
        <nav className="rounded bg-indigo-900 text-white px-2 py-2.5 sm:px-4">
          <div className="flex justify-between items-center h-16 px-4">
            {/* Logo */}
              <h1 className="text-2xl font-bold">MyLogo</h1>
            {/* Desktop Menu */}
              <div className="hidden md:flex space-x-6">
                <Link to="/" className="hover:text-gray-300">Home</Link>
                <Link to="/login" className="hover:text-gray-300">Login</Link>
                <Link to="/register" className="hover:text-gray-300">Register</Link>
              </div>
          </div>

        </nav>
    <div className="max-w-7xl mx-auto mt-">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
    </div>
  );
}

export default App;
