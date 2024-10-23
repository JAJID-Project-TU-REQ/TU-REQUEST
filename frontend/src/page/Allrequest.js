import React from "react";
import NavbarHome from "../components/NavbarHome";
import './Allrequest.css';
import DefaultButton from "../components/request button/DefaultButton";
import TransferGradeButton from "../components/request button/TransferGradeButton";
import OpenQuotaButton from "../components/request button/OpenQuotaButton";
import KeepExamButton from "../components/request button/KeepExamButton";
import MissedExamButton from "../components/request button/MissedExamButton";
import LateRegisButton from "../components/request button/LateRegisButton";
import RegisOtherButton from "../components/request button/RegisOtherButton";
import TranUniButton from "../components/request button/TranUniButton";
import LowerRegisButton from "../components/request button/LowerRegisButton";
import HigherRegisButton from "../components/request button/HigherRegisButton";
import PayRegisButton from "../components/request button/PayRegisButton";
import QuitButton from "../components/request button/QuitButton";
import BackStudyButton from "../components/request button/BackStudyButton";
import StopStudyButton from "../components/request button/StopStudy";
function Allreq() {

  return (
    <div>
        <NavbarHome/>
        <div className="request-container">
            <DefaultButton/>
            <TransferGradeButton/>
            <OpenQuotaButton/>
            <KeepExamButton/>
            <MissedExamButton/>
            <LateRegisButton/>
            <RegisOtherButton/>
            <TranUniButton/>
            <LowerRegisButton/>
            <HigherRegisButton/>
            <PayRegisButton/>
            <QuitButton/>
            <BackStudyButton/>
            <StopStudyButton/>
        </div>
    </div>
  );
}

export default Allreq;
