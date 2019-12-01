import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Container from '@material-ui/core/Container';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>
const Landing = () => <h2>Landing</h2>

const App = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Container fixed>
                <Route exact path="/" component={Landing}/>
                <Route exact path="/survey" component={Dashboard}/>
                <Route path="/survey/new" component={SurveyNew}/>
            </Container>
        </BrowserRouter>
    );
};

export default App;