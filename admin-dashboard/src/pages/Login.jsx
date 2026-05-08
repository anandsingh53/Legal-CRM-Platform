import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const navigate = useNavigate();


  const handleLogin = (e) => {

    e.preventDefault();

    // SIMPLE ADMIN AUTH
    if (
      email === "advocateashishsingh00@gmail.com" &&
      password === "1234"
    ) {

      localStorage.setItem(
        "adminToken",
        "loggedin"
      );

      navigate("/dashboard");

    } else {

      alert("Invalid Credentials ");

    }

  };


  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 flex items-center justify-center px-4">

      <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-10 w-full max-w-md shadow-2xl">

        {/* TITLE */}
        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-white">

            Legal CRM

          </h1>

          <p className="text-slate-300 mt-3">

            Admin Login Panel

          </p>

        </div>


        {/* FORM */}
        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >

          {/* EMAIL */}
          <div>

            <label className="block text-white mb-2">

              Email

            </label>

            <input
              type="email"
              placeholder="admin@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 rounded-2xl bg-white/20 text-white placeholder-slate-300 outline-none border border-white/20 focus:border-blue-400"
            />

          </div>


          {/* PASSWORD */}
          <div>

            <label className="block text-white mb-2">

              Password

            </label>

            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 rounded-2xl bg-white/20 text-white placeholder-slate-300 outline-none border border-white/20 focus:border-blue-400"
            />

          </div>


          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 rounded-2xl font-semibold transition duration-300 shadow-lg"
          >

            Login

          </button>

        </form>

      </div>

    </div>

  );
}