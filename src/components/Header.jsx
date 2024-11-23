import React from 'react';
import { Clock, Code, Settings, Plus } from 'lucide-react';

const ProblemAdminHeader = () => {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-4 py-6">
        {/* Top section */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold">Problem Admin Dashboard</h1>
            <p className="text-blue-100 mt-2">Create and manage coding challenges</p>
          </div>
          <button className="flex items-center gap-2 bg-white text-blue-700 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors">
            <Plus size={20} />
            <span className="font-semibold">New Problem</span>
          </button>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Code className="text-blue-200" size={24} />
              <div>
                <h3 className="text-lg font-semibold">Total Problems</h3>
                <p className="text-2xl font-bold">2,456</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Clock className="text-blue-200" size={24} />
              <div>
                <h3 className="text-lg font-semibold">Pending Review</h3>
                <p className="text-2xl font-bold">18</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <Settings className="text-blue-200" size={24} />
              <div>
                <h3 className="text-lg font-semibold">Draft Problems</h3>
                <p className="text-2xl font-bold">7</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation tabs */}
        <div className="flex gap-6 mt-8">
          <button className="text-white border-b-2 border-white pb-2 font-medium">All Problems</button>
          <button className="text-blue-200 hover:text-white pb-2 font-medium">Drafts</button>
          <button className="text-blue-200 hover:text-white pb-2 font-medium">Under Review</button>
          <button className="text-blue-200 hover:text-white pb-2 font-medium">Published</button>
        </div>
      </div>
    </div>
  );
};

export default ProblemAdminHeader;