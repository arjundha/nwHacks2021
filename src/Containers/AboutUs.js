import React from "react";
import "../App.css";
import { Alert, Container } from 'react-bootstrap';
import logo from '../book.png';
//import SearchBar from '../Components/searchbar';

export default function About() {
  return (

      <div className="About-us">
        <Container>
        <Alert>About Us</Alert>
        <br></br>
        <img src={logo} className="App-logo" alt="logo" />

        </Container>

      </div>

  );
}