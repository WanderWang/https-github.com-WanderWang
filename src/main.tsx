import * as React from "react";
import * as ReactDOM from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router'
import { App } from './App';
import { About } from './About';

require("./app.css")

class Main extends React.Component<any, any>{

    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={App}>
                    <Route path="about" component={About} />
                </Route>
            </Router>
        )
    }
}

let app = document.getElementById("app");
ReactDOM.render(<Main />, app);