import React from 'react';

function CourseForm(props) {

    return (

        <div>
            <form onSubmit={props.onSubmitHandler} action="POST">
                <h3>Create Course</h3>
                <div>
                    <label>Course Name</label>
                    <input type="text" name="courseName" onChange={props.onChangeHandler}></input>
                </div>
                <div>
                    <label>Author Name</label>
                    <input type="text" name="authorName" onChange={props.onChangeHandler}></input>
                </div>
                <div>
                    <label htmlFor="difficulty">Choose difficulty</label>
                    <select onChange={props.onChangeHandler} name="difficulty">
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