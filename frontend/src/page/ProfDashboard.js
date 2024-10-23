import './ProfDashboard.css';
import React, { useState, useEffect } from "react";
import axios from 'axios';
import ProfessorForms from './reqpage/ProfessorForms';

export default function ProfDashboard(){

  const [forms, setForms] = useState([]);
  const handleFormsFetched = (fetchedForms) => {
    setForms(fetchedForms); // Update state with the fetched forms
  };
      
        // const handleSubmit = (id) => {
        //   //เปลียนไส้
        //   const selectedRequest = requests.find((request) => request.id === id);
        //   console.log(`Request ID: ${id}`);
        //   console.log(`Choice: ${selectedRequest.choice}`);
        //   console.log(`Comment: ${selectedRequest.comment}`);
        

    return(
        <div>
            <h1>PENDING REQUEST</h1>
            <h2>คำร้องรอการอนุมัติ</h2>
            //now call data yet.must call then map
            {/* Fetch and pass the professor's name */}
            <ProfessorForms professorName="somchai" onFormsFetched={handleFormsFetched} />
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Title</th>
                        <th>File</th>
                        <th>Choices</th>
                        <th>Comment</th>
                        <th>Submit</th>
                    </tr>
                </thead>
                {/* <tbody>
                  //เปลี่ยนmap
                    {requests.map((request) => (
                        <tr key={request.id}>
                            <td>{request.date}</td>
                            <td>{request.title}</td>
                            <td>
                                <label>
                                    <input
                                        type="radio"
                                        name={`choice-${request.id}`}
                                        value="Accept"
                                        onChange={() => handleChoiceChange(request.id, "Accept")}
                                    />
                                    Accept
                                </label>
                                <label>
                                    <input
                                        type="radio"
                                        name={`choice-${request.id}`}
                                        value="Reject"
                                        onChange={() => handleChoiceChange(request.id, "Reject")}
                                    />
                                    Reject
                                </label>
                            </td>
                            <td>
              <button onClick={() => handleSubmit(request.id)}>Submit</button>
            </td>
          </tr>
        ))}
      </tbody> */}
    </table>
    <br></br>
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Subject</th>
          <th>Section</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {forms.length > 0 ? (
            forms.map((form) => (
              <tr key={form.id}>
                <td>{form.title}</td>
                <td>{form.subject}</td>
                <td>{form.section}</td>
                <td>{form.status}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No forms found for this professor.</td>
            </tr>
        )}
      </tbody>
    </table>
    </div>
    );
};