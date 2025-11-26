import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from '../api/axios';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirmation] = useState("");

  const navigate = useNavigate();

  const handelRegister = async (event) => {
  event.preventDefault();

  try {
    // Step 1: Get CSRF token
    await axios.get("/sanctum/csrf-cookie");

    // Step 2: Register user
    await axios.post("/register", {
      name,
      email,
      password,
      password_confirmation,
    });

    setName("");
    setEmail("");
    setPassword("");
    setPasswordConfirmation("");

    navigate("/");

  } catch (error) {
    console.log("Register Error:", error.response?.data);
  }
};


  return (
    <div>
      <div className="flex min-h-full flex-col justify-center align-content-center px-6 py-12 lg:px-8 mt-10 bg-gray-500 max-w-md mx-auto rounded-xl shadow-lg">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handelRegister} className="space-y-6">

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-100">
                Name
              </label>
              <div className="mt-2">
                <input
                  name="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white"
                  placeholder="Your full name"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-100">
                Email address
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-100">
                Password
              </label>
              <div className="mt-2">
                <input
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white"
                  placeholder="********"
                />
              </div>
            </div>

            {/* Password Confirmation */}
            <div>
              <label htmlFor="password_confirmation" className="block text-sm font-medium text-gray-100">
                Password Confirmation
              </label>
              <div className="mt-2">
                <input
                  name="password_confirmation"
                  type="password"
                  value={password_confirmation}
                  onChange={(e) => setPasswordConfirmation(e.target.value)}
                  required
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white"
                  placeholder="Confirm your password"
                />
              </div>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold text-white hover:bg-indigo-400"
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="font-semibold text-indigo-400 hover:text-indigo-300">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
