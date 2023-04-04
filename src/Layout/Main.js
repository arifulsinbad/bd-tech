import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Page/Navbar';
import ProductDetails from '../Page/ProductDetails';

const Main = () => {
 return (
  <div>
   <Navbar></Navbar>
   <Outlet></Outlet>
   <ProductDetails></ProductDetails>
  </div>
 );
};

export default Main;