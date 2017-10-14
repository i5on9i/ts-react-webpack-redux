
import * as React from "react";


import {addToHeader} from '../actions/actions';
import { connect, Dispatch, DispatchProp } from 'react-redux'


export interface HelloEveryoneProps extends React.Props<any>, DispatchProp<any> {
    compiler: string;
    framework: string;

}


// 'HelloEveryoneProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export class HelloEveryone extends React.Component<HelloEveryoneProps> {
    render() {
        return (
            <div>
                <h1>
                    Hello from {this.props.framework}!
                </h1>
                <button onClick={this.onClick.bind(this)}>Redux test</button>
            </div>
        );
    }

    onClick(e: any){
        
        this.props.dispatch(addToHeader(e.target.value))
    }
}

export const Hello2 = connect()(HelloEveryone)