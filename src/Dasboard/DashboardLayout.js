import React from 'react';
import Navbar from '../Page/Navbar';
import Dashboard from './Dashboard';

const DashboardLayout = () => {
 return (
  <div>
   <Navbar></Navbar>
   <Dashboard></Dashboard>
  </div>
 );
};

export default DashboardLayout;