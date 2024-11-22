import React, { useState, useEffect } from "react";
import Header from "../components/common/header/Header";
import SubHeader from "../components/common/subheader/SubHeader";
import TopicBox from "../components/common/topicbox/TopicBox";
import SelectSemester from "../components/common/selectsemester/SelectSemester";
import SelectSubject from "../components/common/Select/SelectSubject";
import TextInput from "../components/common/textinput/TextInput";
import SubmitButton from "../components/common/submitbutton/SubmitButton";
import { Box, Toolbar } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
} from "@mui/material";

function ExemptionTU() {
  // Common fields
  const [form_type] = useState("เทียบโอนรายวิชา");
  const [semester_year, setSemesterYear] = useState("");
  const [semester, setSemester] = useState("");
  const [senderId, setSenderID] = useState("");
  const [status] = useState("pending");

  // Additional fields
  const [title] = useState("-");
  const [subject1, setSubject1] = useState("");
  const [subject2, setSubject2] = useState("");
  const [subject3, setSubject3] = useState("");
  const [subject4, setSubject4] = useState("");
  const [file, setFile] = useState(null);

  const form_location = "http://localhost:8000/forms";
  const navigate = useNavigate();

  useEffect(() => {
    const username = localStorage.getItem("username");
    if (username) {
      setSenderID(username);
    }
  }, []);

  const FormHandler = () => {
    const additional_fields = {
      title: title,
      subject1: subject1,
      subject2: subject2,
      subject3: subject3,
      subject4: subject4,
    };

    // Data to be sent to backend, structured for your backend
    const formData = {
      form_type: form_type,
      semester_year: semester_year,
      semester: semester,
      senderId: senderId,
      status: status,
      additional_fields: additional_fields,
    };

    // Post request to the backend
    axios
      .post(form_location, formData)
      .then((res) => {
        console.log("Form submitted successfully:", res);
        alert("ส่งคำร้องสำเร็จ"); // Success alert
      })
      .catch((err) => {
        console.error("Error posting form data:", err);
        alert("เกิดข้อผิดพลาดในการส่งคำร้อง");
      });
  };

  const handleSubmit = () => {
    FormHandler();
    navigate("/");
  };
  return (
    <Container maxWidth="md" sx={{ mt: 14, mb: 5 }}>
      <Grid
        container
        sx={{
          textAlign: "center",
          borderBottom: 2,
          borderColor: "divider",
          pb: 4,
        }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            คำร้องยื่นผลขอยกเว้นรายวิชา TU
          </Typography>
          <Typography variant="h5">กลุ่มวิชาพื้นฐานมหาวิทยาลัยธรรมศาสตร์ (วิชา TU)</Typography>
        </Grid>
      </Grid>

      {/* Subtitle Section */}
      <Grid container sx={{ mt: 5, textAlign: "center", pb: 4 }}>
        <Grid item xs={12}>
          <Typography variant="h5">กรอกข้อมูลคำร้อง</Typography>
          <Typography variant="h6">
            โปรดกรอกข้อมูลให้ถูกต้องและครบถ้วนเพื่อความรวดเร็วในการดำเนินการ
          </Typography>
        </Grid>
      </Grid>
      {/* Semester Placing */}
      <Box>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Box display="flex" alignItems="center">
              <Typography
                variant="h6"
                sx={{
                  mr: 2,
                  backgroundColor: "#902923",
                  borderRadius: "8px",
                  padding: "8px 18px",
                  color: "#FFFFFF",
                }}
              >
                ปีการศึกษา
              </Typography>
              <TextField
                id="semester_year"
                label="กรอกปีการศึกษา"
                variant="outlined"
                onChange={(event) => setSemesterYear(event.target.value)}
                sx={{ borderRadius: 5, ml: 2, flexGrow: 1 }}
              />

              <Typography
                variant="h6"
                sx={{
                  borderRadius: 5,
                  ml: 4,
                  mr: 2,
                  backgroundColor: "#902923",
                  borderRadius: "8px",
                  padding: "8px 18px",
                  color: "#FFFFFF",
                }}
              >
                ภาคการศึกษา
              </Typography>
              <Select
                id="semester"
                name="semester"
                variant="outlined"
                onChange={(event) => setSemester(event.target.value)}
                sx={{ borderRadius: 5, width: "150px", height: "50px" }}
              >
                <MenuItem value="1">1</MenuItem>
                <MenuItem value="2">2</MenuItem>
                <MenuItem value="summer">summer</MenuItem>
              </Select>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{ mt: 1, display: "flex", justifyContent: "start" }}>
              <Box sx={{ mr: 3 }}>
                <TopicBox text="รหัสวิชา" padding="8px 17px" />
              </Box>
              <SelectSubject
                width="720px"
                onChange={(event) => setSubject1(event.target.value)}
              />
            </Box>
            <Box sx={{ mt: 1, display: "flex", justifyContent: "start" }}>
              <Box sx={{ mr: 3 }}>
                <TopicBox text="รหัสวิชา" padding="8px 17px" />
              </Box>
              <SelectSubject
                width="720px"
                onChange={(event) => setSubject2(event.target.value)}
              />
            </Box>
            <Box sx={{ mt: 1, display: "flex", justifyContent: "start" }}>
              <Box sx={{ mr: 3 }}>
                <TopicBox text="รหัสวิชา" padding="8px 17px" />
              </Box>
              <SelectSubject
                width="720px"
                onChange={(event) => setSubject3(event.target.value)}
              />
            </Box>
            <Box sx={{ mt: 1, display: "flex", justifyContent: "start" }}>
              <Box sx={{ mr: 3 }}>
                <TopicBox text="รหัสวิชา" padding="8px 17px" />
              </Box>
              <SelectSubject
                width="720px"
                onChange={(event) => setSubject4(event.target.value)}
              />
            </Box>

            {/* ผลการสอบ TU Upload */}
            <Grid item xs={12} sx={{ mt: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                แนบไฟล์คำอธิบายเพิ่มเติมรายวิชา (PDF)
              </Typography>
              <Box
                sx={{
                  mt: 1,
                  padding: "16px 6px",
                  border: "1px dashed grey",
                  borderRadius: 4,
                }}
              >
                <input
                  type="file"
                  accept="application/pdf"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </Box>
            </Grid>
            <Box>
              <SubmitButton onClick={handleSubmit} />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default ExemptionTU;
