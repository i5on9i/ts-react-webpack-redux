import * as React from "react";
import {Link, Switch, Route} from 'react-router-dom'


import {Hello2} from './Hello2'

import HeaderWrapper from './HeaderWrapper'

export interface SignUpProps { compiler: string; framework: string; }

// 'SignUpProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export default class SignUp extends React.Component<undefined, undefined> {
    render() {
        return (
            <div>
                <HeaderWrapper />
                <Hello2 compiler='test' framework='test-f'/>
               
            </div>
        );
    }
}
