// fetchForms.js

import { useState, useEffect } from 'react';
import axios from 'axios';

// Custom hook for fetching forms based on professor
const useFetchForms = (professorName) => {
  const [forms, setForms] = useState([]);  // State to store the fetched forms
  const [loading, setLoading] = useState(true);  // Loading state
  const [error, setError] = useState(null);  // Error state

  // Fetch data from API when professorName changes
  useEffect(() => {
    const fetchFormsData = async () => {
      setLoading(true);
      setError(null);

      try {
        // Fetch forms data from backend
        const response = await axios.get(`http://localhost:8000/professor_forms/${professorName}`);
        setForms(response.data);  // Store fetched forms in state
      } catch (err) {
        setError("Failed to fetch forms.");
      }

      setLoading(false);
    };

    fetchFormsData();
  }, [professorName]);  // Re-run the effect when professorName changes

  return { forms, loading, error };  // Return the state variables to use in the display component
};

export default useFetchForms;
