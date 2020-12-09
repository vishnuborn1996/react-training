import React from "react";
import History from "../../settings/History";
import articleForm from "./articleForm"


class ManageArticle extends React.Component{
    constructor(){
        super();
        this.state= { authorName: "", title: "", article: "" };
    }
    
     onChangeHandler=({target})=>{
         this.setState({[target.name]: target.value });
     }

     onSubmitHandler=(event)=> {
        event.preventDefault();
        let isFormValid = true;

        if (articleForm.authorName === "") {
            isFormValid = false;
        }

        if (articleForm.title === "") {
            isFormValid = false;
        }
        if (articleForm.article === "") {
            isFormValid = false;
        }

        if (isFormValid) {
            let savedArticle = JSON.parse(localStorage.getItem("article"));

            if (savedArticle == null) {
                savedArticle = [];
            }

            savedArticle.push(articleForm);

            localStorage.setItem("article",JSON.stringify(savedArticle));
        }
    }
}

export default ManageArticle;

// class ManageArticle extends React.Component {

//     constructor() {
//         super();
//         this.state = { name: "", courses: [], isLoading: true, count: 0, intervalId: 0 };
//     }

//     componentDidMount() {

//         setTimeout(() => {
//             let savedCourses = JSON.parse(localStorage.getItem("courses"));
//             if (savedCourses)
//                 this.setState({ courses: savedCourses, isLoading: false });
//         }, 2000);

//         let intervalId = setInterval(() => {
//             this.setState({ count: this.state.count + 1 })
//         }, 1000);

//         this.setState({ intervalId: intervalId });
//     }

//     componentWillUnmount() {
//         clearInterval(this.state.intervalId);
//         console.log("clearing ...");
//     }

//     componentDidUpdate() {
//         console.log("componentDidUpdate");
//     }

//     alertMe = () => {
//         console.log(this);
//         alert("alert me");
//     }

//     alert2() {
//         console.log(this);
//         alert(this.state.name);
//     }

//     render() {

//         return (
//             <div>
//                 {this.state.isLoading && <p>loading....</p>}
//                 {
//                     this.state.courses.map((value, index) => {
//                         return (
//                             <div key={index}>
//                                 {value.courseName}
//                             </div>
//                         );
//                     })

//                 }

//                count:  {this.state.count}

//                 <button onClick={() => { History.push("/login") }}>afdsf</button>
//             </div >
//         );
//     }
// }

// export default ManageArticle;


// class Laptop {
//     cpu
//     run = function () {
//         console.log(this.cpu);
//     }
// }

// let hp = new Laptop()
// hp.run();