import React, { useState, useEffect } from "react";
import { Container, Paper, Typography, Grid, Button, Box, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import FormDetails from "../method/formDetails";
import axios from "axios";

const getRole = () => {
  return 'professor';
};

export default function Detail() {
  const Role = getRole();
  const { form_id } = useParams(); // Extract the formId from the URL
  const { form, loading, error } = FormDetails(form_id); 
  const [professorUsername, setProfessorUsername] = useState("");

  useEffect(() => {
    // Get professor name from localStorage
    const storedProfessorUsername = localStorage.getItem("username");
    if (storedProfessorUsername) {
      setProfessorUsername(storedProfessorUsername);
    }
  }, []);

  console.log("form id: ", form_id)

  const [disapprovalComment, setDisapprovalComment] = useState("");  // State for disapproval comment
  const [status, setStatus] = useState("");  // State to track approval status

  if (loading) {
    return <div>Loading...</div>; // Show loading indicator
  }

  if (error || !form) {
    return <div>Error loading form data.</div>; // Show error if form is null or failed to load
  }

  const handleApprove = async () => {
    try {
      const response = await axios.patch(`http://localhost:8000/forms/${form_id}/approve`, {
        professor: professorUsername,  // ใช้ชื่ออาจารย์ที่ถูกต้องจาก localStorage
        status: "approved",  // ส่งสถานะ approved
      });
      setStatus("approved");
      alert(response.data.message); // Notify success
    } catch (error) {
      console.error("Error approving form:", error);
      if (error.response) {
        console.error("Response error:", error.response.data);  // แสดงข้อมูลผิดพลาดจากเซิร์ฟเวอร์
      }
    }
  };

const handleDisapprove = async () => {
    if (!disapprovalComment.trim()) {
      alert("Please provide a comment for disapproval.");
      return;
    }
    try {
      const response = await axios.patch(`http://localhost:8000/forms/${form.form_id}/approve`, {
        professor: professorUsername,  // ใช้ชื่ออาจารย์ที่ถูกต้องจาก localStorage
        status: "disapproved",  // ส่งสถานะ disapproved
        comment: disapprovalComment,  // ส่งข้อความคำอธิบายในการไม่อนุมัติ
      });
      setStatus("disapproved");
      alert(response.data.message); // Notify success
    } catch (error) {
      console.error("Error disapproving form:", error);
      if (error.response) {
        console.error("Response error:", error.response.data);  // แสดงข้อมูลผิดพลาดจากเซิร์ฟเวอร์
      }
    }
  };

  return (
    <Container>
      <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto" }}>
        <Box sx={{ mt: 4.9, mb: 3, width: "100%", height: "20%", textAlign: "center" }}>
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            รายละเอียดคำร้อง
          </Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            REQUEST DETAIL
          </Typography>
        </Box>
        <Box sx={{ width: "100%", height: "70%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}></Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto" }}>
        <Box sx={{ mt: 2, mb: 2, width: "100%", height: "20%", textAlign: "left", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Box display={"flex"}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              หัวข้อคำร้อง:
            </Typography>
            <Typography variant="h6" sx={{ ml: 1, fontWeight: "bold" }}>
              {form?.additional_fields?.title}
            </Typography>
          </Box>
          <Box sx={{ backgroundColor: "#FFC107", borderRadius: "42px", boxShadow: "none", px: 2, py: 1, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}>
            <Typography sx={{ color: "white", fontWeight: "bold" }}>
              รอการอนุมัติ
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "70%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}></Box>
        </Box>
      </Box>
      <Paper elevation={0} sx={{ p: 4 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
          <Grid container spacing={3}>
            <Grid display={"flex"} item xs={12} sm={6}>
              <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ fontSize: "1.1rem" }}>
                เขียนวันที่ :
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: "1.1rem" }}>
                {form?.date}
              </Typography>
            </Grid>
            <Grid display={"flex"} item xs={12} sm={6}>
              <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ fontSize: "1.1rem" }}>
                อาจารย์ที่ปรึกษา :
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: "1.1rem" }}>
                {form?.professor}
              </Typography>
            </Grid>
          </Grid>

          <Box display={"flex"}>
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ fontSize: "1.1rem" }}>
              ประเภทคำร้อง :
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 1, fontSize: "1.1rem" }}>
              {form?.form_type}
            </Typography>
          </Box>

          <Box display={"flex"}>
            <Box sx={{ width: "15%", mr: 0 }}>
              <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ fontSize: "1.1rem" }}>
                คำอธิบายประกอบ :
              </Typography>
            </Box>
            <Box sx={{ ml: 0, width: "88%" }}>
              <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: "pre-line", fontSize: '1.1rem' }}>
                {form?.additional_fields?.content}
              </Typography>
            </Box>
          </Box>

          <Box display={"flex"}>
            <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ fontSize: "1.1rem" }}>
              ไฟล์แนบประกอบ :
            </Typography>
            <Box sx={{ ml: 3, display: "flex", alignItems: "start", gap: 1 }}>
              <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
                file.pdf
              </Typography>
              <Button variant="text" size="small" sx={{ color: "primary.main", textTransform: "none", fontSize: '1.1rem', alignContent: "center" }}>
                (VIEW PDF)
              </Button>
            </Box>
          </Box>

          {Role === 'professor' && (
            <Box sx={{ display: "flex", justifyContent: "flex-end", gap: 2, mt: 2 }}>
              <TextField
                label="เหตุผลในการไม่อนุมัติ"
                multiline
                rows={4}
                fullWidth
                value={disapprovalComment}
                onChange={(e) => setDisapprovalComment(e.target.value)}
                disabled={status === "approved"}  // Disable comment field once approved
              />
              <Button
                sx={{ borderRadius: "42px", boxShadow: "none", px: 2, py: 1 }}
                variant="contained"
                color="error"
                onClick={handleDisapprove}
                disabled={status === "approved"}  // Disable if already approved
              >
                ไม่อนุมัติ
              </Button>
              <Button
                sx={{ borderRadius: "42px", boxShadow: "none", px: 2, py: 1 }}
                variant="contained"
                color="success"
                onClick={handleApprove}
                disabled={status === "disapproved"}  // Disable if already disapproved
              >
                อนุมัติ
              </Button>
            </Box>
          )}
        </Box>
      </Paper>
    </Container>
  );
}
