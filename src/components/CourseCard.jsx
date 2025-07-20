import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-200 border-t-4 border-blue-400 dark:border-blue-600 flex flex-col overflow-hidden">
      <img
        src={course.image}
        alt={course.title}
        className="h-40 w-full object-cover"
        loading="lazy"
      />
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1 line-clamp-2">{course.title}</h3>
        <div className="text-sm text-gray-500 dark:text-gray-300 mb-2">{course.instructor}</div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-400 font-bold">★ {course.rating}</span>
          <span className="text-xs text-gray-400">({course.students} öğrenci)</span>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">{course.description}</p>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">₺{course.price}</span>
          <a href={`/courses/${course.id}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold hover:bg-blue-700 transition">İncele</a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
