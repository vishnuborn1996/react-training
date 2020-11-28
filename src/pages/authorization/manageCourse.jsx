import React, { useState } from 'react';
import History from '../../settings/History';
import CourseForm from "./CourseFormForm";

function ManageCourse() {
    const initialState = { courseName: "", authorName: "" };

    const [courseForm, setCourseForm] = useState(initialState);

    function onChangeHandler({ target }) {
        setCourseForm({ ...courseForm, [target.name]: target.value })
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
            localStorage.setItem('user', JSON.stringify(courseForm));

            if (courseForm.userName === user.userName && courseForm.authorName === user.authorName) {

                alert("saved successful");
            }
         else {
            alert('please enter required fields');
        }
    

    return (
        <>
            <CourseForm onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
        </>
    );
}
export default ManageCourse;


