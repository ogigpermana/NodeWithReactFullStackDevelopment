import React, { Component } from 'react';
import { Button, Navbar, Nav } from 'react-bootstrap';

class Header extends React.Component{
    render(){
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">Surel Feedback Information</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Landing</Nav.Link>
                        <Nav.Link href="/survey">Dashboard</Nav.Link>
                        <Nav.Link href="/survey/new">Survey Name</Nav.Link>
                    </Nav>
                    <Button variant="primary" style={{ marginRight:'5px' }}>Login</Button>
                    <Button variant="warning">SignUp</Button>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;