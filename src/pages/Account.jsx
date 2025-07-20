import React from "react";
import Navbar from "../components/Navbar";
import { useAuth } from "../context/AuthContext";

const Account = () => {
  const { user } = useAuth();
  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="container mx-auto py-12 px-4 text-center text-gray-400">
          Lütfen giriş yapın.
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Hesabım</h1>
        <div className="mb-8">
          <div className="text-lg font-semibold">{user.name || user.email}</div>
        </div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Satın Alınan Kurslar</h2>
        {user.purchasedCourses && user.purchasedCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {user.purchasedCourses.map((course) => (
              <div key={course.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4">
                <div className="font-semibold">{course.title}</div>
                <div className="text-sm text-gray-500">{course.instructor}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-gray-400">Henüz kurs satın almadınız.</div>
        )}
      </div>
    </div>
  );
};

export default Account;

