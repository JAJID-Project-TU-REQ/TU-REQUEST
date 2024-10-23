import { useNavigate } from 'react-router-dom';
import './button.css';
export default function LowerRegisButton(){
    const navigate = useNavigate();
    const handleLowerRegis = () => {
        navigate('/all-request/9-lowerregis');
    };
    
    return(
      <button className="default-button" onClick={handleLowerRegis}>
        <h2>คำร้องขอจดทะเบียนต่ำ<br></br>กว่าข้อบังคับมหาวิทยาลัย</h2>
        <img className='img-default' src="https://clipart.info/images/minicovers/1623700984among-us-red.png"/>
        <h1>ขอลงทะเบียน<br></br>น้อยกว่าข้อกำหนด</h1>
      </button>
    )
}