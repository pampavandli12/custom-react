import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Users from './containers/Users';
import AsyncComponent from './hoc/AsyncComponent/AsyncComponent';

const AsyncPizza = AsyncComponent(() => {
  return import('./containers/Pizza');
});
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to='/'>Users</Link>|<Link to='/pizza'>Pizza</Link>
        </div>
        <div>
          <Route path='/pizza' component={AsyncPizza} />
          <Route path='/' component={Users} />
        </div>
      </div>
    );
  }
}

export default App;
