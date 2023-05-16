import React, {useEffect, useRef} from 'react';
import {BiXCircle} from "react-icons/bi"

const Sidebar = ({ children, isOpen, toggleSidebar }) => {

  const sidebarRef = useRef(null);

  useEffect(() => {
    const handleClickOutsideSidebar = (event) => {
      const button1 = document.querySelector('.openContactBtn1');
      const button2 = document.querySelector('.openContactBtn2');
      const button3 = document.querySelector('.openBookingBtn');
      if  ( sidebarRef.current && !sidebarRef.current.contains(event.target) && 
            button1 && !button1.contains(event.target) &&
            button2 && !button2.contains(event.target) &&
            button3 && !button3.contains(event.target) 
          ) {
            console.log("clickee afuera sidebar");
        // Clicked outside .conventionsContainer and outside the button to open it
        toggleSidebar();
      }
    };
    document.addEventListener('click', handleClickOutsideSidebar);
    return () => {
      document.removeEventListener('click', handleClickOutsideSidebar);
    };
  }, [toggleSidebar]);

  return (
    <div ref={sidebarRef} className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="closeBtn" onClick={toggleSidebar}>
        <BiXCircle fontSize={25}/>
      </div>
      {children}
    </div>
  );
};

export default Sidebar;