import React, { useState, useEffect } from 'react';
import DrawingCanvas from '../components/DrawingCanvas';
import axios from 'axios';

const Dashboard = () => {
  const [userDrawings, setUserDrawings] = useState([]);
  const [galleryDrawings, setGalleryDrawings] = useState([]);

  useEffect(() => {
    const fetchUserDrawings = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(
          `${process.env.REACT_APP_DRAWING_APP_BACKEND_URL}/api/drawings/my-drawings`,
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setUserDrawings(response.data);
      } catch (error) {
        console.error('Error fetching user drawings:', error);
      }
    };

    const fetchGalleryDrawings = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_DRAWING_APP_BACKEND_URL}/api/drawings`
        );
        setGalleryDrawings(response.data);
      } catch (error) {
        console.error('Error fetching gallery drawings:', error);
      }
    };

    fetchUserDrawings();
    fetchGalleryDrawings();
  }, []);

  const handleSaveDrawing = async (image) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${process.env.REACT_APP_DRAWING_APP_BACKEND_URL}/api/drawings`,
        { title: 'New Drawing', image },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUserDrawings([...userDrawings, response.data]);
    } catch (error) {
      console.error('Error saving drawing:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* User's Drawings */}
        <div>
          <h2 className="text-2xl font-bold mb-4">My Drawings</h2>
          <div className="bg-white p-4 rounded shadow-md">
            {userDrawings.map((drawing, index) => (
              <img key={index} src={drawing.image} alt={drawing.title} className="mb-4" />
            ))}
          </div>
        </div>
        {/* Drawing Canvas */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Create a New Drawing</h2>
          <div className="bg-white p-4 rounded shadow-md">
            <DrawingCanvas onSave={handleSaveDrawing} />
          </div>
        </div>
        {/* Gallery of Other People's Drawings */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Gallery</h2>
          <div className="bg-white p-4 rounded shadow-md">
            {galleryDrawings.map((drawing, index) => (
              <img key={index} src={drawing.image} alt={drawing.title} className="mb-4" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;