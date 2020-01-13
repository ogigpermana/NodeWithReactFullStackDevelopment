import React, { Component } from 'react';
import _ from 'lodash';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Card, Form,  Button, Breadcrumb } from 'react-bootstrap';
import InputField from './InputField';
import { FontAwesomeIcon  } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import validateEmails from '../../utils/validateEmails'

const FIELDS = [
    { label: "Survey Title", name: "title", noValueError: "Please provide a valid title" },
    { label: "Subject Line", name: "subject", noValueError: "Please provide a valid subject" },
    { label: "Email Body", name: "body", noValueError: "Please provide a valid body" },
    { label: "Recipient List", name: "emails", noValueError: "Please provide a valid emails" }
];

class SurveyForm extends Component{
    renderFields(){
        return _.map(FIELDS, ({ label, name }) =>{
            return(
                <div key={ name }>
                     <Form.Label>{ label }</Form.Label>
                     <Field type="text" component={ InputField } name={name} />
                </div>
             );
        });
    }

    render(){
        return(
            <div style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Breadcrumb>
                   <Link to="/surveys">Dashboard</Link> &nbsp;/&nbsp;
                    <Breadcrumb.Item active>
                        Survey New
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Card>
                    <Card.Header as="h6">Create a new survey</Card.Header>
                    <Card.Body>
                        <Form onSubmit={ this.props.handleSubmit(this.props.onSurveySubmit)}>
                            <Form.Group>
                                { this.renderFields() }
                            </Form.Group>
                            <Link to="/surveys" className="btn btn-danger" style={{ marginRight: "5px" }}>Cancel</Link>
                            <Button type="submit" className="btn btn-info right">Next <FontAwesomeIcon icon={ faCheck } /></Button>
                        </Form>
                    </Card.Body>
                 </Card>
            </div>
        );
    }
}

function validate(values){
    const errors = {};

    // manually approach
    // if(!values.title){
    //     errors.title = 'Please provide a valid title'
    // }
    // if(!values.subject){
    //     errors.subject = 'Please provide a valid subject'
    // }
    // if(!values.body){
    //     errors.body = 'Please provide a valid body'
    // }
    // if(!values.emails){
    //     errors.emails = 'Please provide a valid emails'
    // }

    errors.emails = validateEmails(values.emails || '');
    
    // using lodash validation style
    _.each(FIELDS, ({ name, noValueError }) => {
        /**
         * values[name]
         * mean
         * values.name
         * { name: 'shfishfei bla bla bla' }
         */
        if(!values[name]){
            // with custom validation message
            errors[name] = noValueError;
        }
    });
    
    return errors;
}

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount:false
}) (SurveyForm)