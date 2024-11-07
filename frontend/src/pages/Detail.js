import React, { useEffect, useState } from "react";
import { Box, colors, Typography } from "@mui/material";
import Grid from '@mui/system/Grid';
import styled from '@mui/system/styled';

const Item = styled('div')(({ theme }) => ({
    backgroundColor: '#fff',
    padding: theme.spacing(1),
    borderRadius: '4px',
    textAlign: 'center',
    ...theme.applyStyles('dark', {
      backgroundColor: '#1A2027',
      borderColor: '#444d58',
    }),
  }));

const Detail = () => {
  return (
    <>
      <Box>
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
      <Box>
        <Box
          sx={{
            mt: 2,
            mb: 2,
            ml: 8,
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
          <Box sx={{ backgroundColor: "#FFC107",borderRadius: '42px', boxShadow: 'none' ,mr:15, px: 2, py: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
            <Typography sx={{color:'white' , fontWeight:'bold'}} >รอการอนุมัติ</Typography>
            </Box>
        </Box>
        <Box sx={{ width: "100%", height: "70%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}></Box>
        </Box>
      </Box>
      <Box>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Item> รายละเอียดคำร้อง</Item>
        </Grid>
        <Grid size={8}>
          <Item>size=8</Item>
        </Grid>
      </Grid>
    </Box>

    </>
  );
};

export default Detail;
