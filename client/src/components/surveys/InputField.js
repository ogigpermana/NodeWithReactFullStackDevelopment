import React from 'react';
import { FormControl } from 'react-bootstrap';

const fieldValidateStyle = {
    font: "Arial",
    color: "red",
    fontWeight: "bold",
    fontSize: "12px"
}

const InputField = ({ input, meta: { error, touched }, ...props}) => {
    return (
        <div>
            <FormControl { ...props } { ...input } />
            <div style={ fieldValidateStyle }>
                { touched && error }
            </div>
        </div>
    );
};

export default InputField;