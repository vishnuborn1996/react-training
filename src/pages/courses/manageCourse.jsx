import React, { useState } from 'react';
import History from '../../settings/History';
import CourseForm from "./CourseForm";

function ManageCourse() {
    const initialState = { courseName: "", authorName: "", difficulty: "" };

    const [courseForm, setCourseForm] = useState(initialState);


    function onChangeHandler({ target }) {

        // this is spread operator
        setCourseForm({ ...courseForm, [target.name]: target.value });

    }

    function onSubmitHandler(event) {
        event.preventDefault();
        let isFormValid = true;

        if (courseForm.courseName === "") {
            isFormValid = false;
        }

        if (courseForm.authorName === "") {
            isFormValid = false;
        }

        if (isFormValid) {
            let savedCourses = JSON.parse(localStorage.getItem("courses"));

            if (savedCourses == null) {
                savedCourses = [];
            }

            savedCourses.push(courseForm);

            localStorage.setItem("courses",JSON.stringify(savedCourses));
        }
    }

    // function test() {

    //     let invisible = null;

    //     if (invisible == null) {
    //         alert("hello user something is wrong in your end!!! ");
    //     }

    //     alert(invisible);

        // let array = [1, 2];

        // let number = 5;

    // }

    return (
        <>
            {/* <button onClick={test}>test</button> */}
            <CourseForm onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
        </>
    );
}

export default ManageCourse;


