import React from 'react';
import {BiXCircle} from "react-icons/bi"

const Sidebar = ({ children, isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="closeBtn" onClick={toggleSidebar}>
        <BiXCircle fontSize={25}/>
      </div>
      {children}
    </div>
  );
};

export default Sidebar;