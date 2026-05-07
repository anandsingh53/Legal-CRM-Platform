import { motion } from "framer-motion";
export default function Hero() {
    return (

        <section className="bg-gradient-to-r from-blue-950 to-blue-800 text-white py-28 md:py-40 overflow-hidden">

            <div className="container mx-auto px-6 text-center">

                {/* Heading */}
                <motion.h1

                    initial={{ opacity: 0, y: -50 }}

                    animate={{ opacity: 1, y: 0 }}

                    transition={{ duration: 1 }}
                className="mt-6 text-lg sm:text-xl md:text-2xl font-light opacity-90 max-w-3xl mx-auto leading-relaxed"
                >

                    Advocate Ashish Singh

                </motion.h1>


                {/* Subtitle */}
                <motion.p

                    initial={{ opacity: 0, y: 40 }}

                    animate={{ opacity: 1, y: 0 }}

                    transition={{ duration: 1, delay: 0.3 }}

                    className="mt-4 text-xl md:text-2xl font-light opacity-90"
                >

                    A Trusted High Court Advocate based in India

                </motion.p>


                {/* Button */}
                <motion.a

                    initial={{ opacity: 0, scale: 0.8 }}

                    animate={{ opacity: 1, scale: 1 }}

                    transition={{ duration: 0.8, delay: 0.6 }}

                    href="#contact"

                    className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300"
                >

                    Get a Consultation

                </motion.a>

            </div>

        </section>

    );
}