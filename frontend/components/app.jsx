import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import SessionFormContainer from './session_form/session_form_container';
import ListsIndexContainer from './lists/lists_index_container';
import HomepageIndexContainer from './tasks/tasks_index_container';
import TaskDetailContainer from './tasks/task_detail_container';
import GreetingContainer from './greeting/greeting_container';
import TestComponent from './tasks/test_component';

const App = () => (
  <div className="wrapper">
    <Switch>
      <AuthRoute path="/login" component={SessionFormContainer} />
      <AuthRoute path="/signup" component={SessionFormContainer} />
      <Route path="/lists/:listId" component={HomepageIndexContainer} />
      <Route path="/lists" component={HomepageIndexContainer} />
      <Route exact path="/" component={GreetingContainer} />
    </Switch>
  </div>
);

export default App;

// <Route path='/lists/:listId/:taskId' component={GreetingContainer} />
