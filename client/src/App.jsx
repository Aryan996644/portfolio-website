import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import GradientCursor from './components/GradientCursor';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import PrivateRoute from './components/PrivateRoute'; // ✅ NEW

// 🔥 Main Portfolio Pages
import Hero from './pages/Home';
import About from './pages/About';
import Goals from './pages/Goals';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contributions from './pages/Contributions';
import Testimonials from './pages/certifications';
import FAQ from './pages/FAQ';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

// 🛡️ Admin Pages
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import ResumeUploader from './pages/admin/ResumeUploader';

const App = () => {
  return (
    <>
      <GradientCursor />
      <ScrollProgress />
      <Navbar />

      <Routes>
        {/* 🌐 Main Portfolio Route */}
        <Route
          path="/"
          element={
            <>
              <main className="scroll-smooth">
                <section id="home"><Hero /></section>
                <section id="about"><About /></section>
                <section id="goals"><Goals /></section>
                <section id="skills"><Skills /></section>
                <section id="projects"><Projects /></section>
                <section id="contributions"><Contributions /></section>
                <section id="testimonials"><Testimonials /></section>
                <section id="faq"><FAQ /></section>
                <section id="resume"><Resume /></section>
                <section id="contact"><Contact /></section>
              </main>
              <Footer />
            </>
          }
        />

        {/* 🔐 Admin Routes */}
        <Route path="/admin" element={<Login />} />
        <Route
          path="/admin/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/upload"
          element={
            <PrivateRoute>
              <ResumeUploader />
            </PrivateRoute>
          }
        />
      </Routes>
    </>
  );
};

export default App;
