const redux  = require('redux')
const createStore = redux.createStore

const initialState = { //this can also be a number or whatever
    counter:0
}

//Reducer
    const rootReducer = (state = initialState, action) => { //state:current state to update
        //state is initialized to initialState object(if that is not defined)
        if(action.type==='INC_COUNTER'){
            return {
                ...state,
                counter:state.counter + 1
            }
        }
        if(action.type==='ADD_COUNTER'){
            return {
                ...state,
                counter:state.counter + action.value //incrementing the value we sent to add
            }
        }
        return state //it now does not do nothing yet
    }

//Store
    const store = createStore(rootReducer)//store must be initialized with a reducer
    //the reducer is the only one connected to the state, that is why we initialize with a reducer
    console.log(store.getState()) //will return undefined unless we initialize the state



//Subscription
    store.subscribe(()=>{
        console.log('Subscription',store.getState()) //qe get informed each time a new dispatch is executed
    })//we put Subscription before any dispatch, so subscription is triggered before any dispatch happens

//Dispatching action
    store.dispatch({type: 'INC_COUNTER'}) //argument is a javascript object which represents the action
    //use UPPERCASE for type

    //you can add other properties like{type:'ADD_COUNTER', value:..., name:...}
    //or also you can add the payload:
    //store.disptach({type:'ADD_COUNTER',payload:{}})//payload is a javascript object
    store.dispatch({type: 'ADD_COUNTER',value:10})
    console.log(store.getState())