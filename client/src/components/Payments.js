import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCreditCard} from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Payments extends Component{
    render(){
        return(
            <StripeCheckout
                name="Surel Feedback Info"
                description="pay for $5 to get 5 email credit"
                amount={500}
                token={token => this.props.handleToken(token)}
                stripeKey={process.env.REACT_APP_STRIPE_KEY}
            >
                <Button variant="outline-info">
                    <FontAwesomeIcon icon={faCreditCard}/> Add Credits
                </Button>
            </StripeCheckout>
        );
    }
}

export default connect(null, actions) (Payments);