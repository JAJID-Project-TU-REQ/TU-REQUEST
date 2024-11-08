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
import useFetchForms from "../method/ProfessorForms";

function ProfessorDashboard() {
  const [professorName, setProfessorName] = useState("");

  useEffect(() => {
    // Get professor name from localStorage
    const storedProfessorName = localStorage.getItem("name_th");
    if (storedProfessorName) {
      setProfessorName(storedProfessorName);
    }
  }, []);

  // Fetch the forms using the custom hook
  const { forms: fetchedForms, loading, error } = useFetchForms(professorName);

  // Declare a constant 'forms' to store the fetched data
  const forms = fetchedForms;

  return (
    <div>
      <Container sx={{ p:2}} maxWidth="lg">    
        <Paper sx={{ p:2 }}>
          <Box display="flex">
            <Box flexGrow={1}></Box>
          </Box>
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
                {forms.length > 0 ? (
                  forms.map((form, index) => (
                    <TableRow key={index}>
                      <TableCell align="center" sx={{ py: 0.5 }}>{new Date(form.date).toLocaleDateString()}</TableCell>
                      <TableCell align="center" sx={{ py: 0.5 }}>{form.form_type}</TableCell>
                      <TableCell align="center" sx={{ py: 0.5 }}>{form.additional_fields.title}</TableCell>
                      <TableCell align="center" sx={{ py: 0.5 }}>
                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                          <Button>รายละเอียด</Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center">No forms found for this professor.</TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>

      <Container sx={{ p:2, mt: 40}} maxWidth="lg">    
        <Paper sx={{ p:2 }}>
          <Box display="flex">
            <Box flexGrow={1}></Box>
          </Box>
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
                {forms.length > 0 ? (
                  forms.map((form, index) => (
                    <TableRow key={index}>
                      <TableCell align="center" sx={{ py: 0.5 }}>{form.senderId}</TableCell>
                      <TableCell align="center" sx={{ py: 0.5 }}>{form.form_type}</TableCell>
                      <TableCell align="center" sx={{ py: 0.5 }}>{form.additional_fields.title}</TableCell>
                      <TableCell align="center" sx={{ py: 0.5 }}>
                        <ButtonGroup color="primary" aria-label="outlined primary button group">
                          <Button>รายละเอียด</Button>
                        </ButtonGroup>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center">No forms found for this professor.</TableCell>
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
