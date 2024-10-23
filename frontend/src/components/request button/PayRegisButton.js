import { useNavigate } from 'react-router-dom';
import './button.css';
export default function PayRegisButton(){
    const navigate = useNavigate();
    const handlePayRegis = () => {
        navigate('/all-request/11-payregis');
    };
    
    return(
      <button className="default-button" onClick={handlePayRegis}>
        <h2>คำร้องขอผ่อนผันการชำระ<br></br>ค่าใช้จ่ายในการจดทะเบียน</h2>
        <img className='img-default' src="https://clipart.info/images/minicovers/1623700984among-us-red.png"/>
        <h1>ขอขยายเวลาการชำระ<br></br>ค่าลงทะเบียน</h1>
      </button>
    )
}