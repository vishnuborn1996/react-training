import React from "react";

function AuthorForm(props) {

    return (

        <div>
            <form onSubmit={props.onSubmitHandler} action="POST">
                <h3>Manage Author</h3>
                <div>
                    <label>Author Name</label>
                    <input type="text" name="authorName" onChange={props.onChangeHandler} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="email" name="email" onChange={props.onChangeHandler} />
                </div>
                <div>
                    <button type="submit" onSubmit={props.onSubmitHandler}>Submit</button>
                </div>

            </form>
        </div>
    )




}
export default AuthorForm;