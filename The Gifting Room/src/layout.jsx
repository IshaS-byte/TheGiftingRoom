import React from 'react'
import { Outlet } from 'react-router-dom';
import NavigationBar from './NavigationBar.jsx';

const layout = () => {
  return (
    <div>
      <NavigationBar />
      <Outlet />
    </div>
  )
}

export default layout
