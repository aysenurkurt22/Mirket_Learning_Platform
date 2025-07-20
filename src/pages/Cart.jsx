import React from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Sepetim</h1>
        {cart.length === 0 ? (
          <div className="text-gray-400">Sepetiniz boş.</div>
        ) : (
          <>
            <ul>
              {cart.map((course) => (
                <li key={course.id} className="flex justify-between items-center mb-4">
                  <span>{course.title}</span>
                  <button onClick={() => removeFromCart(course.id)} className="text-red-500">Kaldır</button>
                </li>
              ))}
            </ul>
            <button onClick={clearCart} className="mt-4 px-4 py-2 bg-red-600 text-white rounded">Sepeti Temizle</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;

