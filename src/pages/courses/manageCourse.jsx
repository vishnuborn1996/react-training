import React, { useEffect, useState } from 'react';
import History from '../../settings/History';
// import History from '../../settings/History';
import CourseForm from "./CourseForm";


function ManageCourse() {
    const initialState = { courseName: "", authorName: "", difficulty: "" };

    const [courseForm, setCourseForm] = useState(initialState);

    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     let intervalId = setInterval(() => {
    //         console.log("count");
    //         setCount((_count) => {
    //             console.log(_count);
    //             return _count + 1
    //         });
    //     }, 1000);


    //     return () => {
    //         clearInterval(intervalId);
    //         console.log("unmounting...");
    //     }

    // }, []);

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

            localStorage.setItem("courses", JSON.stringify(savedCourses));
        }
    }

    function AuthorList() {
        let authors = JSON.parse(localStorage.getItem("authors"));
        if (!authors) {
            authors = [];
        }
        authors.map((author, index) => {
            return (
                <option key={index}>
                    {author.authorName}

                </option>
            )

        })

    }

    return (
        <>
            Count: {count}
            <button onClick={() => { History.push("/") }}>asdasd</button>
            <CourseForm onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} AuthorList={AuthorList} />
        </>
    );
}

export default ManageCourse;


