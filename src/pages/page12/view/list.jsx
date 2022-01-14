import React, { Component } from 'react'
import { Button } from 'antd'
import Detail from './detail';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Routes,
    useRouteMatch
} from "react-router-dom";
export default class List extends Component {
    onClick = () => {
        console.log('click', this.props);
        // this.props.history.push(`/page12/detail/0`)
        this.props.history.push(`/detail/0`)

        // this.props.history.push(`/detail`)

    }
    render() {
        return (
            <div>
                这是List页面
                <Button onClick={this.onClick}>详情</Button>
                <Switch>
                    <Route path={`/detail/:Id`} >
                        <Detail />
                    </Route>
                </Switch>
            </div>
        )
    }
}
