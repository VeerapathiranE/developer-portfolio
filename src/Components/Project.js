import React from "react";

function Project({
  title,
  image,
  description,
  techstack,
  previewLink,
  githubLink,
}) {
  return (
    <article className="rounded-xl mt-10 overflow-hidden shadow-xl">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />

      <div className="p-4">
        <h1 className="font-semibold text-lg">{title}</h1>

        <p className="pt-2 text-sm">{description}</p>

        <h3 className="pt-3 font-medium">
          Tech Stack : <span className="font-light">{techstack}</span>
        </h3>

        <div className="flex gap-4 mt-4">
          <a
            href={previewLink}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            Live Preview
          </a>

          <a
            href={githubLink}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 underline"
          >
            View Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;
