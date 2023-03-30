import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
 return (
  <div>
   <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex mt-10 ml-5 ">
    <Outlet></Outlet>
    
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      
      <li><Link to='/dashboardLayout/allUser'>All User</Link></li>
      <li><Link to='/dashboardLayout/productList'>ProductList</Link></li>
      <li><Link to='/dashboardLayout/addProduct'>Add Product</Link></li>
      
    </ul>
  
  </div>
</div>
  </div>
 );
};

export default Dashboard;