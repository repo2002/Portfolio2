import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Navigation from './organisms/Navigation';
// import DarkModeToggle from './atoms/DarkModeToggle';

function Layout() {
  return (
    <div className="container"> 
      <Navigation/>
      {/* <DarkModeToggle/> */}
      <Outlet /> 
    </div>
  );
}

export default Layout;