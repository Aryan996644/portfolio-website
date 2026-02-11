// client/src/pages/admin/ResumeUploader.jsx

import React, { useState } from 'react';
import axios from 'axios';

const ResumeUploader = () => {
  const [file, setFile] = useState(null);
  const [resumeUrl, setResumeUrl] = useState('');

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please select a file");

    const formData = new FormData();
    formData.append('resume', file);

    try {
      const res = await axios.post('http://localhost:5000/resume/upload', formData);
      setResumeUrl(res.data.url);
      alert('✅ Resume uploaded successfully!');
    } catch (err) {
      console.error(err);
      alert('❌ Upload failed');
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center px-6 py-20">
      <div className="bg-[#1e293b] p-8 rounded-lg shadow-lg w-full max-w-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-cyan-400">Admin - Upload Resume</h2>

        <form onSubmit={handleUpload} className="space-y-4">
          <input
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            accept=".pdf"
            className="block w-full p-2 bg-gray-800 rounded text-white"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-md text-white font-medium"
          >
            Upload Resume
          </button>
        </form>

        {resumeUrl && (
          <p className="mt-6 text-center">
            📄 <a href={resumeUrl} target="_blank" rel="noopener noreferrer" className="text-cyan-400 underline">
              View Uploaded Resume
            </a>
          </p>
        )}
      </div>
    </div>
  );
};

export default ResumeUploader;
