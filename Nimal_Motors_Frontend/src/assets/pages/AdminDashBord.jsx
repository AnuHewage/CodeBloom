import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddServiceForm from "../../components/SupervisorSection/AddServiceForm";
import AdminInvoiceView from "../../pages/admin/AdminInvoiceView";
import UserTable from "../../components/SupervisorSection/UserTable";
import OperationDashbord from "./OperationDashbord";
import PackagesAdd from "./packagesAdd";

const DashboardCard = ({ title, description, emoji, color, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer ${color} text-white rounded-2xl shadow-xl p-8 transform hover:scale-105 transition duration-300 flex flex-col justify-between`}
    >
      <div className="text-5xl mb-4">{emoji}</div>
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="opacity-90">{description}</p>
    </div>
  );
};

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activePage, setActivePage] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderContent = () => {
    switch (activePage) {
      case "booking":
        return (
          <div className="p-8 min-h-[calc(100vh-8rem)]">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <p className="text-gray-600 text-xl mb-4">
                <PackagesAdd />
              </p>
            </div>
          </div>
        );
      case "sectionManagement":
        return (
          <div className="p-8 min-h-[calc(100vh-8rem)]">
            <div className="bg-white rounded-lg shadow p-6 text-center">
              <p className="text-gray-600 text-xl mb-4">
                <AdminInvoiceView onClick={() => setActivePage("boking Management")} />
              </p>
            </div>
          </div>
        );
      case "userManagement":
        navigate("/admin/users");
        return null;
      case "operationDashboard":
        return (
          <div className="p-8 min-h-[calc(100vh-8rem)]">
            <div className="bg-white rounded-lg shadow p-6">
              <OperationDashbord />
            </div>
          </div>
        );
      default:
        return (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8">
            <DashboardCard
              title="Packages"
              description="Manage customer Packages."
              color="px-6 py-4  hero relative bg-gradient-to-r from-red-00 to-red-500"
              emoji="🛒"
              onClick={() => setActivePage("booking")}
            />
            <DashboardCard
              title="Section Management"
              description="Manage service sections."
              color=" px-6 py-4  hero relative bg-gradient-to-r from-purple-600 to-purple-800s"
              emoji="📦"
              onClick={() => setActivePage("sectionManagement")}
            />
            <DashboardCard
              title="User Management"
              description="Manage system users."
              color=" px-6 py-4  hero relative bg-gradient-to-r from -teal-600 to-teal-800"
              emoji="👥"
              onClick={() => navigate("/admin/users")}
            />
            <DashboardCard
              title="Operation Dashboard"
              description="View operational metrics."
              color="px-6 py-4  hero relative bg-gradient-to-r from-rose-600 to-rose-800"
              emoji="⚙️"
              onClick={() => setActivePage("operationDashboard")}
            />
          </div>
        );
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div
        className={`${
          sidebarOpen ? "w-64" : "w-20"
        } bg-blue-800 text-white transition-all duration-300 flex flex-col`}
      >
        <div className="p-4 flex items-center border-b border-blue-700">
          {sidebarOpen && (
            <div className="ml-3">
              <p className="font-medium">Admin User</p>
            </div>
          )}
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={() => setActivePage("dashboard")}
                className={`w-full text-left p-4 rounded-lg flex items-center transition ${
                  activePage === "dashboard" ? "bg-blue-700" : "hover:bg-blue-700"
                }`}
              >
                <span className="text-xl">📊</span>
                {sidebarOpen && <span className="ml-4">Dashboard</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActivePage("booking")}
                className={`w-full text-left p-4 rounded-lg flex items-center transition ${
                  activePage === "booking" ? "bg-blue-700" : "hover:bg-blue-700"
                }`}
              >
                <span className="text-xl">🛒</span>
                {sidebarOpen && <span className="ml-4">Packages</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActivePage("sectionManagement")}
                className={`w-full text-left p-4 rounded-lg flex items-center transition ${
                  activePage === "sectionManagement" ? "bg-black-700" : "hover:bg-black-700"
                }`}
              >
                <span className="text-xl">📦</span>
                {sidebarOpen && <span className="ml-4">Sections</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => navigate("/admin/users")}
                className={`w-full text-left p-4 rounded-lg flex items-center transition ${
                  activePage === "userManagement" ? "bg-blue-700" : "hover:bg-blue-700"
                }`}
              >
                <span className="text-xl">👥</span>
                {sidebarOpen && <span className="ml-4">Users</span>}
              </button>
            </li>
            <li>
              <button
                onClick={() => setActivePage("operationDashboard")}
                className={`w-full text-left p-4 rounded-lg flex items-center transition ${
                  activePage === "operationDashboard" ? "bg-blue-700" : "hover:bg-blue-700"
                }`}
              >
                <span className="text-xl">⚙️</span>
                {sidebarOpen && <span className="ml-4">Operation Dashboard</span>}
              </button>
            </li>
          </ul>
        </nav>

        <div className="p-4 border-t border-blue-700">
          <button 
            onClick={() => navigate("/login")}
            className="w-full p-2 rounded-lg hover:bg-blue-700 flex items-center transition"
          >
            <span className="text-xl">🚪</span>
            {sidebarOpen && <span className="ml-3">Logout</span>}
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="p-6 bg-gray-300 min-h-screen">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
