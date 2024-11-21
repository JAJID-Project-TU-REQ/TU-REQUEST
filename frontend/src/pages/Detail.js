import React, { useEffect, useState } from "react";
import { Container, Paper, Typography, Grid, Button, Box, Toolbar } from "@mui/material";
import { useParams } from "react-router-dom";
import FormDetails from "../method/formDetails";
const getRole = () => {
  return 'professor';
};



export default function Detail() {

  const { form_id } = useParams(); // Extract the formId from the URL
  const { form, loading, error } = FormDetails(form_id);
  const [Role, setRole] = useState("");
  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    if (storedRole) {
      setRole(storedRole);
    }
  }, []);

  console.log("Form ID from URL:", form_id); // Check if formId is being retrieved
  console.log("Form Details:", form); // Check if form is being retrieved

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const handleViewPDF = (file_id) => {
    // This function would open the PDF in a new window or direct to a specific route
    window.open(`http://localhost:8000/pdf/${file_id}`, "_blank");
  };

  return (
    <>
      <Container>
        <Toolbar />
        <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto" }}>
          <Box
            sx={{
              mt: 4.9,
              mb: 3,
              width: "100%",
              height: "20%",
              textAlign: "center",
            }}
          >
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
          <Box
            sx={{
              mt: 2,
              mb: 2,
              width: "100%",
              height: "20%",
              textAlign: "left",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box display={"flex"}>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                หัวข้อคำร้อง:
              </Typography>
              <Typography variant="h6" sx={{ ml: 1, fontWeight: "bold" }}>
                {form.additional_fields.title}
              </Typography>
            </Box>
            <Box
              sx={{
                backgroundColor: "#FFC107",
                borderRadius: "42px",
                boxShadow: "none",
                px: 2,
                py: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
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
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: "1.1rem", ml: 1 }}>
                  {form.date}
                </Typography>
              </Grid>
              <Grid display={"flex"} item xs={12} sm={6}>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ fontSize: "1.1rem" }}>
                  อาจารย์ที่ปรึกษา :
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: "1.1rem" }}>
                  {form.professor}
                </Typography>
              </Grid>
            </Grid>

            <Box display={"flex"}>
              <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ fontSize: "1.1rem" }}>
                ประเภทคำร้อง :
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ ml: 1, fontSize: "1.1rem" }}>
                {form.form_type}
              </Typography>
            </Box>

            <Box display={"flex"}>
              <Box sx={{ width: "15%", mr: 0 }}>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ fontSize: "1.1rem" }}>
                  คำอธิบายประกอบ :
                </Typography>
              </Box>
              <Box sx={{ ml: 0, width: "88%", maxHeight: "200px", overflow: "auto", whiteSpace: "pre-wrap", wordWrap: "break-word" }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ whiteSpace: "pre-line", fontSize: '1.1rem' }}
                >
                  {form.additional_fields.content}
                </Typography>
              </Box>
            </Box>

            <Box display={"flex"} >
              <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ fontSize: "1.1rem" }}>
                ไฟล์แนบประกอบ :
              </Typography>
              <Box sx={{ ml: 3, display: "flex", alignItems: "start", gap: 1 }}>
                <Typography variant="body2" color="text.secondary" sx={{ fontSize: '1.2rem' }}>
                  {form.additional_fields.file_name}
                </Typography>
                <Button
                  variant="text"
                  size="small"
                  sx={{ color: "primary.main", textTransform: "none", fontSize: '1.1rem', alignContent: "center" }}
                  onClick={() => handleViewPDF(form.additional_fields.file_id)}
                >
                  (VIEW PDF)
                </Button>
              </Box>
            </Box>
            {Role === 'professor' && (
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  gap: 2,
                  mt: 2,
                }}
              >
                <Button
                  sx={{
                    borderRadius: "42px",
                    boxShadow: "none",
                    px: 2,
                    py: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  variant="contained"
                  color="error"
                >
                  ไม่อนุมัติ
                </Button>
                <Button
                  sx={{
                    borderRadius: "42px",
                    boxShadow: "none",
                    px: 2,
                    py: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                  variant="contained"
                  color="success"
                >
                  อนุมัติ
                </Button>
              </Box>
            )}
          </Box>
        </Paper>
      </Container>
    </>
  );
};
