import React, { Component } from 'react';
import Task from "./components/task/task";
import TaskInput from "./components/task-input/task-input";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      tasks: [
        { id: 0, title: 'Create todo-React app', done: false },
        { id: 1, title: 'Make homework', done: true },
        { id: 2, title: 'Create simple todo-React app', done: false }
      ]
    };
  };

  addTask = task => {
    this.setState(state => {
      let { tasks } = state;
      tasks.push({
        id: tasks.length !== 0 ? task.length : 0,
        title: task,
        done: false
      });
      return tasks;
    });
  };

  doneTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      tasks[index].done = true;
      return tasks;
    });
  };

  deleteTask = id => {
    const index = this.state.tasks.map(task => task.id).indexOf(id);
    this.setState(state => {
      let { tasks } = state;
      delete tasks[index];
      return tasks;
    });
  };

  render() {
    const { tasks } = this.state;
    const activeTasks = tasks.filter(task => !task.done);
    const doneTasks = tasks.filter(task => task.done);

    return (
      <div className="App">
        <h1 className="top">Active tasks: {activeTasks.length}</h1>
        {[...activeTasks, ...doneTasks].map(task => (
          <Task
            doneTask={() => this.doneTask(task.id)}
            deleteTask={() => this.deleteTask(task.id)}
            task={task}
            key={task.id}>
          </Task>
        ))
        }
        <TaskInput addTask={this.addTask}></TaskInput>
      </div>
    );
  };
};



