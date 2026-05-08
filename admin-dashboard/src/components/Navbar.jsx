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
          : "bg-black/30 backdrop-blur-md"
      }`}
    >

      <div className="max-w-7xl mx-auto px-6 md:px-10">

        <div className="flex items-center justify-between h-20">

          {/* LOGO */}
          <a
            href="/"
            className="relative group"
          >

            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">

              <span className="text-white">

                Ashish

              </span>

              {" "}

              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-600 bg-clip-text text-transparent">

                Singh

              </span>

            </h1>

            {/* UNDERLINE */}
            <div className="h-[2px] w-0 bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500 group-hover:w-full mt-1"></div>

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

              Practice Areas

            </a>


            <a
              href="#experience"
              className="text-slate-200 hover:text-blue-400 transition duration-300"
            >

              Experience

            </a>


            <a
              href="#testimonials"
              className="text-slate-200 hover:text-blue-400 transition duration-300"
            >

              Testimonials

            </a>


            <a
              href="#contact"
              className="text-slate-200 hover:text-blue-400 transition duration-300"
            >

              Contact

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

            Practice Areas

          </a>


          <a
            href="#experience"
            onClick={() => setIsOpen(false)}
            className="text-white text-lg hover:text-blue-400 transition duration-300"
          >

            Experience

          </a>


          <a
            href="#testimonials"
            onClick={() => setIsOpen(false)}
            className="text-white text-lg hover:text-blue-400 transition duration-300"
          >

            Testimonials

          </a>


          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="text-white text-lg hover:text-blue-400 transition duration-300"
          >

            Contact

          </a>

        </div>

      </div>

    </nav>

  );

}