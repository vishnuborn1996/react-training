import React, { useState } from "react";
import RegistrationForm from "./Registration-form";
import { NavLink } from 'react-router-dom';

/*
1. create a login page
2. after registration submit redirect to the login page 
3. try to read the user from the locastorage {Note:( the user deatils you get will be a string, so convert it
    to an object before doing anything with it)}
*/

function Registration() {
    const initialState = { firstName: "", lastName: "", email: "", password: "", confirmPassword: "" };

    const [registrationForm, setRegistrationForm] = useState(initialState);

    function onChangeHandler({ target }) {
        setRegistrationForm({ ...registrationForm, [target.name]: target.value })
    }

    function onSubmitHandler(event) {
        event.preventDefault();
        let isFormValid = true;

        if (registrationForm.email === "") {
            isFormValid = false;
        }
        if (registrationForm.firstName === "") {
            isFormValid = false;
        }
        if (registrationForm.lastName === "") {
            isFormValid = false;
        }
        if (registrationForm.password === "") {
            isFormValid = false;
        }
        if (registrationForm.confirmPassword === "") {
            isFormValid = false;
        }
        if (registrationForm.password !== registrationForm.confirmPassword) {
            isFormValid = false;
        }

        if (isFormValid) {
            localStorage.setItem('user', JSON.stringify(registrationForm));
            setRegistrationForm({ ...initialState, email: "", firstName: "", password: "", confirmPassword: "", lastName: "" });
            //here we should add the code to route to the login code 
        } else {
            alert("Please enter the required fields !!");
        }
    }


    return (
        <>
            <RegistrationForm onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
            <div>
                <h3>Click here to Login</h3>
            </div>
            <button>
                <NavLink to="/Login">Login</NavLink>
            </button>
        </>
    );
}

export default Registration;