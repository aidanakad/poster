import React, {Component} from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
import './app.css'

export default class App extends Component {
    constructor(props){
        super(props)
        this.state={
            data:[
                {label: 'Going to learn', important:true, like:false, id:1},
                {label: 'Do not have working mood', important: false, like:false, id:2},
                {label: 'Some post...', important: false, like:false, id:3}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)
        this.onToggleImportant= this.onToggleImportant.bind(this)
        this.onToggleLiked=this.onToggleLiked.bind(this)
        this.maxItem = 4
    }

    deleteItem(id){
       this.setState(({data})=>{
           const index = data.findIndex(item => item.id === id)
           const newArr = [...data.slice(0, index), ...data.slice(index + 1)] //before and after array without selected element

           return{
               data: newArr
           }
       })
    }

    addItem(body){
        const newItem = {
            label:body,
            important:false,
            id: this.maxItem++
        }

        this.setState(({data})=>{
            const newData = [...data, newItem]

            return{
                data: newData
            }
        })
    }

    onToggleImportant(id){
        console.log(`important ${id}`)
    }

    onToggleLiked(id){
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id)
            const old = data[index]
            const newItem = {...old, like: !old.like}

            const newArr =  [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return{
                data: newArr
            }
        })
    }

    render(){
        return(
            <div className="app container" style={{bacgroundColor: "#add8e6"}}>
            <AppHeader/>
            <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList 
                posts={this.state.data}
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleLiked={this.onToggleLiked}
            />
            <PostAddForm
            onAdd={this.addItem}/>
        </div>
        )
        
    }
}

