import React from 'react';

const AppHeader =({liked, allPosts})=>{
    return(
        <div className="app-header d-flex justify-content-between">
            <h1>Poster</h1>
            <h4 className="align-self-center text-muted">{allPosts} twitts, {liked} of them are liked</h4>
        </div>
    )
}

export default AppHeader