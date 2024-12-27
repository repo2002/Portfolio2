import React from 'react';
import { Outlet } from 'react-router-dom'; 
import Navigation from './organisms/navigation';

function Layout() {
  return (
    <div className="container"> 
      {/* Navigation bar here */}
      <Navigation/>
      <Outlet /> 
      {/* Footer here */}
    </div>
  );
}

export default Layout;