
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";

const Courses = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchParam = params.get("search") || "";

  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState(searchParam);
  const [category, setCategory] = useState("Hepsi");

  useEffect(() => {
    import("../data/courses.json").then((mod) => setCourses(mod.default || mod));
  }, []);

  // URL değişirse arama kutusunu güncelle
  useEffect(() => {
    setSearch(searchParam);
  }, [searchParam]);

  const filteredCourses = courses.filter(course =>
    (category === "Hepsi" || course.category === category) &&
    course.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="max-w-6xl mx-auto py-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Tüm Kurslar</h1>
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Kurs ara..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          />
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:text-white"
          >
            <option>Hepsi</option>
            <option>Frontend</option>
            <option>Backend</option>
            <option>Mobil</option>
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredCourses.length === 0 ? (
            <div className="col-span-3 text-center text-gray-400">Kurs bulunamadı.</div>
          ) : (
            filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Courses;

