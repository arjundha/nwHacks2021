import logo from './book.png';
import './App.css';

// import Button from 'react-bootstrap/Button'
import { Button, Alert, Container, Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './Components/searchbar.js';
import Footer from './Components/footer.js'


function App() {
  return (

    <div className="App">
      <Navbar className="Navbar" expand="lg">
        <Navbar.Brand href="/App.js">Hi it's Arjun</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/App.js">Home</Nav.Link>
            <Nav.Link href="#link">Add a Book</Nav.Link>
            <Nav.Link href="#link">Add Your Time</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>

      <header className="App-header">
        <Container>
          <img src={logo} className="App-logo" alt="logo" />

        <Alert>Search a book to see how long it takes to read it!</Alert>
        
        
        <SearchBar placeholder_string = "Type the name of the book here!"></SearchBar>
        <span>   </span>
        <Button>Search</Button>
        </Container>
      </header>
      <Footer></Footer>
    </div>
  );
}

export default App;
