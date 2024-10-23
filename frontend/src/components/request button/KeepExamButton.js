import { useNavigate } from 'react-router-dom';
import './button.css';
export default function KeepExamButton(){
    const navigate = useNavigate();
        const handleKeepExam = () => {
            navigate('/all-request/4-keepexam');
        };
    
    return(
      <button className="default-button" onClick={handleKeepExam}>
        <h1>คำร้องขอกักตัวสอบ</h1>
        <img className='img-default' src="https://clipart.info/images/minicovers/1623700984among-us-red.png"/>
        <h1>ขอกักตัวสอบ</h1>
      </button>
    )
}