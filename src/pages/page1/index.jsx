import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import App from './app'
import './index.scss'

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('container'))
