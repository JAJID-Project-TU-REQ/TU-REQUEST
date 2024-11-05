import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Select, MenuItem, TextField, Container, Button } from '@mui/material';
import axios from 'axios';

function Normal_Request() {

  const [form_type] = useState('Default')
  const [semester_year, setSemesterYear] = useState('')
  const [semester, setSemester] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [professor, setProf] = useState('')
  const [subject, setSubject] = useState('')
  const [section, setSection] = useState('')
  const [senderId, setSenderID] = useState('')
  const [status] = useState('pending')

  const form_location = 'http://localhost:8000/forms'

  useEffect(() => {
    const username = localStorage.getItem('username');
    if (username) {
      setSenderID(username);
    }
  }, []);

  const FormHandler = () => {
    axios.post(form_location, {
        form_type: form_type,
        semester_year: semester_year,
        semester: semester,
        title: title,
        content: content,
        professor: professor,
        subject: subject,
        section: section,
        senderId: senderId,
        status: status
    }).then(res => console.log(res))
      .catch(err => console.error("Error posting form data:", err));
    };

    const handleSubmit = (e) => {
      FormHandler();
      console.log(localStorage.getItem('username'));
      alert("ส่งคำร้องสำเร็จ")
    };

  return (
    <Container maxWidth="md" sx={{ mt: 10, mb: 5 }}>
      {/* Title Section */}
      <Grid container sx={{ textAlign: 'center', borderBottom: 2, borderColor: 'divider', pb: 4 }}>
        <Grid item xs={12}>
          <Typography variant='h4'>คำร้องทั่วไป</Typography>
        </Grid>
      </Grid>

      {/* Subtitle Section */}
      <Grid container sx={{ mt: 5, textAlign: 'center', pb: 4 }}>
        <Grid item xs={12}>
          <Typography variant='h5'>กรอกข้อมูลคำร้อง</Typography>
          <Typography variant='h6'>โปรดกรอกข้อมูลให้ถูกต้องและครบถ้วนเพื่อความรวดเร็วในการดำเนินการ</Typography>
        </Grid>
      </Grid>

      {/* Form Section */}
      <Grid container spacing={3}>
        {/* Year and Semester Fields */}
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <Typography variant='h6' sx={{ mr: 2, backgroundColor: "#902923", borderRadius: '8px', padding: '8px 18px', color: '#FFFFFF' }}>
              ปีการศึกษา
            </Typography>
            <TextField id="semester_year" label="กรอกปีการศึกษา" variant="outlined" onChange={event => setSemesterYear(event.target.value)} sx={{ ml: 2, flexGrow: 1 }} />

            <Typography variant='h6' sx={{ ml: 4, mr: 2, backgroundColor: "#902923", borderRadius: '8px', padding: '8px 18px', color: '#FFFFFF' }}>
              ภาคการศึกษา
            </Typography>
            <Select id="semester" name="semester" variant="outlined" onChange={event => setSemester(event.target.value)} sx={{ width: '150px', height: '50px' }}>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">summer</MenuItem>
            </Select>
          </Box>
        </Grid>

        {/* Request Title Field */}
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <Typography variant='h6' sx={{ mr: 2, backgroundColor: "#902923", borderRadius: '8px', padding: '8px 18px', color: '#FFFFFF' }}>
              หัวข้อคำร้อง
            </Typography>
            <TextField id="title" label="กรอกหัวข้อคำร้อง" variant="outlined" onChange={event => setTitle(event.target.value)} fullWidth sx={{ ml: 2 }} />
          </Box>
        </Grid>

        {/* Request Content Field */}
        <Grid item xs={12}>
          <Box display="flex" alignItems="flex-start">
            <Typography variant='h6' sx={{ mr: 2, backgroundColor: "#902923", borderRadius: '8px', padding: '30px 18px', color: '#FFFFFF' }}>
              ความประสงค์
            </Typography>
            <TextField
              id="content"
              label="กรอกความประสงค์"
              variant="outlined"
              onChange={event => setContent(event.target.value)}
              multiline
              rows={4}
              fullWidth
              sx={{ ml: 2 }}
            />
          </Box>
        </Grid>

        {/* Professor Field */}
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <Typography variant='h6' sx={{ mr: 2, backgroundColor: "#902923", borderRadius: '8px', padding: '8px 18px', color: '#FFFFFF' }}>
              อาจารย์ผู้สอน
            </Typography>
            <Select id="professor" name="professor" variant="outlined" onChange={event => setProf(event.target.value)} sx={{ width: '300px', height: '50px' }}>
              <MenuItem value="สมชาย">สมชาย</MenuItem>
              <MenuItem value="สมหมาย">สมหมาย</MenuItem>
              <MenuItem value="สมคิด">สมคิด</MenuItem>
            </Select>
          </Box>
        </Grid>

        {/* Subject and Section Fields */}
        <Grid item xs={12}>
          <Box display="flex" alignItems="center">
            <Typography variant='h6' sx={{ mr: 2, backgroundColor: "#902923", borderRadius: '8px', padding: '8px 18px', color: '#FFFFFF' }}>
              รหัสวิชา
            </Typography>
            <Select id="subject" name="subject" variant="outlined" onChange={event => setSubject(event.target.value)} sx={{ width: '150px', height: '50px' }}>
              <MenuItem value="CN101">CN101</MenuItem>
              <MenuItem value="SF221">SF221</MenuItem>
              <MenuItem value="SF212">SF212</MenuItem>
            </Select>

            <Typography variant='h6' sx={{ ml: 4, mr: 2, backgroundColor: "#902923", borderRadius: '8px', padding: '8px 18px', color: '#FFFFFF' }}>
              กลุ่มเรียนที่ศึกษา
            </Typography>
            <TextField id="section" label="กรอกรหัสวิชา" variant="outlined" onChange={event => setSection(event.target.value)} sx={{ ml: 2, flexGrow: 1 }} />
          </Box>
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12} sx={{ mt:5, textAlign: 'center' }}>
          <Button variant="contained" onClick={handleSubmit} sx={{mb:7,width:150,height:50,borderRadius:8}}>Submit</Button>
          <Typography variant='h6'sx={{color:'#E1003C'}}>คำร้องที่ถูกบันทึกและส่งจะไม่สามารถแก้ไขได้ กรุณาตรวจสอบข้อมูลก่อนบันทึก</Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Normal_Request;
