import React from 'react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DashboardHeader from './components/DashboardHeader';
import StatsCards from './components/StatsCards';
import RecentMovement from './components/RecentMovement';

export const Admin = () => {
  return (
    <div>
      <div className="wrapper">
        <Sidebar />
        <div className="main">
          <Navbar />
          <main className="content">
            <div className="container-fluid p-0">
              <DashboardHeader />
              <StatsCards />
              <RecentMovement />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Admin;
