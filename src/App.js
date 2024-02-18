import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5556/books');
        console.log('API Data:', response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once on component mount

  return (
    <div>
      <h1>Books API Data</h1>
    </div>
  );
};

export default App;

