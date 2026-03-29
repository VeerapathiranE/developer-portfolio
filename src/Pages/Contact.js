import React from "react";
import { contactDetails, socialMediaUrl } from "../Details";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Contact() {
  const { email, phone } = contactDetails;
  const { linkedin, github, resume } = socialMediaUrl;

  return (
    <main className="container mx-auto max-width section text-center">
      {/* HEADING */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold">
        Open to opportunities, collaborations, and meaningful projects.
      </h1>

      {/* EMAIL */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl text-gradient font-semibold pt-6">
        <a href={`mailto:${email}`}>{email}</a>
      </h3>

      {/* OR TEXT */}
      <p className="text-lg mt-2">or</p>

      {/* PHONE */}
      <h3 className="text-2xl md:text-3xl lg:text-4xl text-gradient font-semibold pt-2">
        <a href={`tel:${phone}`}>{phone}</a>
      </h3>

      {/* SOCIAL ICONS */}
      <div className="flex justify-center gap-8 mt-8 text-3xl">
        <a href={linkedin} target="_blank" rel="noreferrer">
          <FaLinkedin className="hover:scale-110 hover:text-blue-500 transition duration-300" />
        </a>

        <a href={github} target="_blank" rel="noreferrer">
          <FaGithub className="hover:scale-110 hover:text-gray-700 transition duration-300" />
        </a>
      </div>

      {/* RESUME BUTTON */}
      <div className="mt-8">
        <a
          href={resume}
          download
          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-lg shadow-md hover:scale-105 transition duration-300"
        >
          Download Resume
        </a>
      </div>
    </main>
  );
}

export default Contact;
