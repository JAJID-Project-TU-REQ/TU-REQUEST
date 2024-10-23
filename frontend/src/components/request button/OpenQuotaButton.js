import { useNavigate } from 'react-router-dom';
import './button.css';
export default function OpenQuotaButton(){
    const navigate = useNavigate();
        const handleOpenQuota = () => {
            navigate('/all-request/3-open-quota');
        };
    
    return(
      <button className="default-button" onClick={handleOpenQuota}>
        <h1>คำร้องขอโควตาวิชา</h1>
        <img className='img-default' src="https://clipart.info/images/minicovers/1623700984among-us-red.png"/>
        <h1>ขอโควตา<br></br>ลงทะเบียน</h1>
      </button>
    )
}