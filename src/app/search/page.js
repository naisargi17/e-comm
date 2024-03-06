"use client"
import { useState } from 'react';
const serachPage = () => {

  const [activeTab, setActiveTab] = useState('Dashboard');

  return (
    <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">My Company</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"/></svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          <a href="#dashboard" className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${activeTab === 'Dashboard' ? 'font-bold' : ''}`} onClick={() => setActiveTab('Dashboard')}>
            Dashboard
          </a>
          <a href="#team" className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${activeTab === 'Team' ? 'font-bold' : ''}`} onClick={() => setActiveTab('Team')}>
            Team
          </a>
          <a href="#projects" className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${activeTab === 'Projects' ? 'font-bold' : ''}`} onClick={() => setActiveTab('Projects')}>
            Projects
          </a>
          <a href="#calendar" className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${activeTab === 'Calendar' ? 'font-bold' : ''}`} onClick={() => setActiveTab('Calendar')}>
            Calendar
          </a>
          <a href="#documents" className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${activeTab === 'Documents' ? 'font-bold' : ''}`} onClick={() => setActiveTab('Documents')}>
            Documents
          </a>
          <a href="#reports" className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${activeTab === 'Reports' ? 'font-bold' : ''}`} onClick={() => setActiveTab('Reports')}>
            Reports
          </a>
          <a href="#your-teams" className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${activeTab === 'Your teams' ? 'font-bold' : ''}`} onClick={() => setActiveTab('Your teams')}>
            Your teams
          </a>
          <a href="#heroicons" className={`block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 ${activeTab === 'Heroicons' ? 'font-bold' : ''}`} onClick={() => setActiveTab('sr')}>sr</a>
    </div>
    </div>
    </nav>);
}
 
export default serachPage;