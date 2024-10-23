import { useNavigate } from 'react-router-dom';
import './button.css';
export default function RegisOtherButton(){
    const navigate = useNavigate();
    const handleRegisOther = () => {
        navigate('/all-request/7-regisother');
    };
    
    return(
      <button className="default-button" onClick={handleRegisOther}>
        <h1>คำร้องขอจดทะเบียน<br></br>ข้ามหลักสูตร</h1>
        <img className='img-default' src="https://clipart.info/images/minicovers/1623700984among-us-red.png"/>
        <h1>จดทะเบียน<br></br>ข้ามโครงการ</h1>
      </button>
    )
}