
import * as React from "react";

import { connect, Dispatch } from 'react-redux'
import { toggleTodo } from '../actions/actions'
import Header from './Header'

const mapStateToProps = (state: any) => {
    // to do something with component
    return {
        headertexts: state.todos,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<any>) => {
    // to dispatch a event
    return {
        onHeaderClick: (param: string) => {
            dispatch(toggleTodo(param))
        }
    }
}



const HeaderWrapper = connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)

export default HeaderWrapper