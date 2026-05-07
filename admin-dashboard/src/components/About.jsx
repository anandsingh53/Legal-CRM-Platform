import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import advocateImg from "../assets/ashish.webp";

export default function About() {

  return (

    <section
      id="about"
      className="py-24 bg-white"
    >

      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <motion.div

            initial={{ opacity: 0, x: -100 }}

            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

            viewport={{ once: true }}

            className="flex justify-center"
          >

            <img
              src={advocateImg}
              alt="Advocate Ashish Singh"
             className="w-full max-w-[400px] md:max-w-[450px] h-[350px] md:h-[570px] object-cover rounded-[27px] shadow-xl"
            />

          </motion.div>


          {/* RIGHT CONTENT */}
          <motion.div

            initial={{ opacity: 0, x: 100 }}

            whileInView={{ opacity: 1, x: 0 }}

            transition={{ duration: 1 }}

            viewport={{ once: true }}

          >

            <p className="text-blue-600 font-semibold uppercase tracking-[4px] mb-4">

              About Advocate

            </p>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-slate-900 leading-tight">

              Professional Legal Services With Trust & Excellence

            </h2>

            <p className="mt-8 text-slate-600 leading-relaxed text-lg md:text-xl">

              Advocate Ashish Singh provides professional legal consultation,
              courtroom representation, and strategic legal guidance
              for clients across multiple practice areas.

            </p>

            <p className="mt-6 text-slate-600 leading-relaxed text-xl">

              With deep legal expertise and client-focused communication,
              every case is handled with professionalism and dedication.

            </p>


            <Link to="/about">

              <button className="mt-10 bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full shadow-lg transition duration-300 hover:scale-105">

                Learn More

              </button>

            </Link>

          </motion.div>

        </div>

      </div>

    </section>

  );
}