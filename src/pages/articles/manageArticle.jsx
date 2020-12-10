import React from "react";
import History from "../../settings/History";
import ArticleForm from "./articleForm";


export default class ManageArticle extends React.Component {

    authorlist = [];

    constructor() {
        super();
        this.state = { articleForm: { authorName: "", title: "", article: "" } };

    }

    componentDidMount() {
        let authors = JSON.parse(localStorage.getItem("authors"));
        debugger;
        this.authorlist = authors == null ? [] : authors;
    }

    componentDidUpdate(){

    }

    componentWillUnmount(){

    }

    
    onChangeHandler = ({ target }) => {
        this.setState({ articleForm: { [target.name]: target.value } });
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        let isFormValid = true;

        if (this.state.articleForm.authorName === "") {
            isFormValid = false;
        }

        if (this.state.articleForm.title === "") {
            isFormValid = false;
        }
        if (this.state.articleForm.article === "") {
            isFormValid = false;
        }

        if (isFormValid) {
            let savedArticle = JSON.parse(localStorage.getItem("article"));

            if (savedArticle == null) {
                savedArticle = [];
            }

            savedArticle.push(this.state.articleForm);

            localStorage.setItem("article", JSON.stringify(savedArticle));
        }
    }

    render() {
        return (
            <>
                <ArticleForm authors={this.authorlist} onChangeHandler={this.onChangeHandler} onSubmitHandler={this.onSubmitHandler} />
            </>
        )
    }
}


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