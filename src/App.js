import logo from './book.png';
import './App.css';

// import Button from 'react-bootstrap/Button'
import { Button, Alert, Container, Navbar, Nav, NavDropdown, Form, FormControl, Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchBar from './Components/searchbar';


function App() {
  return (

    <div className="App">
      <Navbar className="Navbar" expand="lg">
      <Navbar.Brand href="./App.js">Hi it's Arjun</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href=".src/App.js">Home</Nav.Link>
            <Nav.Link href="#link">Add a Book</Nav.Link>
            <Nav.Link href="./App2.js">Add Your Time</Nav.Link>
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

      <Carousel classname="TheCarousel">
        <Carousel.Item>
          <img
            // classname="forceSize"
            className="d-flex w-100"
            src="https://www.boylelibrary.ca/public/uploads/snippets/1593454196bannerimage/1595958236-1600w_595h_1593454196bannerimage.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            // classname="forceSize"
            className="d-flex w-100"
            src="https://public.oed.com/wp-content/uploads/rainbow-research-reading-blog-header-1130x400.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            // classname="forceSize"
            className="d-flex w-100"
            src="https://www.detroitlabs.com/wp-content/uploads/2018/02/alfons-morales-YLSwjSy7stw-unsplash.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <header className="App-header">
        <Container>
          <img src={logo} className="App-logo" alt="logo" />

        <Alert>Search a book to see how long it takes to read it!</Alert>
        
        
        <SearchBar placeholder_string = "Type the name of the book here!"></SearchBar>
        <span>   </span>
        <Button>Search</Button>
        </Container>

      </header>
    </div>
  );
}

export default App;
