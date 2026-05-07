export default function Testimonials() {

  const reviews = [
    {
      name: "Rahul Sharma",
      review:
        "Advocate Ashish Singh handled my case with professionalism and clarity. Highly recommended."
    },

    {
      name: "Priya Patel",
      review:
        "Excellent legal consultation and responsive communication throughout the process."
    },

    {
      name: "Amit Verma",
      review:
        "Very knowledgeable advocate with strong courtroom representation."
    }
  ];

  return (

    <section
      id="testimonials"
      className="py-20 bg-slate-950 text-white"
    >

      <div className="container mx-auto px-6 text-center">

        <p className="text-blue-400 uppercase tracking-widest font-semibold">
          Testimonials
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mt-3">

          What Clients Say

        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {reviews.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 p-8 rounded-3xl shadow-lg border border-slate-800"
            >

              <p className="text-slate-300 leading-relaxed">

                "{item.review}"

              </p>

              <h3 className="mt-6 text-xl font-bold text-blue-400">

                {item.name}

              </h3>

            </div>

          ))}

        </div>

      </div>

    </section>

  );
}