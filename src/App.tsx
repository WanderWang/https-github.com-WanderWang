import * as React from "react";
import * as ReactDOM from 'react-dom';


type AppState = {

    message: string;
}


export class App extends React.Component<React.Props<any>, AppState>{

    constructor() {
        super();
        this.state = { message: '111' };
    }


    onClick() {
        this.setState({ message: '2222' });


    }

    render() {

        return (
            <div onClick={() => this.onClick()}>
                {this.state.message}
                {this.props.children}
            </div>
        )
    }
}