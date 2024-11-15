import React from 'react'
import Header from '../components/common/header/Header'
import SubHeader from '../components/common/subheader/SubHeader'
import TopicBox from '../components/common/topicbox/TopicBox'
import SelectSemester from '../components/common/selectsemester/SelectSemester'
import SelectSubject from '../components/common/Select/SelectSubject'
import TextInput from '../components/common/textinput/TextInput'
import { Box } from '@mui/material'

function TransferGrade() {
  return (
    <div>
      <Header text="ควย"/>
      <SubHeader/>
      <Box width="80%%" sx={{display: 'flex', justifyContent: 'center', flexGrow: 1}}>
        <TopicBox text="ปีการศึกษา" padding="12px 35px"/>
        <TextInput label = "ควย" width/>
        <TopicBox text="ภาคการศึกษา" padding="8px"/>
        <SelectSemester />
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <TopicBox text="รหัสวิชา" padding="8px 18px"/>
        <SelectSubject/>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <TopicBox text="รหัสวิชา" padding="8px 18px"/>
        <SelectSubject/>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <TopicBox text="รหัสวิชา" padding="8px 18px"/>
        <SelectSubject/>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <TopicBox text="รหัสวิชา" padding="8px 18px"/>
        <SelectSubject/>
      </Box>
    </div>
  )
}

export default TransferGrade
