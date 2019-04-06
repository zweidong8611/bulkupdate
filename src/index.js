import React from 'react';
import ReactDOM from 'react-dom';
//import App from './components/App';
import NavigationBar from './components/NavigationBar'


import logger from 'redux-logger'
import {composeWithDevTools}  from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import {createStore,applyMiddleware}  from 'redux';
import {Provider}  from 'react-redux';
import reducers from './reducers';
import {BrowserRouter as Router} from 'react-router-dom'
import routes from './routers'

const store=createStore(reducers,
  composeWithDevTools(applyMiddleware(thunk,logger))  
    )
ReactDOM.render(
<Provider store={store}>
<div>
    <Router>
        <NavigationBar />
        {routes}
    </Router>
    </div>
</Provider>, 
document.getElementById('root'));
