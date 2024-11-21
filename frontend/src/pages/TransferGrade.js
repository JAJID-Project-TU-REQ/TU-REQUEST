import React, { useState, useEffect } from 'react';
import Header from '../components/common/header/Header'
import SubHeader from '../components/common/subheader/SubHeader'
import TopicBox from '../components/common/topicbox/TopicBox'
import SelectSemester from '../components/common/selectsemester/SelectSemester'
import SelectSubject from '../components/common/Select/SelectSubject'
import TextInput from '../components/common/textinput/TextInput'
import SubmitButton from '../components/common/submitbutton/SubmitButton'
import { Box, Toolbar } from '@mui/material'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function TransferGrade() {
  
    // Common fields
    const [form_type] = useState('เทียบโอนรายวิชา');
    const [semester_year, setSemesterYear] = useState('');
    const [semester, setSemester] = useState('');
    const [senderId, setSenderID] = useState('');
    const [status] = useState('pending');

    // Additional fields
    const [title] = useState('-');
    const [subject1, setSubject1] = useState(''); 
    const [subject2, setSubject2] = useState('');
    const [subject3, setSubject3] = useState('');
    const [subject4, setSubject4] = useState('');

    const form_location = 'http://localhost:8000/forms';
    const navigate = useNavigate();

    useEffect(() => {
      const username = localStorage.getItem('username');
      if (username) {
        setSenderID(username);
      }
    }, []);

    const FormHandler = () => {
      const additional_fields = {
        title : title,
        subject1: subject1,
        subject2: subject2,
        subject3: subject3,
        subject4: subject4
      };
  
      // Data to be sent to backend, structured for your backend
      const formData = {
        form_type: form_type,
        semester_year: semester_year,
        semester: semester,
        senderId: senderId,
        status: status,
        additional_fields: additional_fields
      };
  
      // Post request to the backend
      axios.post(form_location, formData)
      .then(res => {
        console.log("Form submitted successfully:", res);
        alert("ส่งคำร้องสำเร็จ"); // Success alert
      })
      .catch(err => {
        console.error("Error posting form data:", err);
        alert("เกิดข้อผิดพลาดในการส่งคำร้อง");
      });
  };

    const handleSubmit = () => {
      FormHandler();
      navigate('/');

    }
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Box width={'70%'}>
      <Toolbar/>
          <Header text="คำร้องเทียบโอนรายวิชา"/>
          <SubHeader/>     
        <Box sx={{display: 'flex', justifyContent: 'start '}}>
          <TopicBox text="ปีการศึกษา" padding="12px"  />
          <TextInput label="กรอกปีการศึกษา" width="30%" onChange={event => setSemesterYear(event.target.value)} />
          <TopicBox text="ภาคการศึกษา"  padding="12px"/>
          <SelectSemester width='350px' height='55px' onChange={event => setSemester(event.target.value)}/>
        </Box>
        <Box sx={{mt:1,display: 'flex', justifyContent: 'start'}}>
          <TopicBox text="รหัสวิชา"  padding="12px"/>
          <SelectSubject  width='800px' onChange={event => setSubject1(event.target.value)} />
        </Box>
        <Box sx={{mt:1,display: 'flex', justifyContent: 'start'}}>
          <TopicBox text="รหัสวิชา" padding="12px"/>
          <SelectSubject width='800px'onChange={event => setSubject2(event.target.value)}/>
        </Box>
        <Box sx={{mt:1,display: 'flex', justifyContent: 'start'}}>
          <TopicBox text="รหัสวิชา" padding="12px"/>
          <SelectSubject width='800px'onChange={event => setSubject3(event.target.value)}/>
        </Box>
        <Box sx={{mt:1,display: 'flex', justifyContent: 'start'}}>
          <TopicBox text="รหัสวิชา" padding="12px"/>
          <SelectSubject width='800px' onChange={event => setSubject4(event.target.value)}/>
        </Box>
        <Box>
          <SubmitButton onClick={handleSubmit}/>
        </Box>
      </Box>
    </Box>
      
  )
}

export default TransferGrade
