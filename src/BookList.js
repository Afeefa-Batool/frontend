// BookList.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Define the API URL
    const apiUrl = 'http://localhost:5556/books';

    // Fetch data from the API using Axios
    axios.get(apiUrl)
      .then(response => {
        // Update the state with the fetched data
        setBooks(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // The empty dependency array ensures that the effect runs once when the component mounts

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            {book.title} by {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
