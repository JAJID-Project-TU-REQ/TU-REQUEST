import React, { useEffect, useState } from "react";
import { Box, Tabs, Tab, Typography, Grid } from "@mui/material";
import PropTypes from "prop-types";
import ArticleIcon from "@mui/icons-material/Article";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Grid2,Container,Paper,Table,TableContainer,TableHead,TableRow,TableCell,TableBody,ButtonGroup,Button } from "@mui/material";
import Footer from "./footer";
import { Link } from "react-router-dom";
import StudentForms from "../method/StudentForms";


function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  // // Fetch the forms using the custom hook
  // const { forms: fetchedForms, loading, error } = StudentForms(studentUsername);

  // // Declare a constant 'forms' to store the fetched data
  // const forms = fetchedForms || [];

  // console.log(forms);

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const [studentUsername, setStudentUsername] = useState("");
  const { forms, loading, error } = StudentForms(studentUsername);

  useEffect(() => {
    // Get professor name from localStorage
    const storedStudentUsername = localStorage.getItem("username");
    if (storedStudentUsername) {
      setStudentUsername(storedStudentUsername);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Box sx={{ mt: 4.9, width: "100%", height: "20%", textAlign: "center" }}>
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          สถานะคำร้อง
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
           REQUEST STATUS
        </Typography>
      </Box>
      <Box sx={{ width: "100%", height: "70%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs value={value} onChange={handleChange} centered>
            <Tab
              icon={<ArticleIcon />}
              iconPosition="start"
              label="คำร้องทั้งหมด"
            />
            <Tab
              icon={<EditNoteIcon />}
              iconPosition="start"
              label="อยู่ระหว่างการดำเนินงาน"
            />
            <Tab
              icon={<CheckCircleOutlineIcon />}
              iconPosition="start"
              label="คำร้องเสร็จสิ้นแล้ว"
            />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <TableContainer>
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
                  forms.sort((a, b) => new Date(b.date) - new Date(a.date)).map((form) => (
                    console.log(form.date),
                    <TableRow>
                      <TableCell align="center" sx={{ py: 0.5 }}>{form.date}</TableCell>
                      <TableCell align="center" sx={{ py: 0.5 }}>{form.form_type}</TableCell>
                      <TableCell align="center" sx={{ py: 0.5 }}>{form.additional_fields.title}</TableCell>
                      <TableCell align="center" sx={{ py: 0.5 }}>
                        <Button component={Link} to={`/main/student-dashboard/form-detail/${form.form_id}`} >รายละเอียด</Button>
                      </TableCell>
                    </TableRow>
               ))
              ) : (
                <TableRow>
                  <TableCell colSpan={4} align="center">No forms found for this professor.</TableCell>
                </TableRow>
              )}
            </TableBody>
          </TableContainer>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Typography>สถานะคำร้องระหว่างการดำเนินการ</Typography>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          <Typography>คำร้องเสร็จแล้ว</Typography>
        </CustomTabPanel>
        <Footer />
      </Box>
    </Box>
  );
}

