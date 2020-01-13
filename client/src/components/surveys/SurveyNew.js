import React, { Component } from 'react';
import SurveyForm from './SurveyForm'
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
    // classic style to put state
    // constructor(props){
    //     super(props);
    //     this.state = { surveyFormReview: false }
    // }

    state = { surveyFormReview: false };

    renderContent(){
        if(this.state.surveyFormReview){
            return(
                <SurveyFormReview onCancel= { () => { this.setState({ surveyFormReview: false })}} />
            );
        }

        return(
            <SurveyForm onSurveySubmit={ () => { this.setState({ surveyFormReview: true })}} />
        );
    }

   render(){
       return(
           <div>
                { this.renderContent() }
           </div>
       );
   }
}

export default SurveyNew;
