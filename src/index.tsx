import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from 'react-router-dom'

// import { Provider } from 'react-redux'
// import { createStore } from 'redux'
// import {todoApp} from './reducers/todoApp'

import SignUp from "./components/SignUp";



// let store = createStore(todoApp)

document.addEventListener("DOMContentLoaded", function() {
    ReactDOM.render(
        // <Provider store={store}>
            <HashRouter>
                <SignUp />
            </HashRouter>
        // </Provider>
        ,
        document.getElementById('example'));
});