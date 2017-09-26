import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import TaskIndexItem from './task_index_item';
import TaskDetailContainer from './task_detail_container';
import ListsIndexContainer from '../lists/lists_index_container';

class TasksIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ''
    };
    this.handleNewTask = this.handleNewTask.bind(this);
    this.getStateFromChild = this.getStateFromChild.bind(this);
  }

  componentDidMount() {
    const tasksPath = /tasks/.exec(this.props.match.path);
    tasksPath ? this.props.requestAllTasks() : this.props.requestAllTasks(this.props.match.params.listId);

  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.pathname !== nextProps.location.pathname)
    {const tasksPath = /tasks/.exec(nextProps.location.pathname);
    tasksPath ? nextProps.requestAllTasks() : nextProps.requestAllTasks(nextProps.match.params.listId);}
  }

  handleNewTask(e) {
    e.preventDefault();
    const state = Object.assign({},this.state);
    this.props.createTask(this.state);
    this.setState({
      title: ''
    });
  }

  getStateFromChild (dataFromChild) {
    this.props.updateTask(dataFromChild);
  }

  updateState(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  render () {
    const { tasks } = this.props;
    return (
      <section className="task-index">
        <header> Welcome User with dropdown to logout and search bar </header>
        <nav>
          <Route path='/tasks/' component={ListsIndexContainer} />
          <Route path='/lists/' component={ListsIndexContainer} />
        </nav>
        <form onSubmit={this.handleNewTask}>
          <div>
            <input
              type="text"
              className="add-task-input"
              value={this.state.title}
              onChange={this.updateState("title")}
              placeholder={"Add a task..."}
              />
          </div>
          <noscript>
          <input
            type="submit"
            value={"Add Task"}
            />
          </noscript>
        </form>
        <ul>
          {tasks.map(task => <TaskIndexItem key={task.id} task={task} callBackFromParent={this.getStateFromChild} />)}
        </ul>
        <Route path='/tasks/:taskId' component={TaskDetailContainer} />
      </section>
    );
  }
}

export default TasksIndex;
