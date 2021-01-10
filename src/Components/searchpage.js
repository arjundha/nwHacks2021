import React, { useState, useEffect } from 'react';
import SearchBar from './searchbar.js';
import BookList from './booklist.js';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [bookListDefault, setBookListDefault] = useState();
  const [bookList, setBookList] = useState();

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
         setBookList(data) 
         setBookListDefault(data)
       });}

  const updateInput = async (input) => {
     const filtered = bookListDefault.filter(book => {
      return book.name.toLowerCase().includes(input.toLowerCase())
     })
     setInput(input);
     setBookList(filtered);
  }

  useEffect( () => {fetchData()},[]);
	
  return (
    <>
      <SearchBar 
       input={input} 
       onChange={updateInput}
      />
      <bookList bookList={bookList}/>
    </>
   );
}

export default SearchPage