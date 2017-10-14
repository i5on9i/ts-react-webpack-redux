
import * as React from "react";


import { connect, Dispatch, DispatchProp } from 'react-redux'



  
export interface HeaderProps extends React.Props<any>, DispatchProp<any> {
    todos: any[];
    onHeaderClick: (param: string)=>void;

    dispatch?: Dispatch<any>;
}


// 'HelloProps' describes the shape of props.
// State is never set so we use the 'undefined' type.
export default class Header extends React.Component<HeaderProps> {
    render() {
        let todos = this.props.todos.map((val, i)=>{
            return (<div key={i}>{val.id}</div>);
        })
        return (
            <div>
                Header
                <button
                    onClick={this.onClick.bind(this)}>
                    reduct test header
                </button>
                <div>
                    {todos}
                </div>
            </div>
        );
    }

    onClick(param: string){
        if(this.props.onHeaderClick){
            this.props.onHeaderClick(param);
        }
    }
}



