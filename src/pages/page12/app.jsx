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
import Mymodal from './view/myModal';
import ComfirmModal from './view/confirmModal';
import MyCalendar from './view/myCalendar';
import MyDatapicker from './view/myDatapicker'
function App() {
  return (
    <div id="page1">
      {/* <Router > */}
      {/* <switch>
          <Route exact path="/" component={List} />
          <Route path='/Detail' component={Detail} ></Route>
        </switch> */}
      {/* <Switch>
          <Route path="/" component={List} />
          <Route path='/page12/detail/:Id' component={Detail} ></Route>
        </Switch>
      </Router> */}
      {/* <Mymodal /> */}
      {/* <ComfirmModal></ComfirmModal> */}
      {/* <MyDatapicker></MyDatapicker> */}
      111
    </div >
  )
}

export default App

