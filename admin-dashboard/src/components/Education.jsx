import { FaGraduationCap } from "react-icons/fa";

export default function Education() {

  const educationData = [
    {
      degree: "Bachelor of Art (BA)",
      institute: "University of Allahabad",
      year: "2010 - 2013",
      desc:" Developed a strong foundation in political science, public administration, and legal studies, enhancing critical thinking, research, and communication skills essential for legal practice."
    },

    {
      degree: "Bachelor of Laws (LLB)",
      institute: "University of Allahabad",
      year: "2013 - 2016",
      desc:  "Specialized in Constitutional Law, Criminal Law, Civil Litigation, and High Court legal procedures with practical exposure to legal research and case drafting."
    }
  ];

  return (

    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[4px] text-blue-600 font-semibold mb-4">
            Education
          </p>

          <h2 className="text-5xl font-bold text-slate-900">

            Academic Background

          </h2>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">

          {educationData.map((item, index) => (

            <div
              key={index}
              className="bg-gray-100 p-10 rounded-[30px] shadow-lg hover:shadow-2xl transition duration-300"
            >

              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl">

                <FaGraduationCap />

              </div>

              <h3 className="text-3xl font-bold text-slate-900 mt-6">

                {item.degree}

              </h3>

              <p className="text-blue-600 text-lg mt-2 font-semibold">

                {item.institute}

              </p>

              <p className="text-slate-500 mt-2">

                {item.year}

              </p>

              <p className="text-slate-600 leading-relaxed mt-5 text-lg">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}