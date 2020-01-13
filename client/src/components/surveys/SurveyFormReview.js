import _ from 'lodash';
import React from 'react';
import { Card, Button, Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import formFields from './formFields';

const ShowFormReview = ({ onCancel, formValues }) => {
    const reviewFields = _.map(formFields, field => {
        return(
            <tr key={field.name}>
                <th style={{ textAlign: "right", width: "150px" }}>{ field.label } :</th>
                <td style={{ textAlign: "left" }}>{ formValues[field.name] }</td>
            </tr>
        );
    });
    return(
        <div style={{ marginTop: "20px" }}>
            <Card className="text-center">
                <Card.Header>Survey Form Review</Card.Header>
                <Card.Body>
                    <Card.Text>
                    Please do review for this form to make sure all of information are correct!
                    </Card.Text>
                    <Table bordered size="sm">
                        <tbody>
                            {/* <tr>
                                <th style={{ textAlign: "right" }}>Survey Title :</th>
                                <td style={{ textAlign: "left" }}>{ formValues.title }</td>
                            </tr>
                            <tr>
                                <th style={{ textAlign: "right" }}>Subject Line :</th>
                                <td style={{ textAlign: "left" }}>{ formValues.subject }</td>
                            </tr>
                            <tr>
                                <th style={{ textAlign: "right" }}>Email Body :</th>
                                <td style={{ textAlign: "left" }}>{ formValues.body }</td>
                            </tr>
                            <tr>
                                <th style={{ textAlign: "right" }}>Recipient List :</th>
                                <td style={{ textAlign: "left" }}>{ formValues.emails }</td>
                            </tr> */}
                            { reviewFields }
                        </tbody>
                    </Table>
                    <Button onClick={ onCancel } variant="warning" style={{ marginRight: "5px"}}>Back</Button>
                    <Button variant="primary" type="submit">Send</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

function mapStateToProps(state){
    return{
        formValues : state.form.surveyForm.values
    };
}

export default connect(mapStateToProps) (ShowFormReview);