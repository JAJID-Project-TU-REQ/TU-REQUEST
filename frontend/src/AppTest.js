import React from 'react'
import Header from './components/common/header/Header'
import SubHeader from './components/common/subheader/SubHeader'
import InformationBox from './components/common/informationbox/InformationBox'

const AppTest = () => {
  return (
    <>
        <Header text='คำร้องทั่วไป' />
        <SubHeader />
        <InformationBox text='Nigger' padding='200px 30px '/>
    </>
  )
}

export default AppTest