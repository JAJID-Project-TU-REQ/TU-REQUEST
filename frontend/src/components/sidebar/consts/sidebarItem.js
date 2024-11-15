import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PaidIcon from '@mui/icons-material/Paid';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import SmsIcon from '@mui/icons-material/Sms';
import BookmarksIcon from '@mui/icons-material/Bookmarks';


export const studentItem = [
    {
        id: 1,
        icon: <ImportContactsIcon/>,
        label: 'คำร้องประเภทวิชาการ',
        children: [
            {
                id: 1,
                label: 'คำร้องเพิ่มรายวิชา',
                routes: 'normal-request'
            },
            {
                id: 2,
                label: 'คำร้องถอนรายวิชา',
                routes: 'normal-request'
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
                routes: 'normal-request'
              },
              {
                id: 2,
                label: 'คำร้องถอนรายวิชา',
                routes: 'normal-request'
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
                 routes: 'normal-request'
               },
               {
                 id: 2,
                 label: 'คำร้องถอนรายวิชา',
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
                 label: 'คำร้องเพิ่มรายวิชา',
                 routes: 'normal-request'
               },
               {
                 id: 2,
                 label: 'คำร้องถอนรายวิชา',
                 routes: 'normal-request',
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
                 label: 'คำร้องเพิ่มรายวิชา',
                 routes: 'normal-request'
               },
               {
                 id: 2,
                 label: 'คำร้องถอนรายวิชา',
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
                routes: 'normal-request'
            },
            {
                id: 2,
                label: 'คำร้องถอนรายวิชา',
                routes: 'normal-request'
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
                 label: 'คำร้องเพิ่มรายวิชา',
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
                 label: 'คำร้องเพิ่มรายวิชา',
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