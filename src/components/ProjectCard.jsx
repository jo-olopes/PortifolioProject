import React from "react";

export default function ProjectCard({ title, description, link }) {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-blue-500/30 transition">
      <h3 className="text-xl font-semibold mb-2 text-blue-400">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        Ver no GitHub →
      </a>
    </div>
  );
}
