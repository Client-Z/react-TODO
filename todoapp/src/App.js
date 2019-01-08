import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SimpleTodo from './components/simpleTodoPart/simpleTodo';
import StoredTodo from './components/reduxTodoPart/StoredTodo';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component={SimpleTodo} />
          <Route path='/redux-stored' component={StoredTodo} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
