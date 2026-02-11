import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ResumeUploader from './ResumeUploader';
import CertificationForm from './CertificationForm';

const Dashboard = () => {
  const navigate = useNavigate();

  // 🔒 Redirect if not logged in
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/admin');
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/'); // ✅ Go to homepage after logout
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 pt-24 pb-10">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-8 gap-4">
        <h2 className="text-3xl font-bold">Admin Dashboard</h2>
        <button
          onClick={logout}
          className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* ✅ Resume Uploader */}
      <div className="mb-10">
        <ResumeUploader />
      </div>

      {/* ✅ Certification Manager */}
      <div>
        <CertificationForm />
      </div>
    </div>
  );
};

export default Dashboard;
