import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';

class Header extends Component{
  renderState(){
    switch(this.props.auth){
      case null:
        return "Load state...";
      case false:
        return "I am logout";
      default:
        return "I am loggedin";
    }
  }
  render(){
    console.log(this.props);
    return(
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
          </Nav>
          <Button variant="outline-success">{this.renderState()}</Button>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
  
function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps) (Header);