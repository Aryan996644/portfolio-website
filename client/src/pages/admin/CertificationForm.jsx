import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CertificationForm = () => {
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [certifications, setCertifications] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const token = localStorage.getItem('token'); // 🔐 Fetch token

  // 🟡 Fetch all certifications
  const fetchCertifications = async () => {
    try {
      const res = await axios.get('http://localhost:5000/certifications');
      setCertifications(res.data);
    } catch (err) {
      console.error('Failed to fetch certifications:', err);
    }
  };

  useEffect(() => {
    fetchCertifications();
  }, []);

  // ✅ Submit (Add or Update)
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !link) return alert('Please fill all fields');

    try {
      if (editingId) {
        // ✏️ Update certification
        await axios.put(
          `http://localhost:5000/certifications/${editingId}`,
          { title, link },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      } else {
        // ➕ Add new certification
        await axios.post(
          'http://localhost:5000/certifications',
          { title, link },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
      }

      setTitle('');
      setLink('');
      setEditingId(null);
      fetchCertifications();
    } catch (err) {
      console.error(err);
      alert('Something went wrong while submitting.');
    }
  };

  // 🧹 Set form to edit mode
  const handleEdit = (cert) => {
    setTitle(cert.title);
    setLink(cert.link);
    setEditingId(cert._id);
  };

  // ❌ Delete certification
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this certification?')) {
      try {
        await axios.delete(`http://localhost:5000/certifications/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        fetchCertifications();
      } catch (err) {
        console.error(err);
        alert('Failed to delete certification.');
      }
    }
  };

  return (
    <div className="bg-gray-900 text-white p-6 rounded-md shadow-md mt-6">
      <h3 className="text-2xl font-bold mb-4">
        {editingId ? 'Edit Certification' : 'Add Certification'}
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Certification Title"
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />
        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="Certification Link"
          className="w-full p-2 rounded bg-gray-800 text-white"
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 px-4 py-2 rounded hover:bg-indigo-500"
        >
          {editingId ? 'Save Changes' : 'Add Certification'}
        </button>
      </form>

      {/* Certification List */}
      <div className="mt-8">
        <h4 className="text-xl font-semibold mb-2">Your Certifications</h4>
        <ul className="space-y-3">
          {certifications.map((cert) => (
            <li key={cert._id} className="bg-gray-800 p-3 rounded flex justify-between items-center">
              <div>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-400 underline"
                >
                  {cert.title}
                </a>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(cert)}
                  className="text-yellow-400 hover:underline"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(cert._id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CertificationForm;
