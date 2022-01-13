import React, { Component } from 'react'

import List from './view/list'
import Detail from './view/detail'
import {
  // HashRouter as Router,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
function App() {
  return (
    <div id="page1">
      <Router >
        {/* <switch>
          <Route exact path="/" component={List} />
          <Route path='/Detail' component={Detail} ></Route>
        </switch> */}
        <Switch>
          <Route exact path="/page12" component={List} />
        </Switch>
      </Router>
    </div >
  )
}

export default App

