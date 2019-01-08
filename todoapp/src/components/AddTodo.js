import React, { Component } from 'react'

class AddTodo extends Component {
  state = {
    content: ''
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // call function to add a todo 
    // (I think it's not a better way to check which func we need to use, but for simple task it is enough)
    if (window.location.pathname === '/redux-stored') {
      this.props.addStoredTodo(this.state);
      this.setState({ content: '' })
    } else {
      this.props.addTodo(this.state);
      this.setState({ content: '' })
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add a new todo:</label>
          <input type="text" onChange={this.handleChange} value={this.state.content} />
        </form>
      </div>
    )
  }
}

export default AddTodo