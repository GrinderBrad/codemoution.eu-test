import React from 'react';
import ReactDOM from 'react-dom';
import {applyMiddleware, compose, createStore} from 'redux';
import {routerMiddleware, syncHistoryWithStore} from 'react-router-redux';
import {browserHistory, Router} from 'react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from "./rootReducer";
import routes from "./routes";
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import WebFont from 'webfontloader';

WebFont.load({
    google: {
        families: ['Roboto:300,400,700', 'Open Sans', 'Proxima Nova:300,400,700'],
    },
});

const composeEnhancers = (process.env.NODE_ENV !== 'production' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const enhancer = composeEnhancers(applyMiddleware(thunk, routerMiddleware(browserHistory)));
const store = createStore(rootReducer, enhancer);



if (module.hot) {
    module.hot.accept('./rootReducer', () =>
        store.replaceReducer(rootReducer)
    );
}

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
