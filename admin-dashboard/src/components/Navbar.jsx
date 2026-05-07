import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (

    <header className="bg-white shadow-md sticky top-0 z-50">

      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <h1 className="text-2xl md:text-4xl font-bold text-slate-900">

          Ashish <span className="text-blue-600">Singh</span>

        </h1>


        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-10 text-lg">

          <a href="#about" className="hover:text-blue-600 transition">
            About
          </a>

          <a href="#practice-areas" className="hover:text-blue-600 transition">
            Practice Areas
          </a>

          <a href="#experience" className="hover:text-blue-600 transition">
            Experience
          </a>

          <a href="#testimonials" className="hover:text-blue-600 transition">
            Testimonials
          </a>

          <a href="#contact" className="hover:text-blue-600 transition">
            Contact
          </a>

        </div>


        {/* MOBILE BUTTON */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >

          {menuOpen ? <X size={32} /> : <Menu size={32} />}

        </button>

      </nav>


      {/* MOBILE MENU */}
      {menuOpen && (

        <div className="md:hidden bg-white px-6 pb-6 shadow-lg">

          <div className="flex flex-col gap-5 text-lg">

            <a href="#about">About</a>

            <a href="#practice-areas">Practice Areas</a>

            <a href="#experience">Experience</a>

            <a href="#testimonials">Testimonials</a>

            <a href="#contact">Contact</a>

          </div>

        </div>

      )}

    </header>

  );
}