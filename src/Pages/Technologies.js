import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    java,
    mysql,
    git,
    github,
    vscode,
    eclipse,
    claude,
    maven,
    linux,
  } = techStackDetails;

  return (
    <main className="container mx-auto max-width pt-10 pb-20">
      {/* TITLE */}
      <section>
        <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold">
          Tech Stack
        </h1>
        <p className="py-2">Technologies I work with</p>
      </section>

      {/* TECH STACK */}
      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 pt-6 max-w-5xl">
        {[
          { img: html, name: "HTML5" },
          { img: css, name: "CSS3" },
          { img: java, name: "Java" },
          { img: mysql, name: "MySQL" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-xl text-center"
          >
            <img src={item.img} className="w-12 mx-auto" alt="" />
            <p className="mt-2 text-sm font-semibold">{item.name}</p>
          </div>
        ))}
      </section>

      {/* TOOLS */}
      <section>
        <h1 className="text-2xl pt-10 md:text-4xl xl:text-5xl font-bold">
          Tools
        </h1>
      </section>

      <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 pt-6 max-w-5xl">
        {[
          { img: vscode, name: "VS Code" },
          { img: git, name: "Git" },
          { img: github, name: "GitHub" },
          { img: eclipse, name: "Eclipse" },
          { img: claude, name: "Claude AI" },
          { img: maven, name: "Maven" },
          { img: linux, name: "Linux" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-4 rounded-xl text-center"
          >
            <img src={item.img} className="w-12 mx-auto" alt="" />
            <p className="mt-2 text-sm font-semibold">{item.name}</p>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Technologies;
