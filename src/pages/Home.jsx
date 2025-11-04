import React from "react";
import Header from "../components/Header";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  return (
    <>
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Seção de perfil */}
        <section className="flex flex-col items-center text-center mb-16">
          <img
            src="https://via.placeholder.com/150"
            alt="Minha foto"
            className="w-36 h-36 rounded-full border-4 border-blue-600 mb-6"
          />
          <h2 className="text-3xl font-bold mb-2">Olá, eu sou João Lopes 👋</h2>
          <p className="text-gray-400 max-w-2xl">
            Sou desenvolvedor Front-End apaixonado por criar experiências
            digitais modernas e intuitivas. Aqui estão alguns dos meus projetos
            recentes.
          </p>
        </section>

        {/* Cards de projetos */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((p, i) => (
            <ProjectCard
              key={i}
              title={p.title}
              description={p.description}
              link={p.link}
            />
          ))}
        </section>
      </main>
    </>
  );
}
