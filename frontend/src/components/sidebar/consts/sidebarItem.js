import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PaidIcon from '@mui/icons-material/Paid';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SmsIcon from '@mui/icons-material/Sms';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { lazy } from 'react';
import AddIcon from '@mui/icons-material/Add';


export const studentItem = [
    {
        id: 1,
        icon: <ImportContactsIcon/>,
        label: 'คำร้องประเภทวิชาการ',
        children: [
            {
                id: 1,
                label: 'คำร้องทั่วไป',
                routes: 'normal-request'
            },
            {
                id: 2,
                label: 'คำร้องจดทะเบียนรายวิชา',
                routes: 'add-subject'
            },
            {
                id: 3,
                label: 'คำร้องถอนรายวิชาล่าช้า',
                routes: 'withdraw-subject'
            },
            {
                id: 4,
                label: 'คำร้องขอจดทะเบียนต่ำกว่า/เกินกว่าข้อบังคับ',
                routes: 'normal-request'
            },
            {
                id: 5,
                label: 'คำร้องขอจดทะเบียนข้ามสถาบัน', 
                routes: 'normal-request'
            },
            {
                id: 4,
                label: 'คำร้องขอเปลี่ยนกลุ่มเรียน (Section)',
                routes: 'change-section'
            }

        ]
    },
    {
        id:2,
        icon: <PaidIcon/>,
        label: 'คำร้องประเภทค่าใช้จ่าย',
        children: [
           {
                id: 1,
                label: 'คำร้องขอผ่อนผันการชำระค่าใช้จ่ายจดทะเบียน',
                routes: 'normal-request'
            },
            {
                id: 2,
                label: 'คำร้องขอคืนค่าธรรมเนียม',
                routes: 'normal-request'
           },
           {
                id: 3,
                label: 'คำร้องขอปรับโครงสร้างหนี้ผ่อนผัน',
                routes: 'normal-request'
           }

        ]
    },
    {
        id: 3,
        icon: <PersonSearchIcon/>,
        label: 'คำร้องสถานะนักศึกษา',
        children: [
            {
                 id: 1,
                 label: 'คำร้องขอรับเอกสารฝึกงาน',
                 routes: 'normal-request'
               },
               {
                 id: 2,
                 label: 'คำร้องขอลาพักการศึกษา',
                 routes: 'normal-request'
            },
            {
                id: 3,
                label: 'คำร้องขอคืนสภาพนักศึกษา',
                routes: 'normal-request'
            },
            {
                id: 4,
                label: 'คำร้องรักษาสถานภาพ',
            },
            {
                id: 5,
                label: 'คำร้องขอลาออก',
                routes: 'normal-request'
            }

         ]
    },
    {
        id: 4,
        icon: <SmsIcon/>,
        label: "คำร้องอื่นๆ",
        children: [
            {
                 id: 1,
                 label: 'คำร้องขอทบทวนผลการศึกษา',
                 routes: 'normal-request'
               },
               {
                 id: 2,
                 label: 'คำร้องขอยื่นแจ้งจบล่าช้า',
                 routes: 'normal-request',
            },
            {
                id: 3,
                label: 'คำร้องขอยกเลิกการแจ้งจบ',
                routes: 'normal-request'
            },
            {
                id: 4,
                label: 'คำร้องขอกักตัวสอบ',
                routes: 'normal-request'
            },
            {
                id: 5,
                label: 'คำร้องกรณีขาดสอบ',
                routes: 'normal-request'
            },
            {
                id: 6,
                label: 'คำร้องขอเปิดรายวิชากรณีพิเศษ',
                routes: 'normal-request'
            }
         ]
    },
    {
        id: 5,
        icon: <BookmarksIcon/>,
        label: 'คำร้องเทียบโอนรายวิชา',
        children: [
            {
                 id: 1,
                 label: 'คำร้องเทียบโอนรายวิชา (มหาวิทยาลัยอื่น)',
                 routes: 'normal-request'
               },
               {
                 id: 2,
                 label: 'คำร้องเทียบโอนรายวิชาทั่วไป (E-Learning)',
                 routes: 'normal-request'
            },
            {
                id: 3,
                label: 'คำร้องเทียบโอนรายวิชาทั่วไป (วิชา TU)',
                routes: 'normal-request'
            },
            {
                id: 4,
                label: 'คำร้องเทียบโอนรายวิชาทั่วไป (วิชาภาษาอังกฤษ)',
                routes: 'normal-request'
            }
         ]
    }
]

export const professorItem = [
    {
        id: 1,
        icon: <ImportContactsIcon/>,
        label: 'คำร้องประเภทวิชาการ',
        children: [
            {
                id: 1,
                label: 'คำร้องเพิ่มรายวิชา',
                routes: ''
            },
            {
                id: 2,
                label: 'คำร้องถอนรายวิชา',
                routes: ''
            }
        ]
    },
    {
        id:2,
        icon: <PaidIcon/>,
        label: 'คำร้องประเภทค่าใช้จ่าย',
        children: [
           {
                id: 1,
                label: 'คำร้องเพิ่มรายวิชา',
                routes: ''
              },
              {
                id: 2,
                label: 'คำร้องถอนรายวิชา',
                routes: ''
           }
        ]
    },
    {
        id: 3,
        icon: <PersonSearchIcon/>,
        label: 'คำร้องสถาณะนักศึกษา',
        children: [
            {
                 id: 1,
                 label: 'คำร้องเพิ่มรายวิชา',
                 routes: ''
               },
               {
                 id: 2,
                 label: 'คำร้องถอนรายวิชา',
                 routes: ''
            }
         ]
    },
    {
        id: 4,
        icon: <SmsIcon/>,
        label: "คำร้องอื่นๆ",
        children: [
            {
                 id: 1,
                 label: 'คำร้องขอทบทวนผลการศึกษา',
                 routes: ''
               },
               {
                 id: 2,
                 label: 'คำร้องถอนรายวิชา',
                 routes: '',
            }
         ]
    },
    {
        id: 5,
        icon: <BookmarksIcon/>,
        label: 'คำร้องเทียบโอนรายวิชา',
        children: [
            {
                 id: 1,
                 label: 'คำร้องเทียบโอนรายวิชา (จากมหาวิทยาลัยอื่น)',
                 routes: ''
               },
               {
                 id: 2,
                 label: 'คำร้องถอนรายวิชา',
                 routes: ''
            }
         ]
    }
]