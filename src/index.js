import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import reducer from './Store/reducer'
import {Provider} from 'react-redux'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)//creating the store, reducer is a must

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));//wrapping our app with a
//PROVIDER from react-redux so inject our store into the react components
registerServiceWorker();
