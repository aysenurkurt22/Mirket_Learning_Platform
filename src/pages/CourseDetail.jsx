import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

const CourseDetail = () => {
  const { addToCart } = useCart();
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const { purchaseCourse } = useAuth();

  useEffect(() => {
    import("../data/courses.json").then((mod) => {
      const data = mod.default || mod;
      setCourse(data.find(c => String(c.id) === id));
    });
  }, [id]);
  if (!course) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <Navbar />
        <div className="container mx-auto py-12 px-4 text-center text-gray-400">Kurs bulunamadı...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <div className="flex flex-col md:flex-row gap-8">
          <img src={course.image} alt={course.title} className="w-full md:w-1/3 rounded-2xl shadow-lg object-cover" />
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{course.title}</h1>
            <div className="text-gray-500 dark:text-gray-300 mb-2">{course.instructor}</div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-yellow-400 font-bold">★ {course.rating}</span>
              <span className="text-xs text-gray-400">({course.students} öğrenci)</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">{course.description}</p>
            <div className="text-blue-600 dark:text-blue-400 font-bold text-xl mb-4">₺{course.price}</div>
            <div className="flex gap-4">
              <button
                onClick={() => addToCart(course)}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Sepete Ekle
              </button>
              <button
                onClick={() => purchaseCourse(course)}
                className="px-6 py-2 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Satın Al
              </button>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Dersler</h2>
          <ul className="space-y-2">
            {course.lessons.map((lesson, i) => (
              <li key={i} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow flex justify-between items-center">
                <span>{lesson.title}</span>
                <span className="text-gray-400">{lesson.duration}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;

