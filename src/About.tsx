import * as React from "react";
import * as ReactDOM from 'react-dom';

export class About extends React.Component<any, any>{

    render() {
        let source = require("./icon.jpg").toString();
        return <div>About
        <img src={source}></img></div>
    }
}
