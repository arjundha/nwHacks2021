import logo from './book.png';
import './readtime.css';

// import Button from 'react-bootstrap/Button'
import { Button, Alert } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import SearchBar from './Components/searchbar'
import Footer from './Components/footer'
import React from 'react'



function readtime(props) {
  const {hours = 0}
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Alert> IIIIIIIIIIIIIIEPOWQRJKQEWPIRNEWIQFNEWIQ </Alert>
        <Alert>This book takes {props.hours} hours on average to read based on our user's sumbission.</Alert>
        <Button variant="outline-primary">Add your time</Button>
      <Alert> Search Another Book</Alert>
      <SearchBar placeholder_string = "Type a book name!" ></SearchBar>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default readtime;