import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const myStyle = {
  textDecoration: "none",
  color: "#fff"
}

class Header extends Component{
  renderState(){
    switch(this.props.auth){
      case null:
        return "Load state...";
      case false:
        return(
            <a style={myStyle} href="/auth/google"><FontAwesomeIcon icon={faGoogle} /> Login with google</a>
        );
      default:
        return (
          <a style={myStyle} href="/api/logout"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</a>
        );
    }
  }
  render(){
    console.log(this.props);
    return(
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand>
          <Link style={{ textDecoration: "none", color: "#fff" }}
            to={this.props.auth ? '/surveys' : '/'}
          >
            SFI
          </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link style={{ textDecoration:"none", color:"#fff" }} to={this.props.auth ? '/surveys' : '/'}><FontAwesomeIcon icon="home-alt"></FontAwesomeIcon> Home</Link>
          </Nav>
          <Button variant="outline-danger">{this.renderState()}</Button>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
  
function mapStateToProps({ auth }){
  return { auth };
}

export default connect(mapStateToProps) (Header);