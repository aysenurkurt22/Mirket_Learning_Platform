import React, { createContext, useContext, useState, useEffect } from "react";

// 1. Context oluştur
const AuthContext = createContext();

// 2. Provider bileşeni
export const AuthProvider = ({ children }) => {
  // user state'i localStorage'dan başlat
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // user değişince localStorage'a kaydet
  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  // Giriş fonksiyonu (mock)
  const login = (email, password) => {
    setUser({ email, purchasedCourses: [] });
  };

  // Kayıt fonksiyonu (mock)
  const register = (name, email, password) => {
    setUser({ name, email, purchasedCourses: [] });
  };

  // Çıkış fonksiyonu
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // Kurs satın alma fonksiyonu
    const purchaseCourse = (course) => {
        setUser((prev) => ({
          ...prev,
          purchasedCourses: prev.purchasedCourses
            ? [...prev.purchasedCourses, course]
            : [course],
        }));
      };

    return (
    <AuthContext.Provider value={{ user, login, register, logout, purchaseCourse }}>
            {children}
        </AuthContext.Provider>
    );
};

// 3. Kolay kullanım için custom hook
export const useAuth = () => useContext(AuthContext);