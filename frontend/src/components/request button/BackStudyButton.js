import { useNavigate } from 'react-router-dom';
import './button.css';
export default function BackStudyButton(){
    const navigate = useNavigate();
    const handleBackStudy = () => {
        navigate('/all-request/13-backstudy');
    };
    
    return(
      <button className="default-button" onClick={handleBackStudy}>
        <h1>คำร้องขอคืน<br></br>สถานภาพนักศึกษา</h1>
        <img className='img-default' src="https://clipart.info/images/minicovers/1623700984among-us-red.png"/>
        <h1>ขอกลับเข้าเป็น<br></br>นักศึกษาใหม่</h1>
      </button>
    )
}