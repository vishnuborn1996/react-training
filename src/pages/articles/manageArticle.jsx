import React from "react";
import History from "../../settings/History";

class ManageArticle extends React.Component {

    constructor() {
        super();
        this.state = { name: "", courses: [], isLoading: true, count: 0, intervalId: 0 };
    }

    componentDidMount() {

        setTimeout(() => {
            let savedCourses = JSON.parse(localStorage.getItem("courses"));
            if (savedCourses)
                this.setState({ courses: savedCourses, isLoading: false });
        }, 2000);

        let intervalId = setInterval(() => {
            this.setState({ count: this.state.count + 1 })
        }, 1000);

        this.setState({ intervalId: intervalId });
    }

    componentWillUnmount() {
        clearInterval(this.state.intervalId);
        console.log("clearing ...");
    }

    componentDidUpdate() {
        console.log("componentDidUpdate");
    }

    alertMe = () => {
        console.log(this);
        alert("alert me");
    }

    alert2() {
        console.log(this);
        alert(this.state.name);
    }

    render() {

        return (
            <div>
                {this.state.isLoading && <p>loading....</p>}
                {
                    this.state.courses.map((value, index) => {
                        return (
                            <div key={index}>
                                {value.courseName}
                            </div>
                        );
                    })

                }

               count:  {this.state.count}

                <button onClick={() => { History.push("/login") }}>afdsf</button>
            </div >
        );
    }
}

export default ManageArticle;


// class Laptop {
//     cpu
//     run = function () {
//         console.log(this.cpu);
//     }
// }

// let hp = new Laptop()
// hp.run();