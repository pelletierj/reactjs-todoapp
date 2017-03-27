import React, { Component } from 'react';
import './App.css';
import _ from 'lodash';
import CreateTodo from  './components/create-todo.js'
import Todoslist from './components/todo-list.js';

const todos = [
  {
    task: 'make react app',
    isCompleted: false
  },
  {
    task: 'eat lunch',
    isCompleted: true
  }
];

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
        todos : todos
    };
  }


  render() {
    return (
        <div className="App">
        <h1> React ToDos App</h1>
        <CreateTodo todos={this.state.todos} createTask={this.createTask.bind(this)}/>
        <Todoslist
            todos={this.state.todos}
            toggleTask={this.toggleTask.bind(this)}
            saveTask={this.saveTask.bind(this)}
            deleteTask={this.deleteTask.bind(this)}
        />
        </div>
    );
  }

  createTask(task) {
      this.state.todos.push({
          task,
          isCompleted: false
      });
      this.setState({todos: this.state.todos});
  }

    toggleTask(task) {
        const foundTodo = _.find(this.state.todos, todo => todo.task === task);
        foundTodo.isCompleted = !foundTodo.isCompleted;
        this.setState({ todos: this.state.todos });
    }

    saveTask(oldTask, newTask){
        const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
        foundTodo.task = newTask;
        this.setState({ todos: this.state.todos });
    }

    deleteTask(taskToDelete){
        _.remove(this.state.todos, todo => todo.task === taskToDelete);
        this.setState({ todos: this.state.todos });
    }
}

export default App;
