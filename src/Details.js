// Profile Image
import profile from "./assets/profile.png";

// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import java from "./assets/techstack/java.png";
import mysql from "./assets/techstack/mysql.png";

// Tools
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import eclipse from "./assets/techstack/eclipse.png";
import claude from "./assets/techstack/claude.jpg";
import maven from "./assets/techstack/maven.png";
import linux from "./assets/techstack/linux.png";

// Project Images
import projectImage1 from "./assets/projects/project1.png";
import projectImage2 from "./assets/projects/project2.png";

// Personal Details
export const personalDetails = {
  name: "Veerapathiran E",
  tagline: "Java Full Stack Developer",
  img: profile,
  about: `Java Developer with well-structured understanding of Core Java and Advanced Java. Familiar with DSA fundamentals and problem-solving, with strong adaptability to learning new technologies.`,
};

// Social Media
export const socialMediaUrl = {
  linkedin: "https://www.linkedin.com/in/veerapathiran352003/",
  github: "https://github.com/VeerapathiranE/",
  resume: "/resume.pdf", // put resume.pdf inside public folder
};

// ✅ WORK DETAILS (IMPORTANT - FIX ERROR)
export const workDetails = [
  {
    Position: "Full Stack Developer Intern",
    Company: "TAP Academy",
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "2025 – Present",
  },
  {
    Position: "Penetration Testing Intern",
    Company: "Cyber Forensics Security Solutions",
    Location: "Remote",
    Type: "Internship",
    Duration: "Aug 2024 – Sep 2024",
  },
];

// ✅ EDUCATION DETAILS (IMPORTANT - FIX ERROR)
export const eduDetails = [
  {
    Position: "B.Tech IT",
    Company: "Velammal Engineering College",
    Location: "Chennai",
    Type: "Full Time",
    Duration: "2022 – 2025",
  },
];

// Tech Stack
export const techStackDetails = {
  html,
  css,
  java,
  mysql,
  vscode,
  git,
  github,
  eclipse,
  claude,
  maven,
  linux,
};

// Projects
export const projectDetails = [
  {
    title: "Optimized Job Search Engine",
    image: projectImage1,
    description: "Built using Java with efficient searching.",
    techstack: "Java",
    githubLink: "https://github.com/VeerapathiranE/optimized-job-search-engine",
  },
  {
    title: "Portfolio Website",
    image: projectImage2,
    description: "Responsive portfolio.",
    techstack: "HTML, CSS",
    githubLink: "https://github.com/VeerapathiranE/",
  },
];

// Contact
export const contactDetails = {
  email: "veerapathiran352003@gmail.com",
  phone: "+91 6374754473",
};
