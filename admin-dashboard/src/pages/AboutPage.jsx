import advocateImg from "../assets/ashish.webp";
export default function AboutPage() {

  return (

    <div className="bg-white min-h-screen">

      {/* HERO */}
      <section className="bg-slate-950 text-white py-24">

        <div className="max-w-6xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-blue-400 font-semibold mb-4">
            About Advocate
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">

            Advocate Ashish Singh

          </h1>

          <p className="mt-8 text-xl text-slate-300 leading-relaxed max-w-4xl mx-auto">

            Dedicated High Court Advocate providing strategic legal
            solutions, courtroom representation, and trusted legal consultation.

          </p>

        </div>

      </section>


      {/* CONTENT */}
      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div>

            <img
            src={advocateImg}
            alt="Advocate Ashish Singh"
            className="rounded-[30px] shadow-2xl w-full h-full object-cover"
          />

          </div>

          {/* TEXT */}
          <div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">

              Trusted Legal Representation With Modern Professionalism

            </h2>

            <p className="mt-8 text-slate-600 text-lg leading-relaxed">

              Advocate Ashish Singh has extensive experience handling
              civil, criminal, constitutional, and corporate law matters.

            </p>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">

              With a client-focused approach and strong courtroom expertise,
              every legal matter is handled with dedication, confidentiality,
              and professionalism.

            </p>

            <p className="mt-6 text-slate-600 text-lg leading-relaxed">

              The mission is to provide reliable legal guidance and ensure
              effective legal representation for every client.

            </p>

          </div>

        </div>

      </section>

    </div>

  );
}