import React from 'react';
import { Alert } from 'react-bootstrap';


const AlertFeedback = () => {
    return(
        <div style={{ paddingTop: "20px"}}>
            <Alert variant="success">
                <Alert.Heading>Hai, senang bekerjasama dengan anda</Alert.Heading>
                <p>
                   Terimakasih atas voting atau feedbacknya, voting ini sangat membantu kami untu kemajuan aplikasi ini dikemudian hari
                </p>
                <hr />
                <p className="mb-0">
                    Salam hangat dari kami, <br /><br />
                    <small><strong>Surel Feedback Information</strong></small>
                </p>
            </Alert>
        </div>
    );
}

export default AlertFeedback;