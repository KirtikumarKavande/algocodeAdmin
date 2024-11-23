import React from 'react';
import { Plus, Users, Code, CheckCircle2, Timer, Activity, TrendingUp } from 'lucide-react';

const SimpleBarChart = ({ data }) => {
  const maxValue = Math.max(...data.map(d => d.value));
  
  return (
    <div className="flex items-end h-48 gap-2">
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center flex-1">
          <div 
            className="w-full bg-blue-500 rounded-t hover:bg-blue-600 transition-all cursor-pointer"
            style={{ height: `${(item.value / maxValue) * 100}%` }}
          >
          </div>
          <span className="text-xs mt-2 text-gray-600">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default function ProblemAdminDashboard() {
  const submissionData = [
    { label: 'Mon', value: 240 },
    { label: 'Tue', value: 139 },
    { label: 'Wed', value: 380 },
    { label: 'Thu', value: 390 },
    { label: 'Fri', value: 480 },
    { label: 'Sat', value: 380 },
    { label: 'Sun', value: 430 },
  ];

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-6">
      {/* Top Action Bar */}
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800">Problem Admin Dashboard</h1>
        <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          <Plus size={20} />
          <span>Add New Problem</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Problems</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">2,451</h3>
            </div>
            <span className="bg-blue-100 p-2 rounded-lg">
              <Code className="text-blue-600" size={24} />
            </span>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <TrendingUp className="text-green-500 mr-1" size={16} />
            <span className="text-green-500 font-medium">12%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Submissions</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">1.2M</h3>
            </div>
            <span className="bg-purple-100 p-2 rounded-lg">
              <CheckCircle2 className="text-purple-600" size={24} />
            </span>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <TrendingUp className="text-green-500 mr-1" size={16} />
            <span className="text-green-500 font-medium">8%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Users</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">54.2K</h3>
            </div>
            <span className="bg-green-100 p-2 rounded-lg">
              <Users className="text-green-600" size={24} />
            </span>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <TrendingUp className="text-green-500 mr-1" size={16} />
            <span className="text-green-500 font-medium">24%</span>
            <span className="text-gray-500 ml-1">from last month</span>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg Response Time</p>
              <h3 className="text-2xl font-bold text-gray-900 mt-1">238ms</h3>
            </div>
            <span className="bg-orange-100 p-2 rounded-lg">
              <Timer className="text-orange-600" size={24} />
            </span>
          </div>
          <div className="flex items-center mt-4 text-sm">
            <Activity className="text-blue-500 mr-1" size={16} />
            <span className="text-blue-500 font-medium">Stable</span>
            <span className="text-gray-500 ml-1">performance</span>
          </div>
        </div>
      </div>

      {/* Charts and Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Submission Trend Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-gray-800">Submission Trend</h3>
            <select className="text-sm border rounded-lg px-2 py-1">
              <option>Last 7 days</option>
              <option>Last 30 days</option>
              <option>Last 90 days</option>
            </select>
          </div>
          <SimpleBarChart data={submissionData} />
        </div>

        {/* Problem Distribution */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-800 mb-4">Problem Distribution</h3>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Easy</span>
                <span className="text-gray-900 font-medium">842</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '35%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Medium</span>
                <span className="text-gray-900 font-medium">1,127</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '45%' }}></div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-600">Hard</span>
                <span className="text-gray-900 font-medium">482</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '20%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Problems Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100">
        <div className="p-6 border-b border-gray-100">
          <h3 className="font-semibold text-gray-800">Recent Problems</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Title</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Difficulty</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Submissions</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Success Rate</th>
                <th className="text-left py-3 px-6 text-sm font-medium text-gray-600">Created</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  title: "Two Sum",
                  difficulty: "Easy",
                  submissions: "245K",
                  successRate: "64%",
                  created: "2d ago"
                },
                {
                  title: "Longest Substring Without Repeating Characters",
                  difficulty: "Medium",
                  submissions: "156K",
                  successRate: "48%",
                  created: "3d ago"
                },
                {
                  title: "Median of Two Sorted Arrays",
                  difficulty: "Hard",
                  submissions: "89K",
                  successRate: "32%",
                  created: "5d ago"
                }
              ].map((problem, index) => (
                <tr key={index} className="border-t border-gray-100">
                  <td className="py-3 px-6">
                    <span className="font-medium text-gray-900">{problem.title}</span>
                  </td>
                  <td className="py-3 px-6">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium
                      ${problem.difficulty === 'Easy' ? 'bg-green-100 text-green-700' : 
                        problem.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-700' : 
                        'bg-red-100 text-red-700'}`}>
                      {problem.difficulty}
                    </span>
                  </td>
                  <td className="py-3 px-6 text-gray-600">{problem.submissions}</td>
                  <td className="py-3 px-6 text-gray-600">{problem.successRate}</td>
                  <td className="py-3 px-6 text-gray-600">{problem.created}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}