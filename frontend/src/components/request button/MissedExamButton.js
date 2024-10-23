import { useNavigate } from 'react-router-dom';
import './button.css';
export default function MissedExamButton(){
    const navigate = useNavigate();
        const handleMissedExam = () => {
            navigate('/all-request/5-missed-exam');
        };
    
    return(
      <button className="default-button" onClick={handleMissedExam}>
        <h1>คำร้องกรณีขาดสอบ</h1>
        <img className='img-default' src="https://clipart.info/images/minicovers/1623700984among-us-red.png"/>
        <h1>แจ้งเหตุผล<br></br>การขาดสอบ</h1>
      </button>
    )
}