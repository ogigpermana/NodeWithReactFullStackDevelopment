import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Container from '@material-ui/core/Container';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import SurveyNew from './surveys/SurveyNew';
import Dashboard from './Dashboard';
import AlertFeedback from './AlertFeedback';

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
                    <Route exact path="/surveys/new" component={SurveyNew}/>
                    <Route exact path="/api/surveys/feedback-thanks" component={AlertFeedback}/>
                </Container>
            </BrowserRouter>
        );
    }
};

export default connect(null, actions) (App);