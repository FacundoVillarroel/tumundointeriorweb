import React from 'react';

const Sidebar = ({ children, isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="closeBtn" onClick={toggleSidebar}>
        X
      </div>
      {children}
    </div>
  );
};

export default Sidebar;