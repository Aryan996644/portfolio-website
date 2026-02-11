import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/admin/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/admin/dashboard');
    } catch {
      alert('Login failed');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded space-y-4">
        <h2 className="text-2xl font-bold">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full p-2 rounded bg-gray-700"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full p-2 rounded bg-gray-700"
          required
        />
        <button className="bg-indigo-600 w-full py-2 rounded">Login</button>
      </form>
    </div>
  );
};

export default Login;
