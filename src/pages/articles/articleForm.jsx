import React from "react";

export default class ArticleForm extends React.Component {

    componentDidUpdate() {
        console.log(this.props);
    }
    
    render() {
        return (

            <div>
                <form onSubmit={this.props.onSubmitHandler} action="POST">
                    <h3>Create an Article</h3>
                    <label>Author Name</label>
                    <div>
                        <select name="authorName" onChange={this.props.onChangeHandler}>
                            <option disabled defaultValue> --Select Author -- </option>
                            {
                                this.props.authors && this.props.authors.map((value, i) => {
                                    return (
                                        <option key={i} value={value.authorName}>
                                            {value.authorName}
                                        </option>);
                                })
                            }
                        </select>
                    </div>
                    <div>
                        <label>Title</label>
                        <input type="text" name="title" onChange={this.props.onChangeHandler}></input>
                    </div>
                    <div>
                        <label>Article</label>
                        <textarea name="article" rows="10" cols="50" onChange={this.props.onChangeHandler}></textarea>
                    </div>
                    <button>Submit</button>

                </form>
            </div>
        )
    }

}