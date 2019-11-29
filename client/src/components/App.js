import React from 'react';
import {Button, Navbar, Nav, Container} from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';

const Header = () => <Navbar bg="light" expand="lg">
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
const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
    return(
        <Container style={{ paddingTop:"20px" }}>
              <BrowserRouter>
                <div>
                    <Header/>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/survey" component={Dashboard}/>
                    <Route path="/survey/new" component={SurveyNew}/>
                </div>
              </BrowserRouter>
        </Container>
    );
};

export default App;