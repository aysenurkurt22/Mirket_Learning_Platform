import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import CourseCard from "../components/CourseCard";
import { FiSearch } from "react-icons/fi";

const Home = () => {
  const [search, setSearch] = useState("");
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    import("../data/courses.json").then((mod) => setCourses(mod.default || mod));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`/courses?search=${encodeURIComponent(search)}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Navbar />
      {/* Hero Section */}
      <section className="relative text-center pb-1 bg-white dark:bg-gray-900 min-h-[400px] md:min-h-[500px]">
        {/* Mirket görseli ve içerik */}
        <div className="relative flex flex-col items-center">
          <img
            src="/mirket-hero.png"
            alt="Mirket"
            className="w-screen h-[600px] object-cover opacity-70 pointer-events-none select-none"
            style={{ zIndex: 1 }}
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-10">
            <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 drop-shadow-lg">Mirket'e Hoş Geldin!</h1>
            <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 max-w-2xl mx-auto">En iyi eğitmenlerden, en güncel kurslarla kendini geliştir! Hedefine ulaşmak için ilk adımı at.</p>
          </div>
          {/* Butonlar görselin alt kenarına yapışık ve taşacak şekilde */}
          <form
            onSubmit={handleSearch}
            className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/3 flex flex-col md:flex-row items-center justify-center gap-4 max-w-xl mx-auto z-20"
            style={{ width: "100%" }}
          >
            <div className="relative w-full md:w-auto flex-1">
              <input
                type="text"
                placeholder="Kurs ara..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full px-6 py-4 pr-12 rounded-full shadow-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary text-lg transition"
              />
              <FiSearch className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl pointer-events-none" />
            </div>
            <button
              type="submit"
              className="px-8 py-4 bg-primary text-white rounded-full text-lg font-bold shadow-lg hover:scale-105 hover:bg-primary-dark transition-transform duration-200"
            >
              Kurslara Göz At
            </button>
          </form>
        </div>
      </section>
      {/* Öne Çıkan Kurslar */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Öne Çıkan Kurslar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
      {/* Kategoriler */}
      <section className="max-w-6xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">Kategoriler</h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <span className="px-6 py-2 bg-gradient-to-r from-blue-100 to-blue-300 text-blue-800 font-semibold rounded-full shadow hover:scale-105 transition">Frontend</span>
          <span className="px-6 py-2 bg-gradient-to-r from-green-100 to-green-300 text-green-800 font-semibold rounded-full shadow hover:scale-105 transition">Backend</span>
          <span className="px-6 py-2 bg-gradient-to-r from-yellow-100 to-yellow-300 text-yellow-800 font-semibold rounded-full shadow hover:scale-105 transition">Mobil</span>
          <span className="px-6 py-2 bg-gradient-to-r from-purple-100 to-purple-300 text-purple-800 font-semibold rounded-full shadow hover:scale-105 transition">Veri Bilimi</span>
        </div>
      </section>
    </div>
  );
};

export default Home;
