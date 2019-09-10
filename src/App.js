// import "@fortawesome/fontawesome-free/css/all.min.css";
import React, { Component } from 'react'

import uuid from 'uuid';
//import 'bootstrap/dist/css/bootstrap.min.css';

import ToDoList from './components/ToDoList';
import ToDoInput from './components/ToDoInput';

class App extends Component {

  state={
    items : [],
    id : uuid,
    item : '',
    editItem : false
  };

  handleChange = e =>{
    this.setState({
      item: e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id:this.state.id,
      title:this.state.item
    }
    const updateItems = [...this.state.items, newItem]

    this.setState({
      items:updateItems,
      item:'',
      id:uuid(),
      editItem: false
    })
  }

  clearList = () => {
    this.setState({
      items:[]
    })
  }

  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item=>item.id !== id);
    this.setState({
      items:filteredItems
    })
  }

  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item=>item.id !== id);
    this.setState({
      items:filteredItems
    })

    const selectItem = this.state.items.find(item=> item.id === id);
    this.setState({
      items:filteredItems,
      item:selectItem.title,
      id: id,
      editItem: true
    })
  }

  render() {

    console.log(this.state);

    return (
      <div className = "container">
        <div className = "row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className = "text caplitalize text-center">
              to do list  
            </h3>
            <ToDoInput 
              item={this.state.item} 
              handleChange={this.handleChange} 
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            >
              
            </ToDoInput>
            <ToDoList
              items={this.state.items}
              handleEdit={this.handleEdit}
              handleDelete={this.handleDelete}
              clearList={this.clearList}
            >

            </ToDoList>
          </div>
        </div>
      </div>
    )
  }
}

export default App;