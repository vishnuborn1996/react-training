import React from 'react';
import History from '../../settings/History';

function Home() {
    let userJSON = localStorage.getItem('user');
    let user = null;
    if (userJSON) {
        user = JSON.parse(userJSON);
    } else if (userJSON === null || user == null) {
        History.push("/");
    }

    return (
        <div>
            { user === null ? 'unauthorised and you are not supposed to see this' : <h3> Hello {user.firstName}</h3>}
        </div>
    )
}

export default Home;