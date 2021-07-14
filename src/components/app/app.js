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
            ],
            term: '',
            filter: 'all'
        }
        this.deleteItem = this.deleteItem.bind(this)
        this.addItem = this.addItem.bind(this)
        this.onToggleImportant= this.onToggleImportant.bind(this)
        this.onToggleLiked=this.onToggleLiked.bind(this)
        this.maxItem = 4
        this.onUpdateSearch = this.onUpdateSearch.bind(this)
        this.filterPost = this.filterPost.bind(this)
        this.onFilterSelect = this.onFilterSelect.bind(this)
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
        this.setState(({data})=>{
            const index = data.findIndex(elem => elem.id === id)
            const old = data[index]
            const newItem = {...old, important: !old.important}

            const newArr =  [...data.slice(0, index), newItem, ...data.slice(index + 1)]

            return{
                data: newArr
            }
        })
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

    searchPost(items,term){
        if(term.length === 0){
            return items 
        }

        return items.filter((item) =>{
            return item.label.indexOf(term) > -1
        })
    }

    onUpdateSearch(term){
        this.setState({term})
    }

    filterPost(items, filter){
        if(filter === 'like'){
            return items.filter(item => item.like)
        }
        else{
            return items 
        }
    }

    onFilterSelect(filter){
        this.setState({filter})
    }

    render(){
        const {data, term, filter} = this.state

        const liked = this.state.data.filter(item => item.like).length
        const allPosts = this.state.data.length

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter) 
        return(
            <div className="app container" style={{bacgroundColor: "#add8e6"}}>
            <AppHeader
                liked={liked}
                allPosts={allPosts}
            />
            <div className="search-panel d-flex">
                <SearchPanel onUpdateSearch= {this.onUpdateSearch}/>
                <PostStatusFilter filter= {filter} onFilterSelect = {this.onFilterSelect}/>
            </div>
            <PostList 
                posts={visiblePosts}
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

