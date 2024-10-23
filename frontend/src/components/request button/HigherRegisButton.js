import { useNavigate } from 'react-router-dom';
import './button.css';
export default function HigherRegisButton(){
    const navigate = useNavigate();
    const handleHigherRegis = () => {
        navigate('/all-request/10-higherregis');
    };
    
    return(
      <button className="default-button" onClick={handleHigherRegis}>
        <h1>คำร้องขอจดทะเบียนเกิน<br></br>ข้อบังคับมหาวิทยาลัย</h1>
        <img className='img-default' src="https://clipart.info/images/minicovers/1623700984among-us-red.png"/>
        <h1>ขอลงทะเบียน<br></br>เกินข้อกำหนด</h1>
      </button>
    )
}