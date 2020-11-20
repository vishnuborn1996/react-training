import React from "react";

function RegistrationForm(props) {
    return (
        <div>
            <form onSubmit={props.onSubmitHandler} action="POST">
                <h3>Register your Account</h3>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={props.onChangeHandler}></input>
                </div>
                <div>
                    <label>last Name</label>
                    <input type="text" name="lastName" onChange={props.onChangeHandler}></input>
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" onChange={props.onChangeHandler}></input>
                </div>
                <div>
                    <label>password</label>
                    <input type="password" name="password" onChange={props.onChangeHandler}></input>
                </div>
                <button type="submit" onSubmit={props.onSubmitHandler}> Submit </button>
            </form>
        </div>
    );
}

export default RegistrationForm;