const redux  = require('redux')
const createStore = redux.createStore

const initialState = { //this can also be a number or whatever
    counter:0
}

//Reducer
const rootReducer = (state = initialState, action) => { //state:current state to update
    //state is initialized to initialState object(if that is not defined)
    return state //it now does not do nothing yet
}

//Store
const store = createStore(rootReducer)//store must be initialized with a reducer
//the reducer is the only one connected to the state, that is why we initialize with a reducer
console.log(store.getState()) //will return undefined unless we initialize the state

//Dispatching

//Subscription