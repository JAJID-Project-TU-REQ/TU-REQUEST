import React, { useEffect, useState } from "react";
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
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ProfessorForms from "../method/ProfessorForms";
import { Link } from "react-router-dom";
import { Toolbar, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

function ProfessorDashboard() {

  
  const {form_type} = useParams()
  console.log("Params: " + form_type)
  const [professorUsername, setProfessorUsername] = useState("");

  
  useEffect(() => {

    const storedProfessorUsername = localStorage.getItem("username");
    if (storedProfessorUsername) {
      setProfessorUsername(storedProfessorUsername);
    }
  }, []);


  const { forms: fetchedForms, loading, error } = ProfessorForms(professorUsername);
  console.log(fetchedForms);

  console.log("jeang: "+fetchedForms.form_type)

  const allPendingForms = fetchedForms?.filter(
    (form) =>
      form.approval_chain.some(
        (entry) => entry.professor === professorUsername && entry.status === "pending"
      )
  ) || [];
  const normalPendingForms = fetchedForms?.filter(
    (form) =>
      form.form_type === "ทั่วไป" &&
      form.approval_chain.some(
        (entry) => entry.professor === professorUsername && entry.status === "pending"
      )
  ) || [];
  const transferPendingForms = fetchedForms?.filter(
    (form) =>
      form.form_type === "เทียบโอนรายวิชา(มหาวิทยาลัยอื่น)" &&
      form.approval_chain.some(
        (entry) => entry.professor === professorUsername && entry.status === "pending"
      )
  ) || [];
  const transferELPendingForms = fetchedForms?.filter(
    (form) =>
      form.form_type === "เทียบโอนรายวิชา(E-Learning)" &&
      form.approval_chain.some(
        (entry) => entry.professor === professorUsername && entry.status === "pending"
      )
  ) || [];
  const transferTUPendingForms = fetchedForms?.filter(
    (form) =>
      form.form_type === "เทียบโอนรายวิชา(TU)" &&
      form.approval_chain.some(
        (entry) => entry.professor === professorUsername && entry.status === "pending"
      )
  ) || [];
  const transferEnglishPendingForms = fetchedForms?.filter(
    (form) =>
      form.form_type === "เทียบโอนรายวิชา(วิชาภาษาอังกฤษ)" &&
      form.approval_chain.some(
        (entry) => entry.professor === professorUsername && entry.status === "pending"
      )
  ) || [];
  const quitPendingForms = fetchedForms?.filter(
    (form) =>
      form.form_type === "ลาออก" &&
      form.approval_chain.some(
        (entry) => entry.professor === professorUsername && entry.status === "pending"
      )
  ) || [];


  const allcompletedForms = fetchedForms?.filter(
    (form) =>
      
      form.approval_chain.some(
        (entry) =>
          entry.professor === professorUsername &&
          (entry.status === "approved" || entry.status === "disapproved")
      )
  ) || [];
  const normalCompletedForms = fetchedForms?.filter(
    (form) =>
      form.form_type === "ทั่วไป" &&
      form.approval_chain.some(
        (entry) =>
          entry.professor === professorUsername &&
          (entry.status === "approved" || entry.status === "disapproved")
      )
  ) || [];
  const transferCompletedForms = fetchedForms?.filter(
    (form) =>
      form.form_type === "เทียบโอนรายวิชา(มหาวิทยาลัยอื่น)" &&
      form.approval_chain.some(
        (entry) =>
          entry.professor === professorUsername &&
          (entry.status === "approved" || entry.status === "disapproved")
      )
  ) || [];
  const transferELCompletedForms = fetchedForms?.filter(
    (form) =>
      form.form_type === "เทียบโอนรายวิชา(E-Learning)" &&
      form.approval_chain.some(
        (entry) =>
          entry.professor === professorUsername &&
          (entry.status === "approved" || entry.status === "disapproved")
      )
  ) || [];
  const transferTUCompletedForms = fetchedForms?.filter(
    (form) =>
      form.form_type === "เทียบโอนรายวิชา(TU)" &&
      form.approval_chain.some(
        (entry) =>
          entry.professor === professorUsername &&
          (entry.status === "approved" || entry.status === "disapproved")
      )
  ) || [];
  const transferEnglishCompletedForms = fetchedForms?.filter(
    (form) =>
      form.form_type === "เทียบโอนรายวิชา(วิชาภาษาอังกฤษ)" &&
      form.approval_chain.some(
        (entry) =>
          entry.professor === professorUsername &&
          (entry.status === "approved" || entry.status === "disapproved")
      )
  ) || [];
  const quitCompletedForms = fetchedForms?.filter(
    (form) =>
      form.form_type === "ลาออก" &&
      form.approval_chain.some(
        (entry) =>
          entry.professor === professorUsername &&
          (entry.status === "approved" || entry.status === "disapproved")
      )
  ) || [];


    let pendingForms = allPendingForms;
    let completedForms = allcompletedForms;

    if (form_type === 'normal_request') {
      pendingForms = normalPendingForms;
      completedForms = normalCompletedForms; 
    }else if (form_type === 'transfer_grade'){
      pendingForms = transferPendingForms
      completedForms = transferCompletedForms
    }else if (form_type === 'exemption_e-learning'){
      pendingForms = transferELPendingForms
      completedForms = transferELCompletedForms
    }else if (form_type === 'exemption_english'){
      pendingForms = transferEnglishPendingForms
      completedForms = transferEnglishCompletedForms
    }else if (form_type === 'exemption_TU'){
      pendingForms = transferTUPendingForms
      completedForms = transferTUCompletedForms
    }else if (form_type === 'quit'){
      pendingForms = quitPendingForms
      completedForms = quitCompletedForms
    }
  

  // Declare a constant 'forms' to store the fetched data
  const role = localStorage.getItem('role');
  console.log(role === 'professor');
  console.log(localStorage.getItem('token'));

  return (
    <div>
      <Toolbar />
      <Container sx={{ p:2}} maxWidth="lg">
        <Box>
          <Typography variant="h5" sx={{fontWeight:'bold'}}>คำร้องรอดำเนินการ</Typography>
          <Typography variant="h6" sx={{fontWeight:'bold'}}>PENDING LIST</Typography>
        </Box>    
        <Paper sx={{mt:1, p:2 }}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ py: 0.5 }}>วันที่</TableCell>
                  <TableCell align="center" sx={{ py: 0.5 }}>ประเภท</TableCell>
                  <TableCell align="center" sx={{ py: 0.5 }}>หัวข้อคำร้อง</TableCell>
                  <TableCell align="center" sx={{ py: 0.5 }}>รายละเอียด</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading && <TableRow><TableCell colSpan={4}>Loading...</TableCell></TableRow>}
                {error && <TableRow><TableCell colSpan={4}>{error}</TableCell></TableRow>}
                {pendingForms.length > 0 ? (
                  pendingForms.sort((a, b) => new Date(b.date) - new Date(a.date)).map((form) => (
                    <TableRow key={form.form_id}>
                      <TableCell align="center" sx={{ py: 0.5 }}>{form.date}</TableCell>
                      <TableCell align="center" sx={{ py: 0.5 }}>{form.form_type}</TableCell>
                      <TableCell align="center" sx={{ py: 0.5 }}>{form.additional_fields.title}</TableCell>
                      <TableCell align="center" sx={{ py: 0.5 }}>
                        <ButtonGroup color="primary">
                          <Button component={Link} to={`professor-detail/${form.form_id}`}>รายละเอียด</Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center">ไม่มีคำร้องที่รอดำเนินการ</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
      <Container sx={{mt:15, p:2}} maxWidth="lg">
      <Box sx={{mt:10}}>
        <Typography variant="h5" sx={{fontWeight:'bold'}}>คำร้องดำเนินการแล้ว</Typography>
        <Typography variant="h6" sx={{fontWeight:'bold'}}>COMPLETED LIST</Typography>
      </Box>    
        <Paper sx={{ p:2 }}>
          <TableContainer component={Paper}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="center" sx={{ py: 0.5 }}>วันที่</TableCell>
                  <TableCell align="center" sx={{ py: 0.5 }}>ประเภท</TableCell>
                  <TableCell align="center" sx={{ py: 0.5 }}>หัวข้อคำร้อง</TableCell>
                  <TableCell align="center" sx={{ py: 0.5 }}>รายละเอียด</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loading && <TableRow><TableCell colSpan={4}>Loading...</TableCell></TableRow>}
                {error && <TableRow><TableCell colSpan={4}>{error}</TableCell></TableRow>}
                {completedForms.length > 0 ? (
                  completedForms.sort((a, b) => new Date(b.date) - new Date(a.date)).map((form) => (
                    <TableRow key={form.form_id}>
                      <TableCell align="center" sx={{ py: 0.5 }}>{form.date}</TableCell>
                      <TableCell align="center" sx={{ py: 0.5 }}>{form.form_type}</TableCell>
                      <TableCell align="center" sx={{ py: 0.5 }}>{form.additional_fields.title}</TableCell>
                      <TableCell align="center" sx={{ py: 0.5 }}>
                        <ButtonGroup color="primary">
                          <Button component={Link} to={`professor-detail/${form.form_id}`}>รายละเอียด</Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center">ไม่มีคำร้องที่ดำเนินการแล้ว</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </div>
  );
}

export default ProfessorDashboard;
