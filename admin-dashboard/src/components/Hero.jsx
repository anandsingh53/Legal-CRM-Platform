import { motion } from "framer-motion";
import heroBg from "../assets/HighCourt1.jpg";

export default function Hero() {

  return (

    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-24">

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110"
        style={{
          backgroundImage: `url(${heroBg})`,
        }}
      ></div>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* GRADIENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-slate-950"></div>

      {/* CONTENT */}
      <div className="relative z-10 container mx-auto px-6 md:px-12 text-center">

        {/* SMALL TAG */}
        <motion.div

          initial={{ opacity: 0, y: -20 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

          className="inline-block px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-slate-200 text-sm md:text-base mb-6"
        >

          High Court Legal Expertise

        </motion.div>


        {/* MAIN HEADING */}
        <motion.h1

          initial={{ opacity: 0, y: -50 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1 }}

          className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight tracking-wide"
        >

          Advocate <br className="sm:hidden" /> Ashish Singh

        </motion.h1>


        {/* SUBTITLE */}
        <motion.p

          initial={{ opacity: 0, y: 40 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1, delay: 0.3 }}

          className="mt-6 text-base sm:text-lg md:text-2xl text-slate-300 max-w-2xl mx-auto leading-relaxed px-2"
        >

          Trusted High Court Advocate Delivering Strategic Legal
          Representation, Professional Consultation, and Reliable
          Legal Solutions Across India.

        </motion.p>


        {/* BUTTONS */}
        <motion.div

          initial={{ opacity: 0, scale: 0.8 }}

          animate={{ opacity: 1, scale: 1 }}

          transition={{ duration: 0.8, delay: 0.6 }}

          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5"
        >

          {/* CONSULT BUTTON */}
          <a

            href="#contact"

            className="w-full sm:w-auto text-center px-10 py-4 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-semibold shadow-2xl hover:scale-105 hover:shadow-blue-500/30 transition-all duration-300"
          >

            Get a Consultation

          </a>


          {/* SECOND BUTTON */}
          <a

            href="#about"

            className="w-full sm:w-auto text-center px-10 py-4 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all duration-300"
          >

            Learn More

          </a>

        </motion.div>


        {/* STATS */}
        <motion.div

          initial={{ opacity: 0, y: 30 }}

          animate={{ opacity: 1, y: 0 }}

          transition={{ duration: 1, delay: 0.9 }}

          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-4xl mx-auto"
        >

          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-white">

              500+

            </h2>

            <p className="text-slate-300 mt-2">

              Legal Consultations

            </p>

          </div>


          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-white">

              10+

            </h2>

            <p className="text-slate-300 mt-2">

              Years Experience

            </p>

          </div>


          <div>

            <h2 className="text-3xl md:text-4xl font-bold text-white">

              95%

            </h2>

            <p className="text-slate-300 mt-2">

              Client Satisfaction

            </p>

          </div>

        </motion.div>

      </div>

    </section>

  );

}