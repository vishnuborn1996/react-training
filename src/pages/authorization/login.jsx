import React, { useState } from 'react';
import History from '../../settings/History';
import LoginForm from "./loginForm";

function Login() {
    const initialState = { userName: "", password: "" };

    const [loginForm, setLoginForm] = useState(initialState);

    function onChangeHandler({ target }) {
        setLoginForm({ ...loginForm, [target.name]: target.value })
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        let isFormValid = true;

        if (loginForm.userName === "") {
            isFormValid = false;
        }

        if (loginForm.password === "") {
            isFormValid = false;
        }

        if (isFormValid) {
            let userJSON = localStorage.getItem('user');

            let user = JSON.parse(userJSON);
            debugger;

            if (loginForm.userName === user.email && loginForm.password === user.password) {

                alert("Login successful");
                History.push("/home");
            }
            else {
                alert("username or password incorrect !!");
            }
        } else {
            alert('please entere required fields');
        }
    }

    return (
        <>
            <LoginForm onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
        </>
    );
}
export default Login;


