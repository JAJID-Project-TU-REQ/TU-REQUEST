import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavbarHome.css';


const NavbarHome = () => {
    const navigate = useNavigate();
    
    const handleHomeClick = () => {
        navigate('/home');
    };
        
    const handleRequestInfoClick = () => {
        navigate('/request-information');
    };
        
    const handleHistoryClick = () => {
        navigate('/history');
    };


  return (

    <div className="navbar">
      <div className="home-buton" onClick={handleHomeClick}>
        <button class="w-44 h-12 bg-yellow-600 rounded-full">HOME</button>
      </div>

      <div className="reques-information-button" onClick={handleRequestInfoClick}>
        <button class="w-44 h-12 bg-yellow-600 rounded-full">REQUEST INFORMATION</button>
      </div>

      <div className="history-button" onClick={handleHistoryClick}>
        <button class="w-44 h-12 bg-yellow-600 rounded-full">HISTORY</button>
      </div>
    </div>
  )
};
export default NavbarHome;
