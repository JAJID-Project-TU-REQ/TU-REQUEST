import { useNavigate } from 'react-router-dom';
import './button.css';
export default function LateRegisButton(){
    const navigate = useNavigate();
        const handleLateRegis = () => {
            navigate('/all-request/6-late-regis');
        };
    
    return(
      <button className="default-button" onClick={handleLateRegis}>
        <h1>คำร้องขอจดทะเบียน<br></br>ล่าช้ากรณีพิเศษ</h1>
        <img className='img-default' src="https://clipart.info/images/minicovers/1623700984among-us-red.png"/>
        <h1>ขอลงทะเบียน<br></br>นอกเวลาลงทะเบียน</h1>
      </button>
    )
}