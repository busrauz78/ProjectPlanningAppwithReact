import React ,{Component}from 'react';

import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Navbar from './component/layout/Navbar';
import Dashboard from './component/dashboard/Dashboard';
import SignIn from './component/auth/SignIn';
import SignUp from './component/auth/SignUp';
import ProjectCreate from './component/project/ProjectCreate';
import ProjectDetail from './component/project/ProjectDetail';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
     <div>
      <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={ProjectCreate} />
          <Route path='/projects/:id' component={ProjectDetail} />
        </Switch>
        </div>
        </BrowserRouter>
   )
  }
}

export default App;
