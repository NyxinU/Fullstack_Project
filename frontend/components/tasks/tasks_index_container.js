import { connect } from 'react-redux';

import HomepageIndex from './tasks_index';
import { requestAllTasks, updateTask, createTask } from '../../actions/task_actions';
import { allTaskAsArray, completedTasks, incompleteTasks } from '../../reducers/selectors';

const mapStateToProps = state => ({
  tasks: allTaskAsArray(state.entities),
  lists: state.entities.lists,
  completedTasks: completedTasks(state.entities),
  incompleteTasks: incompleteTasks(state.entities),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestAllTasks: (id, query) => dispatch(requestAllTasks(id, query)),
  updateTask: task => dispatch(updateTask(task)),
  createTask: task => dispatch(createTask(task))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomepageIndex);
