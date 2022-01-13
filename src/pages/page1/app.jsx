import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import List from './view/list'

function App () {
  return (
    <Router>
      <div id="page1">
        {/*
         <p>我是PAGE1，Hello World</p>
        <Link to="/list">Topics</Link>
       */}
        <Switch>
          <Route path="/" component={List} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
