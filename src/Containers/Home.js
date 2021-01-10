import React from "react";
import "../App.css";
import { Button, Alert, Container} from 'react-bootstrap';
import logo from '../book.png';
import SearchBar from '../Components/searchbar';

export default function Home() {
  return (

      <header className="App-header">
        <Container>
          <img src={logo} className="App-logo" alt="logo" />

        <Alert>Search a book to see how long it takes to read it!</Alert>
        
        
        <SearchBar placeholder_string = "Type the name of the book here!"></SearchBar>
        <span>   </span>
        <Button>Search</Button>
        </Container>

      </header>

  );
}