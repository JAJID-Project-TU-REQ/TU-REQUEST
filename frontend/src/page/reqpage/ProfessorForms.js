import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProfessorForms({ professorName }) {
  const [forms, setForms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch forms by professor using axios
    const fetchForms = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/forms/professor/${professorName}`);
        setForms(response.data); // Save the fetched forms in state
      } catch (error) {
        setError(error.response ? error.response.data.detail : error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchForms();
  }, [professorName]);

  // Display a loading message while fetching
  if (loading) {
    return <p>Loading...</p>;
  }

  // Display error message if there is an error
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Display the list of forms
  return (
    <div>
      {/* <h2>Forms for Professor: {professorName}</h2>
      {forms.length > 0 ? (
        <ul>
          {forms.map((form) => (
            <li key={form.id}>
              <p>Title: {form.title}</p>
              <p>Semester: {form.semester} {form.semester_year}</p>
              <p>Subject: {form.subject}</p>
              <p>Status: {form.status}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No forms found for this professor.</p>
      )} */}
      {forms}
    </div>
  );
}

export default ProfessorForms;
