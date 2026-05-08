import { FaBriefcase } from "react-icons/fa";

export default function Experience() {

  const experienceData = [
    {
      role: "High Court Advocate",
      company: "Allahabad High Court",
      year: "2018 - Present",
      desc: "Handling civil, criminal, and constitutional law matters with professional courtroom representation."
    },

    {
      role: "Legal Consultant",
      company: "Private Legal Firm",
      year: "2016 - 2018",
      desc: "Provided strategic legal consultation and corporate law advisory services."
    }
  ];

  return (

    <section className="py-24 bg-slate-950 text-white">

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <p className="uppercase tracking-[4px] text-blue-400 font-semibold mb-4">
            Experience
          </p>

          <h2 className="text-5xl font-bold">

            Professional Experience

          </h2>

        </div>

        {/* Timeline */}
        <div className="mt-20 space-y-10">

          {experienceData.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-[30px] p-10 shadow-xl"
            >

              <div className="flex items-center gap-5">

                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl">

                  <FaBriefcase />

                </div>

                <div>

                  <h3 className="text-3xl font-bold">

                    {item.role}

                  </h3>

                  <p className="text-blue-400 text-lg mt-1">

                    {item.company}

                  </p>

                </div>

              </div>

              <p className="text-slate-400 mt-4">

                {item.year}

              </p>

              <p className="text-slate-300 leading-relaxed text-lg mt-5">

                {item.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}