import React, { useState, useEffect } from 'react';
import './ReqCSS/DefaultRequest.css'
import NavbarReq from '../../components/NavbarReq';
import axios from 'axios'

export default function DefaultRequest()  {
  
  const [form_type] = useState('Default')
  const [semester_year, setSemesterYear] = useState('')
  const [semester, setSemester] = useState('')
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [professor, setProf] = useState('')
  const [subject, setSubject] = useState('')
  const [section, setSection] = useState('')
  const [senderId, setSenderID] = useState(6610742360)
  const [status, setStatus] = useState('pending')

  const form_location = 'http://localhost:8000/forms'

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
    e.preventDefault();
    alert("ส่งคำร้องสำเร็จ")
  };

  return (
    <div className='whole-page'>
      <NavbarReq/>
      <div className="form-container">
        <h1>คำร้องทั่วไป</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
              <label htmlFor="semesterYear">ปีการศึกษา</label>
            <input
              type="text"
              name="semester_year"
              id="semesterYear"
              placeholder="user input here..."
              onChange={event => setSemesterYear(event.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label htmlFor="semester">ภาคการศึกษา</label>
            <select
              name="semester"
              id="semester"
              onChange={event => setSemester(event.target.value)}
              required
            >
              <option value="">user choose semester here</option>
             <option value="1">1</option>
             <option value="2">2</option>
             <option value="summer">Summer</option>
            </select>
          </div>

          <div className="input-group">
           <label htmlFor="reqTitle">หัวข้อคำร้อง</label>
            <input
             type="text"
              name="reqTitle"
              id="reqTitle"
              placeholder="user input here..."
              onChange={event => setTitle(event.target.value)}
              required
           />
         </div>

        <div className="input-group">
          <label htmlFor="reqContent">ความประสงค์(ระบุเหตุผลประกอบ)</label>
          <textarea
            type="text"
            name="reqContent"
            id="reqContent"
            className="large-input"
            placeholder="user input here..."
            onChange={event => setContent(event.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="teacher">อาจารย์ผู้สอน</label>
          <select
            name="teacher"
            id="teacher"
            onChange={event => setProf(event.target.value)}
            required
          >
            <option value="">user choose teacher here...</option>
            <option value="somchai">สมชาย</option>
            <option value="somying">สมหญิง</option>
            <option value="art">อาร์ต</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="courseNumber">รหัสวิชา</label>
          <select
            name="course_number"
            id="courseNumber"
            onChange={event => setSubject(event.target.value)}
            required
          >
            <option value="">user choose course number here...</option>
            <option value="ST247">ST247</option>
            <option value="CN101">CN101</option>
            <option value="SF221">SF221</option>
            <option value="EL105">EL105</option>
          </select>
        </div>

        <div className="input-group">
          <label htmlFor="section">เซคชั้นที่ศึกษา</label>
          <input
            type="text"
            name="section"
            id="section"
            placeholder="user input here..."
            onChange={event => setSection(event.target.value)}
            required
          />
        </div>

        {/*ที่ส่งไฟล์ เก็บไว้ก่อน เผื่อใช้*/}
        {/* <div className="input-group">
          <label htmlFor="fileUpload">ไฟล์แนบ</label>
          <input
            type="file"
            name="file"
            id="fileUpload"
            onChange={handleChange}
          />
        </div> */}

        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
    
  );
}
