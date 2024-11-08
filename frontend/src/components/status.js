import React from "react";
import { Box, Tabs, Tab, Typography, Grid } from "@mui/material";
import PropTypes from "prop-types";
import ArticleIcon from "@mui/icons-material/Article";
import EditNoteIcon from "@mui/icons-material/EditNote";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Grid2 } from "@mui/material";
import Footer from "./footer";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

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
          <Typography>สถานะคำร้องทั้งหมดจะแสดงตรงนี้</Typography>
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

BasicTabs.propTypes = {
  value: PropTypes.number.isRequired,

  //   return (
  //     <Box>
  //       <Box sx={{ mt:4.9 , width: '100%',height:'30%' ,textAlign:'center'}}>
  //         <Typography variant='h4'>สถานะคำร้อง</Typography>
  //         <Typography variant='h6'>Request Status</Typography>
  //       </Box>
  //         <Box sx={{ width: '100%' ,height:'70%'}}>
  //         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
  //         <Tabs value={value} onChange={handleChange} centered>
  //             <Tab icon={<ArticleIcon />} iconPosition="start" label="คำร้องทั้งหมด" />
  //             <Tab icon={<EditNoteIcon/>}iconPosition="start" label="อยู่ระหว่างการดำเนินงาน" />
  //             <Tab icon= {<CheckCircleOutlineIcon/>} iconPosition="start" label="คำร้องเสร็จสิ้นแล้ว"/>
  //         </Tabs>
  //       </Box>
  //       <CustomTabPanel value={value} index={0}>
  //         Item One
  //       </CustomTabPanel>
  //       <CustomTabPanel value={value} index={1}>
  //         Item Two
  //       </CustomTabPanel>
  //       <CustomTabPanel value={value} index={2}>
  //         Item Three
  //       </CustomTabPanel>
  //     </Box>
  //     </Box>
  //   );
  // }
};
