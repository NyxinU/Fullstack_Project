import { connect } from 'react-redux';
import TaskDetail from './task_detail';
import { requestTask, updateTask, deleteTask } from '../../actions/task_actions';

const mapStateToProps = (state, ownProps) => {
  const task = state.entities.tasks[ownProps.match.params.taskId];

  return {
    task
  };
};

const mapDispatchToProps = dispatch =>({
  requestTask: id => dispatch(requestTask(id)),
  updateTask: task => dispatch(updateTask(task)),
  deleteTask: id => dispatch(deleteTask(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);
