import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Detail from './detail'
import '../index.less'

export default class List extends Component {
  routerLink = () => {
    console.log(this.props, '====')
    this.props.history.push(`${this.props.location.pathname}/detail/0`);

  }

  render() {
    return (
      <div>
        <h1>这是List</h1>
        <ul>
          <li>
            <a onClick={this.routerLink}>查看</a>
          </li>
        </ul>
      </div>
    )
  }
} 