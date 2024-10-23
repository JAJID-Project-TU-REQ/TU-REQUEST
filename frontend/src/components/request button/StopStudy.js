import { useNavigate } from 'react-router-dom';
import './button.css';
export default function StopStudyButton(){
    const navigate = useNavigate();
    const handleStopStudy = () => {
        navigate('/all-request/14-stopstudy');
    };
    
    return(
      <button className="default-button" onClick={handleStopStudy}>
        <h1>คำร้องขอลาพักการศึกษา</h1>
        <img className='img-default' src="https://clipart.info/images/minicovers/1623700984among-us-red.png"/>
        <h1>ขอพักการศึกษา</h1>
      </button>
    )
}