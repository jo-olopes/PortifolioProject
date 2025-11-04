import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-8 py-4 bg-gray-800 shadow-md">
      <h1 className="text-2xl font-bold text-blue-400">Meu Portfólio</h1>
      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition">
        Login
      </button>
    </header>
  );
}
