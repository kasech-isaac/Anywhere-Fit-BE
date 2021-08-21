import React from "react";
import Form from 'react-bootstrap/Form';
import { Row, Col } from "react-bootstrap";
const Input = (props) => {
    const errorMessage = props.errors[props.name];
    return (
        <>
        <Form.Group as={Row} className="mb-3" >
            <Form.Label column sm="2" htmlFor={props.label}>{props.label} </Form.Label>
            <Col sm="10">
                <Form.Control column sm="2" type={props.type} placeholder={props.placeholder} defaultValue={props.value} onChange={props.onChange} name={props.name}/>
                {errorMessage.length !== 0 && <p className="error">{errorMessage}</p>}
            </Col>
           

        </Form.Group>
        </>
    )
}

export default Input;