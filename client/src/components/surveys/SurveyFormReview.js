import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ShowFormReview = ({ onCancel }) => {
    return(
        <div style={{ marginTop: "20px" }}>
            <Card className="text-center">
                <Card.Header>Survey Form Review</Card.Header>
                <Card.Body>
                    <Card.Title>PT. ABCDEFG</Card.Title>
                    <Card.Text>
                    Please do review for this form to make sure all of information are correct!
                    </Card.Text>
                    <Button onClick={ onCancel } variant="warning" style={{ marginRight: "5px"}}>Back</Button>
                    <Button variant="primary" type="submit">Send</Button>
                </Card.Body>
                <Card.Footer className="text-muted">2 days ago</Card.Footer>
            </Card>
        </div>
    );
};

export default ShowFormReview;