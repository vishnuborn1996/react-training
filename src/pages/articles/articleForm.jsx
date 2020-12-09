import React from "react";

export class ArticleForm extends React.Component{
    constructor (props){
        super(props);
    }


render(){
    return(

     <div>
         <form onSubmit={props.onSubmitHandler} action="POST">
             <h3>Create an Article</h3>
             <label>Author Name</label>
             <div>
                <select name="authorName" onChange={props.onChangeHandler}>
                {AuthorList}
                </select>
            </div>
            <div>
                <label>Title</label>
                <input type="text" name="title" onChange={props.onChangeHandler}></input>
            </div>
            <div>
                <label>Article</label>
                <textarea name="article" rows="10" cols="50"></textarea>
            </div>
            <button>Submit</button>
            
         </form>
     </div>   
    )
}

}
export default ArticleForm;