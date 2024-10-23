import { useNavigate } from 'react-router-dom';
import './button.css';
export default function DefaultButton(){
    const navigate = useNavigate();
        const handleDefaultClick =()=>{
            navigate('/all-request/1-default');
        };
    
    return(
      <button className="default-button" onClick={handleDefaultClick}>
        <h1 className='req-title'>คำร้องทั่วไป</h1>
        <img className='img-default' src="https://clipart.info/images/minicovers/1623700984among-us-red.png"/>
        <h1 className='req-description'>เขียนคำร้องทั่วไป<br></br>แบบไม่ระบุหัวข้อ</h1>
      </button>
    )
}