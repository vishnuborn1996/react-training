import React, { useState } from "react";
import History from '../../settings/History';
import AuthorForm from "./authorForm";

function ManageAuthors(){

    const initialState = { authorName: "", email: "" };
    const [authorForm,setAuthorForm]= useState(initialState)

    function onChangeHandler({target}){
         
        setAuthorForm({...authorForm, [target.name]: target.value});
    }

    function onSubmitHandler(event){

        event.preventDefault();
        let formValid= true;

        if (authorForm.authorName===""){
            formValid= false;
        }
        if (authorForm.email===""){
            formValid= false;
        }
        if(formValid){
            let savedAuthors= JSON.parse(localStorage.getItem("authors"));
            if (savedAuthors == null) {
                savedAuthors = [];
            }

            savedAuthors.push(authorForm);

            localStorage.setItem("authors",JSON.stringify(savedAuthors));
        }

    }

    return (
        <>
        
            <authorForm onChangeHandler={onChangeHandler} onSubmitHandler={onSubmitHandler} />
        </>
    );
}

export default ManageAuthors;

