

 import React, { useState } from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-blue-600 text-white p-5">
      <h2 className="text-xl font-bold mb-6">Supervisor Dashboard</h2>
      <nav className="space-y-4">
        <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-500">
          <span>📋 Tasks</span>
        </a>
        <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-500">
          <span>🔄 Progress</span>
        </a>
        <a href="#" className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-500">
          <span>📊 Reports</span>
        </a>
      </nav>
    </aside>
  );
};

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <h1 className="text-lg font-semibold">Service Supervisor</h1>
      
      {/* Right-side buttons */}
      <div className="flex items-center space-x-4">
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          🔔 {/* Notification Icon */}
        </button>
        <button className="p-2 bg-gray-100 rounded-full hover:bg-gray-200">
          👤 {/* Profile Icon */}
        </button>
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700">
          Logout
        </button>
      </div>
    </header>
  );
};

const TaskTable = () => {
  const [tasks, setTasks] = useState([
    { id: "#001", customer: "John Doe", vehicle: "Toyota", service: "Mechanical", start: "01-Apr", end: "05-Apr", status: "Pending" },
    { id: "#002", customer: "Jane Smith", vehicle: "Honda", service: "Electrical", start: "02-Apr", end: "06-Apr", status: "In Progress" },
    { id: "#003", customer: "Alice Brown", vehicle: "BMW", service: "Bodyshop", start: "03-Apr", end: "07-Apr", status: "Completed" },
  ]);

  return (
    <div className="p-4">
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-3 text-left">ID</th>
            <th className="p-3 text-left">Customer</th>
            <th className="p-3 text-left">Vehicle</th>
            <th className="p-3 text-left">Service</th>
            <th className="p-3 text-left">Start</th>
            <th className="p-3 text-left">End</th>
            <th className="p-3 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <tr key={index} className="border-b hover:bg-gray-100">
              <td className="p-3">{task.id}</td>
              <td className="p-3">{task.customer}</td>
              <td className="p-3">{task.vehicle}</td>
              <td className="p-3">{task.service}</td>
              <td className="p-3">{task.start}</td>
              <td className="p-3">{task.end}</td>
              <td className={`p-3 ${task.status === "Pending" ? "text-yellow-500" : task.status === "In Progress" ? "text-blue-500" : "text-green-500"}`}>{task.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const SupervisorDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <TaskTable />
      </div>
    </div>
  );
};

export default SupervisorDashboard;
