import React from "react";

function Work({ position, company, location, type, duration }) {
  return (
    <article className="pt-6 pb-5 border-b border-gray-300">
      {/* Top Section */}
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h1 className="text-base md:text-lg font-semibold">{position}</h1>

        <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full">
          {type}
        </span>
      </div>

      {/* Bottom Section */}
      <div className="flex justify-between items-center mt-2 flex-wrap gap-2">
        <div className="text-sm text-gray-600">
          <p>{company}</p>
          <p>{location}</p>
        </div>

        <p className="text-xs text-gray-500">{duration}</p>
      </div>
    </article>
  );
}

export default Work;
