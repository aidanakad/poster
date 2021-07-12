import React, {Component} from 'react';

export default class PostListItem extends Component{
    
    render(){
        const {label, onDelete, onToggleImportant, onToggleLiked, important, like}  = this.props
        let classNames = 'app-list-item d-flex justify-content-between mb-2'
        let btnClass = 'fas fa-star'
        let icon ='d-flex align-self-center fas '
        if(important){
            classNames += ' text-warning'
            btnClass += ' text-warning'
        }
        if(like){
            icon += 'fa-heart text-danger me-3'
        }
    
        return(
            <div className={classNames}>
                <span className="app=list-item-label fw-bold" style={{cursor:'pointer'}} onClick={onToggleLiked}>{label}</span>
                <div className="d-flex justify-content-cente align-item-center ">
                <i className={icon}></i>
                    <button type="button" className="btn btn-light btn-star btn-sm me-3" onClick={onToggleImportant}>
                        <i className={btnClass} ></i>
                    </button>
                    <button type="button" className="btn btn-light btn-trash btn-sm" onClick={onDelete}>
                        <i className="fas fa-trash text-danger"></i>
                    </button>
                    
                </div>
            </div>
        )
    }
}