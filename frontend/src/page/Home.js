import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
    
  const handleMakeRequest = () => {
        navigate('/all-request');
    };
  const handleCheckStatus = () => {
      navigate('/history');
  };
  const handleProfDashboard = ()=>{
    navigate('/prof-dashboard');
  }
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <div>
        <button className='home-button' onClick={handleMakeRequest}>สร้างคำร้อง</button>
        <button className='status-button' onClick={handleCheckStatus}>ตรวจสอบสถานะ</button>
        <button onClick={handleProfDashboard}>ไปหน้าแดชบอร์ดอาจารย์</button>
      </div>
    </div>
  );
};

export default Home;
