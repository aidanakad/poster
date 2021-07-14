import React, {Component} from 'react';

export default class PostStatusFilter extends Component{
    constructor(props){
        super(props)
        this.btns = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Liked'}
        ]
    }
    render(){
        const btns = this.btns.map(({name, label}) => {
            const active = this.props.filter === name
            const clazz = active ? 'btn-success' : 'btn-outline-secondary'
            return(
                <button key={name} className={`btn ${clazz}`} onClick={()=> this.props.onFilterSelect(name)}> {label}</button>
            )
        })
        return(
            <div className="btn-group">
                {btns}
            </div>
        )
    }
   
}
