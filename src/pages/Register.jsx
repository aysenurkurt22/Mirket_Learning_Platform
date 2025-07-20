import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Register = () => {
  const { register } = useAuth(); // veya login, dosyaya göre
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target[0].value; // Register için
    const email = e.target[1].value;
    const password = e.target[2].value;
    register(name, email, password);
    navigate("/account");
  };
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto py-12 px-4 max-w-md">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Kayıt Ol</h1>
        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-800 rounded-lg shadow p-8 space-y-6">
          <input type="text" placeholder="Ad Soyad" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white" />
          <input type="email" placeholder="E-posta" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white" />
          <input type="password" placeholder="Şifre" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white" />
          <button type="submit" className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">Kayıt Ol</button>
        </form>
      </div>
    </div>
  );
};

export default Register;