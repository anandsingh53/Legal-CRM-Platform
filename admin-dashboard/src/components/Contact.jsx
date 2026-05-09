import { useState } from "react";
import axios from "axios";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const res = await axios.post(
        "https://legal-crm-platform.onrender.com/api/contact",
        formData
      );

      alert(res.data.message);

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

    } catch (err) {

      console.log(err);

      alert("Error sending message ");

    }

  };

  return (

    <section
      id="contact"
      className="py-24 bg-[#f7f7f7]"
    >

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-start">

        {/* LEFT SIDE */}
        <div>

          <p className="uppercase tracking-[9px] text-blue-600 font-semibold mb-4">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">

            Contact Ashish Singh

          </h2>

          <p className="mt-6 text-slate-600 text-lg md:text-xl leading-relaxed">

            For legal inquiries or to schedule a confidential consultation,
            please fill out the form or contact directly.

          </p>

          {/* PHONE */}
          <div className="flex items-center gap-4 mt-10">

            <div className="bg-blue-600 text-white p-4 rounded-full">

              <FaPhoneAlt />

            </div>

            <p className="text-2xl text-slate-700">
              +91-9695444200
            </p>

          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-4 mt-8">

            <div className="bg-blue-600 text-white p-4 rounded-full">

              <FaEnvelope />

            </div>

            <p className="text-2xl text-slate-700 break-all">
              Ashishsngh698@gmail.com
            </p>

          </div>

        </div>


        {/* RIGHT SIDE FORM */}
        <div className="bg-white shadow-xl rounded-[30px] p-6 max-w-[600px] w-full">

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* NAME */}
            <div>

              <label className="block text-lg font-semibold text-slate-00 mb-3">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                required
              />

            </div>

            {/* EMAIL */}
            <div>

              <label className="block text-lg font-semibold text-slate-800 mb-3">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                required
              />

            </div>

            {/* MOBILE */}
            <div>

              <label className="block text-lg font-semibold text-slate-800 mb-3">
                Mobile Number
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="+91 9876543210"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-2 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                required
              />

            </div>

            {/* MESSAGE */}
            <div>

              <label className="block text-lg font-semibold text-slate-800 mb-3">
                Message
              </label>

              <textarea
                name="message"
                rows="6"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 text-lg"
                required
              ></textarea>

            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xl font-semibold py-3 rounded-full transition duration-300 shadow-lg"
            >

              Send Message

            </button>

          </form>

        </div>

      </div>

    </section>

  );
}