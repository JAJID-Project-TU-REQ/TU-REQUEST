import { useNavigate } from 'react-router-dom';
import './button.css';
export default function TransferGradeButton(){
    const navigate = useNavigate();
        const handleTransferGrade = () => {
            navigate('/all-request/2-transfer-grade');
        };
    
    return(
      <button className="default-button" onClick={handleTransferGrade}>
        <h1>คำร้องขอเทียบโอน<br></br>รายวิชาและหน่วยกิต</h1>
        <img className='img-default' src="https://clipart.info/images/minicovers/1623700984among-us-red.png"/>
        <h1>เทียบโอนรายวิชา</h1>
      </button>
    )
}