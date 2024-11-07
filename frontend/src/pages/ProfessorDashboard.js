import React, { useEffect, useState } from "react";
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import ButtonGroup from '@mui/material/ButtonGroup';
import { Link } from "react-router-dom";

function ProfessorDashboard() {
  const [forms, setForms] = useState([]);
  const handleFormsFetched = (fetchedForms) => {
    setForms(fetchedForms); // Update state with the fetched forms
  };
  
  return (
    <Container sx={{ p:2 }} maxWidth="lg">    
      <Paper sx={{ p:2 }}>
        <Box display="flex">
          <Box flexGrow={1}>
          </Box>
        </Box>
        <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">วันที่</TableCell>
              <TableCell align="center">ประเภท</TableCell>
              <TableCell align="center">หัวข้อคำร้อง</TableCell>
              <TableCell align="center">รายละเอียด</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
              <TableRow >
                <TableCell align="center">today</TableCell>
                <TableCell align="center">default</TableCell>
                <TableCell align="center">title</TableCell>
                <TableCell align="center">
                  <ButtonGroup color="primary" aria-label="outlined primary button group">
                    <Button >รายละเอียด</Button>
                  </ButtonGroup>
                </TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      </Paper>
    </Container>
  )
}

export default ProfessorDashboard
