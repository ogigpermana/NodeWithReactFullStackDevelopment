import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { Card, Form,  Button, Breadcrumb } from 'react-bootstrap';
import InputField from './InputField';

class SurveyForm extends Component{
    renderFields(){
        return(
            <Card>
            <Card.Body>
                 <Form onSubmit={ this.props.handleSubmit(values => console.log(values))}>
                     <Form.Group>
                         <Form.Label>Survey Title</Form.Label>
                         <Field type="text" component={ InputField } name="surveyTitle" />
                     </Form.Group>
                     <Form.Group>
                         <Form.Label>Subject Title</Form.Label>
                         <Field type="text" component={ InputField } name="subjectTitle" />
                     </Form.Group>
                     <Form.Group>
                         <Form.Label>Survey Content</Form.Label>
                         <Field type="text" component={ InputField } name="surveyContent" />
                     </Form.Group>
                     <Form.Group>
                         <Form.Label>Recipients</Form.Label>
                         <Field type="text" component={ InputField } name="recipients" />
                     </Form.Group>
                        <Button href="/surveys" variant="danger" style={{ marginRight: "5px" }}>Cancel</Button>
                        <Button type="submit" className="pull-right">Submit</Button>
                 </Form>
            </Card.Body>
        </Card>
        );
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
                { this.renderFields() }
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
}) (SurveyForm)