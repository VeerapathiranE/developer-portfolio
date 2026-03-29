import { useState } from "react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
      <div className="flex justify-between items-center px-6 py-4">
        {/* LEFT - Logo / Name */}
        <h1 className="text-xl font-bold">Discipline Wins</h1>

        {/* RIGHT - Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-medium">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#technologies">Technologies</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        {/* RIGHT - Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)} className="text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-6 pb-4">
          <ul className="flex flex-col gap-4">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#technologies">Technologies</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
