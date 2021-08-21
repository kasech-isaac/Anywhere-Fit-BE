import React,{useState,useEffect} from 'react';
import {Form , Button } from "react-bootstrap";
import * as yup from 'yup';
import Input from "./Input";
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { useHistory } from 'react-router';
import axios from 'axios';
const Login = (props) => {
    let history =useHistory();
    const defaultState={
        username:"",
        password:""
    };
    const [Error,setError]=useState({...defaultState});
    const [loginState,setLoginState]=useState(defaultState);
    const [buttonDisabled,setButtonDisabled]=useState(true);
    
    const formschema=yup.object().shape({
        username:yup.string().required("username is required"),
        password:yup.string().required("Password is required")
    })

    useEffect(()=>{
        if (loginState.username && loginState.password){
            setButtonDisabled(true)
        }
        else if(
            loginState.username|| loginState.password){
                setButtonDisabled(false)
            }

    },[loginState,formschema])

    const loginSubmit=(e)=>{
        console.log("login",loginState);
      //  e.preventDefault();

        axios.post('http://localhost:5000/api/auth/login',loginState)

        .then(res=>{
            console.log("LoginState",res)
            localStorage.setItem('token',res.data.token);
           // props.setLoggedIn(true);
           if(res.data.role==="instructor"){
            history.push("/Instructor")
           }
           else{
            
            history.push("/Client")
           }
            
        })
        .catch(err=>{
            console.log("Error message",err)

        })
    }
    const inputchange=(e)=>{
     //   e.persist();
     console.log("hihi")
        const value=e.target.value;
        yup.reach(formschema,e.target.name)
        .validate(value)
        .then(valid=>{
            console.log("dfdf",valid)
            setError({...Error,[e.target.name]:""})
        })
       
        .catch(
            err=>{
                console.log("previous",err.errors[0])
                setError({
                    ...Error,[e.target.name]:err.errors[0]
                })
            })

            setLoginState({
                ...loginState,
                [e.target.name]:e.target.value
            })
            console.log(loginState);
    }
    
    return (
        <>
            <Form onSubmit={loginSubmit}>
                 <Input  type="text" placeholder="User Name1" onChange={inputchange} value={loginState.username} name="username" label="User Name" errors={Error}/>
                 <Input  type="password" placeholder="Password" onChange={inputchange} value={loginState.password} name="password" label="Password" errors={Error}/>
               
                <Button onClick={loginSubmit}  >
                    Submit
                </Button>
            </Form>
        </>
    )
}

export default Login;
