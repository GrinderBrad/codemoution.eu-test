import React from 'react';
import {IndexRoute, Route} from "react-router";
import IndexPage from "./components/IndexPage/IndexPageContainer";
import App from "./components/App/App";

export default (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={IndexPage}/>
        </Route>
    </div>
)