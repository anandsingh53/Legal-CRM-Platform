import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {

  const [isOpen, setIsOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 50) {

        setScrolled(true);

      } else {

        setScrolled(false);

      }

    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);

  }, []);


  return (

    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "bg-transparent"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <a
            href="/"
            className="text-2xl md:text-3xl font-bold text-white tracking-wide"
          >

            Ashish
            <span className="text-blue-500">

              Singh

            </span>

          </a>


          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-10">

            <a
              href="#about"
              className="text-slate-200 hover:text-blue-400 transition duration-300"
            >

              About

            </a>


            <a
              href="#services"
              className="text-slate-200 hover:text-blue-400 transition duration-300"
            >

              Services

            </a>


            <a
              href="#contact"
              className="text-slate-200 hover:text-blue-400 transition duration-300"
            >

              Contact

            </a>


            {/* CTA BUTTON */}
            <a
              href="#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium shadow-lg hover:scale-105 transition duration-300"
            >

              Consultation

            </a>

          </div>


          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white"
          >

            {isOpen ? <X size={32} /> : <Menu size={32} />}

          </button>

        </div>

      </div>


      {/* MOBILE MENU */}
      <div
        className={`md:hidden absolute top-20 left-0 w-full bg-black/95 backdrop-blur-xl border-t border-white/10 transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-screen py-8" : "max-h-0"
        }`}
      >

        <div className="flex flex-col items-center gap-8">

          <a
            href="#about"
            onClick={() => setIsOpen(false)}
            className="text-white text-lg hover:text-blue-400 transition duration-300"
          >

            About

          </a>


          <a
            href="#services"
            onClick={() => setIsOpen(false)}
            className="text-white text-lg hover:text-blue-400 transition duration-300"
          >

            Services

          </a>


          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-white text-lg hover:text-blue-400 transition duration-300"
          >

            Contact

          </a>


          {/* MOBILE CTA */}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium shadow-lg"
          >

            Get Consultation

          </a>

        </div>

      </div>

    </nav>

  );

}