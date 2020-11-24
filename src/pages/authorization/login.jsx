import React, { useState } from 'react';
import LoginForm from "./loginForm";

function Login() {
    const initialState = { userName: "", email: "", password: "" };

    const [loginForm, setLoginForm] = useState(initialState);

    function onChangeHandler({ target }) {
        setLoginForm({ ...setLoginForm, [target.name]: target.value })
    }

    function onSubmitHandler() {
        let isFormValid = true;

        if (loginForm.usertName === "") {
            isFormValid = false;
        }

        if (loginForm.password === "") {
            isFormValid = false;
        }

        if (isFormValid) {
            localStorage.setItem('user', JSON.stringify(loginForm));
        } else {
            alert("Please enter the required fields !!");
        }
    }

    return (
        <>
            <LoginForm onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
        </>
    );
}
export default Login;


