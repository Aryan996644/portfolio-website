import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Goals', href: '#goals' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contributions', href: '#contributions' },
  { name: 'Certification', href: '#testimonials' },
  { name: 'FAQ', href: '#faq' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAdmin(!!token); // true if token exists
  }, []);

  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black to-transparent text-white shadow-md backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tight">Md Kamar Rza Khan</a>

        <nav className="hidden md:flex gap-6">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="hover:text-cyan-400 transition duration-200 text-sm font-medium uppercase tracking-wide"
            >
              {item.name}
            </a>
          ))}
          {isAdmin && (
            <a
              href="/admin/dashboard"
              className="hover:text-yellow-400 transition duration-200 text-sm font-semibold uppercase tracking-wide border border-yellow-500 px-3 py-1 rounded"
            >
              Admin
            </a>
          )}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-black px-6 py-4 space-y-4">
          {navItems.map(item => (
            <a
              key={item.name}
              href={item.href}
              className="block text-white hover:text-cyan-400 font-medium"
              onClick={() => setMobileOpen(false)}
            >
              {item.name}
            </a>
          ))}
          {isAdmin && (
            <a
              href="/admin/dashboard"
              className="block text-yellow-400 font-semibold border border-yellow-500 px-3 py-2 rounded"
              onClick={() => setMobileOpen(false)}
            >
              Admin Dashboard
            </a>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
