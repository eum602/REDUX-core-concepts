import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import reducer from './Store/reducer'

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer)//creating the store, reducer is a must

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
