import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './page/Home.js';
import RequestInformation from './page/RequestInformation.js';
import History from './page/History.js';
import Allreq  from "./page/Allrequest.js";
//below this is req page
import DefaultRequest from './page/reqpage/DefaultRequest.js'
import TransferGrade from "./page/reqpage/TransferGrade.js";
import OpenQuota from "./page/reqpage/OpenQuota.js";
import KeepExam from "./page/reqpage/KeepExam.js";
import MissedExam from "./page/reqpage/MissedExam.js";
import LateRegis from "./page/reqpage/LateRegis.js";
import RegisOther from "./page/reqpage/RegisOther.js";
import TranUni from "./page/reqpage/TranUni.js";
import LowerRegis from "./page/reqpage/LowerRegis.js";
import HigherRegis from "./page/reqpage/HigherRegis.js";
import PayRegis from "./page/reqpage/PayRegis.js";
import Quit from "./page/reqpage/Quit.js";
import BackStudy from "./page/reqpage/BackStudy.js";
import StopStudy from "./page/reqpage/StopStudy.js";
import ProfDashboard from "./page/ProfDashboard.js";

function App() {
  
  return (
    <div>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/home" element={<Home/>} />
          <Route path="/prof-dashboard" element={<ProfDashboard/>}/>
          <Route path="/request-information" element={<RequestInformation/>} />
          <Route path="/history" element={<History/>} />
          <Route path="/all-request" element={<Allreq />} />
          <Route path="/all-request/1-default" element={<DefaultRequest />} />
          <Route path="/all-request/2-transfer-grade" element={<TransferGrade/>} />
          <Route path="/all-request/3-open-quota" element={<OpenQuota/>} />
          <Route path="/all-request/4-keepexam" element={<KeepExam/>} />
          <Route path="/all-request/5-missed-exam" element={<MissedExam/>} />
          <Route path="/all-request/6-late-regis" element={<LateRegis/>} />
          <Route path="/all-request/7-regisother" element={<RegisOther/>} />
          <Route path="/all-request/8-tranuni" element={<TranUni/>} />
          <Route path="/all-request/9-lowerregis" element={<LowerRegis/>} />
          <Route path="/all-request/10-higherregis" element={<HigherRegis/>} />
          <Route path="/all-request/11-payregis" element={<PayRegis/>} />
          <Route path="/all-request/12-quit" element={<Quit/>} />
          <Route path="/all-request/13-backstudy" element={<BackStudy/>} />
          <Route path="/all-request/14-stopstudy" element={<StopStudy/>} />
        </Routes>
    </div>
  );
}

export default App;
