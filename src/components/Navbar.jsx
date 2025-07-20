import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white/60 dark:bg-gray-900/60 backdrop-blur-lg shadow-md transition-all duration-300">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <img className="h-8 w-auto" src="/logo.png" alt="Mirket" />
          <span className="font-black text-2xl text-gray-800 dark:text-white tracking-tight group-hover:text-primary transition-colors duration-200">mirket</span>
        </a>
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          <a href="/courses" className="text-gray-700 dark:text-gray-200 hover:text-primary font-semibold transition-colors duration-200">Kurslar</a>
          <a href="/instructor" className="text-gray-700 dark:text-gray-200 hover:text-primary font-semibold transition-colors duration-200">Eğitmen Paneli</a>
          <a href="/cart" className="text-gray-700 dark:text-gray-200 hover:text-primary font-semibold transition-colors duration-200">Sepetim</a>
          {user && (
            <a href="/account" className="text-gray-700 dark:text-gray-200 hover:text-primary font-semibold transition-colors duration-200">Hesabım</a>
          )}
        </div>
        {/* Mobile Hamburger */}
        <button className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
        {/* Desktop Auth */}
        <div className="hidden md:flex items-center gap-2">
          {user ? (
            <>
              <span className="mr-2 text-gray-700 dark:text-gray-200 font-semibold">{user.name || user.email}</span>
              <button
                onClick={logout}
                className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
              >
                Çıkış
              </button>
            </>
          ) : (
            <>
              <a href="/login" className="px-4 py-2 text-sm font-semibold text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 shadow">Giriş</a>
              <a href="/register" className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors duration-200 shadow">Kayıt Ol</a>
            </>
          )}
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg absolute top-16 left-0 w-full flex flex-col items-center py-6 gap-4 animate-fade-in">
          <a href="/courses" className="text-gray-700 dark:text-gray-200 hover:text-primary font-semibold transition-colors duration-200" onClick={() => setMobileOpen(false)}>Kurslar</a>
          <a href="/instructor" className="text-gray-700 dark:text-gray-200 hover:text-primary font-semibold transition-colors duration-200" onClick={() => setMobileOpen(false)}>Eğitmen Paneli</a>
          <a href="/cart" className="text-gray-700 dark:text-gray-200 hover:text-primary font-semibold transition-colors duration-200" onClick={() => setMobileOpen(false)}>Sepetim</a>
          {user && (
            <a href="/account" className="text-gray-700 dark:text-gray-200 hover:text-primary font-semibold transition-colors duration-200" onClick={() => setMobileOpen(false)}>Hesabım</a>
          )}
          <div className="flex flex-col items-center gap-2 mt-4">
            {user ? (
              <>
                <span className="mr-2 text-gray-700 dark:text-gray-200 font-semibold">{user.name || user.email}</span>
                <button
                  onClick={() => { logout(); setMobileOpen(false); }}
                  className="px-4 py-2 text-sm font-semibold text-white bg-red-600 rounded-lg hover:bg-red-700 transition"
                >
                  Çıkış
                </button>
              </>
            ) : (
              <>
                <a href="/login" className="px-4 py-2 text-sm font-semibold text-primary border border-primary rounded-lg hover:bg-primary hover:text-white transition-colors duration-200 shadow" onClick={() => setMobileOpen(false)}>Giriş</a>
                <a href="/register" className="px-4 py-2 text-sm font-semibold text-white bg-primary rounded-lg hover:bg-primary-dark transition-colors duration-200 shadow" onClick={() => setMobileOpen(false)}>Kayıt Ol</a>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
