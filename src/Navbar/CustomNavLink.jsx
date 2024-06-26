import React from 'react';
import { NavLink } from 'react-router-dom';
import { SidebarItem } from '../Navbar/Sidebar';

const CustomNavLink = ({ to, icon, text, alert }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => isActive ? "bg-green-400 text-white" : ""}
    >
      {({ isActive }) => (
        <SidebarItem icon={icon} text={text} active={isActive} alert={alert} />
      )}
    </NavLink>
  );
};

export default CustomNavLink;
