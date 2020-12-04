import React from 'react';

function CourseForm(props) {

    return (

        <div>
            <form onSubmit={props.onSubmitHandler} action="POST">
                <h3>Login your Account</h3>
                <div>
                    <label>Course Name</label>
                    <input type="text" name="userName" onChange={props.onChangeHandler}></input>
                </div>
                <div>
                    <label>Author Name</label>
                    <input type="text" name="authorName" onChange={props.onChangeHandler}></input>
                </div>
                <div>
                    <label for="">Choose difficulty</label>
                    <select name="difficulty">
                        <option value="beginner">beginner</option>
                        <option value="amateur">amateur</option>
                        <option value="professional">professional</option>
                    </select>
                </div>
                <button type="submit" onSubmit={props.onSubmitHandler}> Submit </button>
            </form>
        </div>

    )
}
export default CourseForm;