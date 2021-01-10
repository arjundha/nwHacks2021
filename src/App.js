import logo from './book.png';
import './App.css';
import Routes from "./Routes"
// import Button from 'react-bootstrap/Button'
import { Button, Alert, Container} from 'react-bootstrap';
import {Navbar, Nav, NavDropdown, Form, FormControl} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

import SearchBar from './Components/searchbar';
import OurNav from './Components/Navbar'
import OurCarousel from './Components/Carousel'

import { LinkContainer } from "react-router-bootstrap";

import SearchBar from './Components/searchbar.js';
import Footer from './Components/footer.js'





function App() {
  return (

    <div className="App">

      <OurNav></OurNav>

      <OurCarousel></OurCarousel>
      
      <Routes />

      <Footer></Footer>

    </div>
  );
}

export default App;
