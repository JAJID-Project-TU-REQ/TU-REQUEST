import { useNavigate } from 'react-router-dom';
import './button.css';
export default function QuitButton(){
    const navigate = useNavigate();
    const handleQuit = () => {
        navigate('/all-request/12-quit');
    };
    
    return(
      <button className="default-button" onClick={handleQuit}>
        <h1>คำร้องขอลาออก</h1>
        <img className='img-default' src="https://clipart.info/images/minicovers/1623700984among-us-red.png"/>
        <h1>ยื่นความประสงค์<br></br>ลาออก</h1>
      </button>
    )
}