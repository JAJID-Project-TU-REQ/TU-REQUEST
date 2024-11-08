import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function ProfessorForms({ professorName:professor, onFormsFetched }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch forms by professor using axios
    const fetchForms = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/forms/professor/${professor}`);
        console.log("API Response:", response.data);  // Log the response here
        onFormsFetched(response.data); // Send the fetched data back to the parent
      } catch (error) {
        setError(error.response ? error.response.data.detail : error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchForms();
  }, [professor,onFormsFetched]);

  // Display a loading message while fetching
  if (loading) {
    return <p>Loading...</p>;
  }

  // Display error message if there is an error
  if (error) {
    return <p>Error: {error}</p>;
  }

  // Display the list of forms
  return null;
}
