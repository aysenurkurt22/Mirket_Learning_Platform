import React, { useState } from "react";
import Navbar from "../components/Navbar";

const InstructorPanel = () => {
  const [courses, setCourses] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Frontend");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [editId, setEditId] = useState(null);

  // Kurs ekle veya güncelle
  const handleAddOrUpdateCourse = (e) => {
    e.preventDefault();
    if (editId) {
      setCourses((prev) =>
        prev.map((course) =>
          course.id === editId
            ? { ...course, title, price: Number(price), category, image, description }
            : course
        )
      );
      setEditId(null);
    } else {
      const newCourse = {
        id: Date.now(),
        title,
        instructor: "Siz",
        price: Number(price),
        category,
        image,
        description,
      };
      setCourses((prev) => [...prev, newCourse]);
    }
    setTitle("");
    setPrice("");
    setCategory("Frontend");
    setImage("");
    setDescription("");
  };

  // Kursu sil
  const handleDelete = (id) => {
    setCourses((prev) => prev.filter((course) => course.id !== id));
    if (editId === id) {
      setEditId(null);
      setTitle("");
      setPrice("");
      setCategory("Frontend");
      setImage("");
      setDescription("");
    }
  };

  // Kursu düzenle
  const handleEdit = (course) => {
    setEditId(course.id);
    setTitle(course.title);
    setPrice(course.price.toString());
    setCategory(course.category);
    setImage(course.image || "");
    setDescription(course.description || "");
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Eğitmen Paneli</h1>
        <form onSubmit={handleAddOrUpdateCourse} className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-8 flex flex-col gap-4">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Kurs Başlığı"
              value={title}
              onChange={e => setTitle(e.target.value)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
              required
            />
            <input
              type="number"
              placeholder="Fiyat"
              value={price}
              onChange={e => setPrice(e.target.value)}
              className="w-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
              required
            />
            <select
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="w-40 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
            >
              <option>Frontend</option>
              <option>Backend</option>
              <option>Mobil</option>
            </select>
          </div>
          <input
            type="text"
            placeholder="Görsel (image URL)"
            value={image}
            onChange={e => setImage(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
          />
          <textarea
            placeholder="Açıklama"
            value={description}
            onChange={e => setDescription(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-900 dark:text-white"
            rows={3}
          />
          <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition">
            {editId ? "Kursu Güncelle" : "Kurs Ekle"}
          </button>
        </form>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Eklediğiniz Kurslar</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 flex flex-col">
              {course.image && (
                <img src={course.image} alt={course.title} className="h-32 w-full object-cover rounded mb-2" />
              )}
              <div className="font-semibold text-lg mb-1">{course.title}</div>
              <div className="text-sm text-gray-500 mb-1">{course.category}</div>
              <div className="text-blue-600 dark:text-blue-400 font-bold mb-1">₺{course.price}</div>
              {course.description && (
                <div className="text-gray-600 dark:text-gray-300 text-sm mb-2">{course.description}</div>
              )}
              <div className="flex gap-2 mt-auto">
                <button onClick={() => handleEdit(course)} className="px-3 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 transition">Düzenle</button>
                <button onClick={() => handleDelete(course.id)} className="px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition">Sil</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstructorPanel;

