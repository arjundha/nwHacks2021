import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
// import { Switch, Route, Link } from 'react-router-dom';
// import Routes from "../Routes";
import { LinkContainer } from "react-router-bootstrap";
// import { Route, Switch } from "react-router-dom";

class OurNav extends React.Component{
    render(){
        return(
            <div>
                    <Navbar className="Navbar" expand="lg">
                    <Navbar.Brand href="./">HLTR?</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <LinkContainer to="/">
                        <Nav.Link href="/App.js">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/book">
                        <Nav.Link href="/book">Add a Book</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/add">
                        <Nav.Link href="/add">Add Your Time</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about">
                        <Nav.Link href="/about">About Us</Nav.Link>
                        </LinkContainer>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                

            </div>


        )
    }
} 

export default OurNav