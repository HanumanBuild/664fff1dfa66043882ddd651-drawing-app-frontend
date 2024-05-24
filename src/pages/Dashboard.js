import React from 'react';

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* User's Drawings */}
        <div>
          <h2 className="text-2xl font-bold mb-4">My Drawings</h2>
          <div className="bg-white p-4 rounded shadow-md">
            {/* Render user's drawings here */}
          </div>
        </div>
        {/* Gallery of Other People's Drawings */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Gallery</h2>
          <div className="bg-white p-4 rounded shadow-md">
            {/* Render gallery of drawings here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
