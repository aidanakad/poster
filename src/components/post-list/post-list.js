import React from 'react';
import PostListItem from '../post-list-item'

const PostList = ({posts})=>{
    const elements = posts.map((el) =>{
        return(
            <li key={el.id} className="list-group-item mb-2"> 
                <PostListItem
                    label={el.label}
                    important={el.important}
                    onDelete={()=> console.log("deleted")}
                />
            </li>
        )
    })
    return(
        <ul className="app-list list-group my-5">
            {elements}
        </ul>
    )
}

export default PostList