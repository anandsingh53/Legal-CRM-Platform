import {
  FaBalanceScale,
  FaGavel,
  FaUserShield
} from "react-icons/fa";

export default function PracticeAreas() {

  const services = [
    {
      icon: <FaBalanceScale size={40} />,
      title: "Civil Litigation",
      desc: "Expert handling of civil disputes and litigation matters."
    },

    {
      icon: <FaGavel size={40} />,
      title: "Criminal Law",
      desc: "Professional legal defense and criminal case representation."
    },

    {
      icon: <FaUserShield size={40} />,
      title: "Corporate Law",
      desc: "Strategic legal consultation for businesses and organizations."
    }
  ];

  return (

    <section
      id="practice-areas"
      className="py-20 bg-gray-100"
    >

      <div className="container mx-auto px-6 text-center">

        <p className="text-blue-600 uppercase font-semibold tracking-widest">
          Practice Areas
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3">

          Legal Expertise You Can Trust

        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-2"
            >

              <div className="text-blue-600 mb-6 flex justify-center">

                {service.icon}

              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">

                {service.title}

              </h3>

              <p className="text-gray-600 leading-relaxed">

                {service.desc}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}