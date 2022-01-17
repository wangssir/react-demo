import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import List from './view/list'
import Detail from './view/detail';

function App() {
  return (
    <Router>
      <div id="page1">
        <Switch>
          <Route exact path={`/app/event/page1`} component={List} />
          <Route exact path={`/app/event/page1/detail/:id`} component={Detail} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
