import React from 'react';
import { Container} from 'react-bootstrap';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

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