import React from "react";
import { Container, Paper, Typography, Grid, Button, Box } from "@mui/material";

const getRole = () => {
  // This should be replaced with actual logic to get the user role
  return 'professor'; // Example role
};

const Detail = () => {
  const Role = getRole();
  return (
    <>
      <Container>
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
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              หัวข้อคำร้อง
            </Typography>
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
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                  เขียนวันที่ :
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  11/10/2220
                </Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                  อาจารย์ที่ปรึกษา :
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  อาจารย์ มานี เเฟสใต้
                </Typography>
              </Grid>
            </Grid>

            <Box>
              <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                ประเภทคำร้อง :
              </Typography>
              <Typography variant="body2" color="text.secondary">
                ทั่วไป
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                คำอธิบายประกอบ :
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ whiteSpace: "pre-line" }}
              >
                กระผมจะขอทำเกรดรายวิชาเป็นอักษร I
                เนื่องจากผมไม่ได้เข้าสอบปลายภาค เพราะติดโควิด-19
                ตามที่ผมได้แนบใบรับรองแพทย์มาด้วยครับ ตอนนี้ผม
                หายป่วยแล้วครับและพร้อม ตามงานครับ
                ผมขอความกรุณาจากอาจารย์ผู้สอนด้วยครับ ขอบพระคุณครับ
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle2" fontWeight="bold" gutterBottom>
                ไฟล์แนบประกอบ :
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  file.pdf
                </Typography>
                <Button
                  variant="text"
                  size="small"
                  sx={{ color: "primary.main", textTransform: "none" }}
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

export default Detail;
