import React, { useState } from 'react';
import './History.css';
import NavbarReq from '../components/NavbarReq';

const RequestHistoryPage = () => {
  // ตัวอย่างอาเรที่ลองทำาก่อน
  const requestData = [
    {
      title: 'Quit Request',
      sentDate: '2023-09-30',
      officerCheck: { checked: true, date: '2023-10-01' },
      adviserCheck: { checked: true, date: '2023-10-03' },
      deanCheck: { checked: false, date: 'Pending' }
    },
    {
      title: 'Leave of Absence Request',
      sentDate: '2023-09-14',
      officerCheck: { checked: true, date: '2023-09-15' },
      adviserCheck: { checked: true, date: '2023-09-17' },
      deanCheck: { checked: true, date: '2023-09-18' }
    },
    {
      title: 'Scholarship Request',
      sentDate: '2023-09-20',
      officerCheck: { checked: false, date: 'Pending' },
      adviserCheck: { checked: false, date: 'Pending' },
      deanCheck: { checked: false, date: 'Pending' }
    }
  ];

  return (
    <div>
      <NavbarReq/>
      <h1>Request History</h1>
      {requestData.map((item, index) => (
        <RequestItem
          key={index}
          title={item.title}
          sentDate={item.sentDate}
          officerCheck={item.officerCheck}
          adviserCheck={item.adviserCheck}
          deanCheck={item.deanCheck}
        />
      ))}
    </div>
  );
};

const RequestItem = ({ title, sentDate, officerCheck, adviserCheck, deanCheck }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="request-section">
      <div className="request-header" onClick={toggleDropdown}>
        <div className="request-date">{sentDate}</div>
        <div className="request-title">{title}</div>
      </div>
      {isOpen && (
        <div className="request-details">
          <p>Officer Check: {officerCheck.checked ? 'Checked' : 'Pending'} (Date: {officerCheck.date})</p>
          <p>Adviser Check: {adviserCheck.checked ? 'Checked' : 'Pending'} (Date: {adviserCheck.date})</p>
          <p>Dean Check: {deanCheck.checked ? 'Checked' : 'Pending'} (Date: {deanCheck.date})</p>
        </div>
      )}
    </div>
  );
};

export default RequestHistoryPage;
