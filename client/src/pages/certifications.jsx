import React from "react";
import certifications from "../data/certifications";

const Certifications = () => {
  return (
    <section className="min-h-screen bg-[#0f172a] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-block px-4 py-1 mb-4 rounded-full border border-indigo-500 bg-purple-100/10 text-indigo-400 text-sm font-medium tracking-widest uppercase">
          My Certifications
        </div>
        <h2 className="text-4xl font-bold mb-10">Verified Achievements</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-5 rounded-xl border border-white/10 hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-indigo-400">{cert.title}</h3>
              <p className="text-sm text-gray-400">
                {cert.platform} • Issued {cert.issued}
              </p>
              <a
                href={cert.credential}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 text-sm text-indigo-400 hover:underline"
              >
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
