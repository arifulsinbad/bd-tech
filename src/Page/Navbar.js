import React from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartFill } from "react-icons/bs";
const Navbar = () => {

 const menuItems = <React.Fragment>
  <li className=''><Link to='/'>Home</Link></li>
  <li className=''><Link to='/topRated'>Top Rated</Link></li>

  <li className=''><Link  to='/dashboardLayout'>Dasboard</Link></li>
  <li className='text-xl '><Link to='/cart'><BsFillCartFill></BsFillCartFill></Link></li>
 </React.Fragment>
 return (
  <div className="navbar  bg-indigo-300 mt-4 rounded-xl text-indigo-900 font-semibold ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className=" menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  ">
        {
         menuItems
        }
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">BD TECH</a>
  </div>
  <div className="navbar-end  hidden lg:flex" style={{position:"absolute", right:"100px"}}>
    <ul className="menu menu-horizontal px-1 ">
      {
       menuItems
      }
    </ul>
  </div>
  <div className="navbar-end">
  <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">

  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </label>
  </div>
</div>
 );
};

export default Navbar;