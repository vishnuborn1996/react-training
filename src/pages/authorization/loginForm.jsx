import React from 'react';

function LoginForm(props){

    return(
    
        <div>
            <form onSubmit={props.onSubmitHandler} action="POST">
                <h3>Login your Account</h3>
                <div>
                    <label>User Name</label>
                    <input type="text" name="userName" onChange={props.onChangeHandler}></input>
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

    )
}
export default LoginForm;