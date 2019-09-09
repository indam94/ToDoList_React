import React, { Component } from 'react'

export default class ToDoInput extends Component {

    render() {

        const {item, handleChange, handleSubmit, editItem} = this.props;

        return (
            <div className= "card card-body my-3">
                <form onSubmit={handleSubmit}></form>
            </div>
        )
    }
}
