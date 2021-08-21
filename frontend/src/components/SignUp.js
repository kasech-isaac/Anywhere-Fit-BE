import React, { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { Row, Col, Button } from "react-bootstrap";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Input from "./Input";

const SignUp = () => {
    ////The history.push () function belongs to react-router-dom and used to move from the current page to another one
    const history = useHistory();

    //Default state of page when the page gets loaded
    const defaultState = {
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        password: "",
        role: 0,


    }
    // Validation Form
    const formSchema = yup.object().shape({
        role:yup.string().notRequired(),
        first_name: yup.string().required("Please Enter Your First Name").min(2, "This is not your first name"),
        last_name: yup.string().required("Please Enter Your Last Name").min(2, "This is not your last name"),
        username: yup.string().required("Please Enter your Username").min(2, "This is not your Username"),
        password: yup.string().required("Please Enter the password").matches(/^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/, "Password must contain at least 8 characters , one uppercase , one lowercase , one number and one special case character"),
        email: yup.string().email().required("Please Enter email"),
        //  terms: yup.boolean().oneOf([true],'Please accept our terms')
    })
    const [formState, setFormState] = useState(defaultState);
    const [Error, setError] = useState({ ...defaultState, terms: "" });
    const [disabledButton, setDisabledButton] = useState(true);

    // Refresh the elements  if there is any change in formstate or formschema
    useEffect(() => {
        formSchema.isValid(formState)
            .then(valid => setDisabledButton(!valid));
    }, [formState, formSchema])

    const inputchange = event => {
        if (event.target.type === 'checkbox') {
            setFormState({
                ...formState, [event.target.name]: event.target.checked
            })
        }
        else {
            setFormState({
                ...formState,
                [event.target.name]: event.target.value
            })
        }
        const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
        //making the value to stay like that 
        //  event.persist();
        //validating the data 
        yup.reach(formSchema, event.target.name)
            .validate(value)
            .then(
                valid => {
                    setError({ ...Error, [event.target.name]: "" })
                }
            )
            .catch(
                err => {
                    console.log("previous", err.errors[0])
                    setError({ ...Error, [event.target.name]: err.errors[0] })
                }
            )
        console.log("previous state", formState)
    }
    //submit form function
    const submitForm = event => {
        console.log("submit")
        event.preventDefault();
        console.log("Data signup form", formState);
        // if(formState.first_name||formState.last_name)
        axios.post("http://localhost:5000/api/auth/register", formState)
            .then(res => {
                //After posting the data what kind of response we are getting 
                console.log(res, "signup")
                history.push("/login")
            })
            .catch(err => {
                console.log("Invalid register", err)
            })

    }

    return (
        <>
            <Form onSubmit={submitForm} >

                <Input type="text" placeholder="First Name" onChange={inputchange} value={formState.first_name} name="first_name" label="First Name" errors={Error} />
                <Input type="text" placeholder="Last Name" onChange={inputchange} value={formState.last_name} name="last_name" label="Last Name" errors={Error} />
                <Input type="text" placeholder="User Name" onChange={inputchange} value={formState.username} name="username" label="User Name" errors={Error} />
                <Input type="email" placeholder="Email" onChange={inputchange} value={formState.email} name="email" label="Email" errors={Error} />
                <Input type="password" placeholder="Password" onChange={inputchange} value={formState.password} name="password" label="Password" errors={Error} />
                <fieldset>
                    <Form.Group as={Row} className="mb-3">
                        <Form.Label as="legend" column sm={2}>
                            Select
                        </Form.Label>
                        <Col sm={10}>
                            <Form.Check
                                defaultChecked
                                type="radio"
                                label="Student"
                                name="role"
                                id="formHorizontalRadios1"
                               onChange={inputchange}
                              value={parseInt(2)}
                            />
                            <Form.Check
                                type="radio"
                                label="Instructor"
                                name="role"
                                id="formHorizontalRadios2"
                               value={parseInt(1)}
                               onChange={inputchange}
                            />

                        </Col>
                    </Form.Group>
                </fieldset>


                <Form.Group as={Row} className="mb-3">
                    <Col sm={{ span: 10, offset: 2 }}>
                        <Button type="submit" disabled={disabledButton} >Sign up</Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}

export default SignUp;
