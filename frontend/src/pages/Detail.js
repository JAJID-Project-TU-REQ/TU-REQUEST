import React from "react";
import { Box, Typography, Button } from "@mui/material";

const Detail = () => {
  return (
    <>
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
            Request Detail
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
      <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto" }}>
        <Box
          sx={{
            mt: 2,
            width: "100%",
            height: "20%",
            textAlign: "left",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              เขียนวันที่:
            </Typography>
            <Typography variant="body1" sx={{ ml: 1 }}>
              01/01/2023
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "70%" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              อาจารย์ที่รับเรื่อง:
            </Typography>
            <Typography variant="body1" sx={{ ml: 2 }}>
              XXXX
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "70%" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              ประเภทคำร้อง:
            </Typography>
            <Typography variant="body1" sx={{ ml: 2 }}>
              XXXX
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "70%" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              คำอธิบายประกอบ:
            </Typography>
            <Typography variant="body1" sx={{ ml: 2 }}>
              XXXX
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: "70%" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              ไฟล์แนบ:
            </Typography>
            <Typography variant="body1" sx={{ ml: 2 }}>
              XXXX
            </Typography>
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
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Button variant="contained" color="success" sx={{ mr: 2 }}>
              อนุมัติ
            </Button>
            <Button variant="contained" color="error">
              ไม่อนุมัติ
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Detail;
