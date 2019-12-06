import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import StripePayments from './Payments';

const myStyle = {
  textDecoration: "none",
  color: "#fff",
  background: "#d81a1a",
  padding: "7px",
  borderRadius: "3px"
}

class Header extends Component{
  renderState(){
    switch(this.props.auth){
      case null:
        return "Load state...";
      case false:
        return(
            <li><a style={myStyle} href="/auth/google" variant="danger"><FontAwesomeIcon icon={faGoogle} /> Login with google</a></li>
        );
      default:
        return (
          [
            <Nav.Link key="1"><StripePayments/></Nav.Link>,
            <Button key="3" variant="warning" size="sm" style={{ height: "38px", marginTop: "7px"}}>
              Credits <Badge variant="light">{ this.props.auth.credits }</Badge>
              <span className="sr-only">unread messages</span>
            </Button>,
            <Nav.Link key="2" href="/api/logout" style={{ marginTop: "7px", marginLeft: "7px" }}>
              <FontAwesomeIcon icon={faPowerOff}/>
            </Nav.Link>
          ]
        );
    }
  }
  render(){
    console.log(this.props);
    return(
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand><Link style={{ textDecoration: "none", color: "#fff" }} to={this.props.auth ? '/surveys' : '/'}>Surel Feedback Info</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav style={{ color:"#fff" }}>
            {this.renderState()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
  
function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps) (Header);