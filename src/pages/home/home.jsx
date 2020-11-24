import React from 'react';

function Home(){
    let userJSON=  localStorage.getItem('user');
         
    let user= JSON.parse(userJSON);

    return(
        <div>
            <h3> Hello {user.firstName}</h3>

        </div>
    )
}

export default Home;