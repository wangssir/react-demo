import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Detail from './detail'

export default class List extends Component {
  routerLink = () => {
    this.props.history.push('/list/detail/0')
  }

  render () {
    return (
      <div>
        <h1>这是List</h1>
        <ul>
          <li>
            <a onClick={this.routerLink}>Detail</a>
          </li>
        </ul>
        <Switch>
          {/*<Route exact path="/list">
             <h3>Please select a list.</h3>
    </Route>*/}
          <Route path={`/list/detail/:topicId`}>
            <Detail />
          </Route>
        </Switch>
      </div>
    )
  }
} 