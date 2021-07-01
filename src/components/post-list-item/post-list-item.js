import React from 'react';

const PostListItem = ()=>{
    return(
        <li className="app-list-item d-flex justify-content-between mb-2">
            <span className="app=list-item-label fw-bold">list item</span>
            <div className="d-flex justify-content-cente align-item-center">
                <button type="button" className="btn btn-light btn-star btn-sm me-3">
                    <i className="fas fa-star text-warning" ></i>
                </button>
                <button type="button" className="btn btn-light btn-trash btn-sm">
                    <i className="fas fa-trash text-danger"></i>
                </button>
                <i className="fas fa-heart d-none"></i>
            </div>
        </li>
    )
}

export default PostListItem