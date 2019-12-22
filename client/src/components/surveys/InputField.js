import React from 'react';
import { FormControl } from 'react-bootstrap';

const InputField = ({ input, meta, ...props}) => {
    return <FormControl { ...props } { ...input } />
};

export default InputField;