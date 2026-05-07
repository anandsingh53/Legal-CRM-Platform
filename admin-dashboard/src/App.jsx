import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import PracticeAreas from "./components/PracticeAreas";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

import AboutPage from "./pages/AboutPage";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";

import ProtectedRoute from "./components/ProtectedRoute";


// HOME PAGE
function HomePage() {

  return (

    <div className="bg-gray-50 min-h-screen">

      <Navbar />

      <Hero />

      <About />
      
      <WhatsAppButton />

      <Education />

      <Experience />

      <PracticeAreas />

      <Testimonials />

      <Contact />

      <Footer />

    </div>

  );
}


export default function App() {

  return (

    <BrowserRouter>

      <Routes>

        {/* PUBLIC ROUTES */}
        <Route
          path="/"
          element={<HomePage />}
        />

        <Route
          path="/about"
          element={<AboutPage />}
        />


        {/* ADMIN LOGIN */}
        <Route
          path="/admin"
          element={<Login />}
        />


        {/* PROTECTED DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>

              <Dashboard />

            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );
}