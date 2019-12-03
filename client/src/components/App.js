import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';

const Dashboard = () => <h2>Dashboard</h2>
const SurveyNew = () => <h2>SurveyNew</h2>

class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }

    render(){
        return(
            <BrowserRouter>
                <Header/>
                <Container fixed>
                    <Route exact path="/" component={Landing}/>
                    <Route exact path="/surveys" component={Dashboard}/>
                    <Route path="/surveys/new" component={SurveyNew}/>
                </Container>
            </BrowserRouter>
        );
    }
};

export default connect(null, actions) (App);