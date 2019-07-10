import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers} from 'redux' //combine reducers help us merge multiple
//reducer in only one

import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './Store/Reducers/counter'
import resultReducer from './Store/Reducers/result'

const rootReducer =  combineReducers({
    ctr: counterReducer, //ctr and res are any name we can set
    res: resultReducer
})

const store = createStore(rootReducer)//creating the store, reducer rootReducer is now passed.


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));//wrapping our app with a
//PROVIDER from react-redux so inject our store into the react components
registerServiceWorker();
