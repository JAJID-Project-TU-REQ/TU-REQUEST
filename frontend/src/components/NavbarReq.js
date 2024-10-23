import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavbarReq.css';

const NavbarReq = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <div className="navbar">
      <div className="back-button" onClick={handleBackClick}>
        <button class="w-44 h-12 bg-yellow-600 rounded-full">BACK</button>
      </div>

      <div className="user-info">
        <span>John Doe</span>
        <img
          src="https://via.placeholder.com/40"
          alt="Avatar"
          className="avatar"
        />
      </div>
    </div>
  );
};

export default NavbarReq;
