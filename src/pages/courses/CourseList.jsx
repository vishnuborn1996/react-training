import React from "react";


/*
**  create a table structure for displaying the course
ignore the next..
**  in the table try to add a button named "view"
**  on clicking this button open a different page called CourseDetails and show all the course related info
**  for this u need to use link of router  
*/

/*
   just like how we created course, create a form for adding new author;
   
*/

function CourseList() {
    let courses = JSON.parse(localStorage.getItem("courses"));

    if (!courses) {
        courses = [];
    }

    // function test() {
    //     let array = [1, 2];  // ["1","2"]

    //     let somevalue = array.map(logValue)
    //     console.log("somevalue: ", somevalue);
    // }


    // function logValue(value, index, arr) {
    //     console.log(value);
    //     console.log(index);
    //     console.log(arr);
    //     return (
    //         <div>
    //             { value}
    //         </div>
    //     );
    // }

    return (
        <div>
            {
                courses.map((course, index, arr) => {
                    return (
                        <div>
                            <div>
                                index : {index}
                            </div>
                            <div>
                                course:  {course.courseName}
                            </div>
                            <div>
                                author Name:  {course.authorName}
                            </div>
                        </div>
                    );
                })
            }
        </div>
    )
}

export default CourseList;