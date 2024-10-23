import { useNavigate } from 'react-router-dom';
import './button.css';
export default function TranUniButton(){
    const navigate = useNavigate();
    const handleTranUni = () => {
        navigate('/all-request/8-tranuni');
    };
    
    return(
      <button className="default-button" onClick={handleTranUni}>
        <h1>คำร้องขอจดทะเบียน<br></br>ข้ามสถาบัน</h1>
        <img className='img-default' src="https://clipart.info/images/minicovers/1623700984among-us-red.png"/>
        <h1>จดทะเบียน<br></br>ข้ามสถาบัน</h1>
      </button>
    )
}