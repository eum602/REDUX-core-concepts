const initialState =  {
    counter: 0
}
const reducer = (state=initialState,action) =>{//defining the reducer
    switch(action.type){
        case('INCREMENT'):
            return {
                //...state, //omitting this because on initial state (old state) we only have one property (counter)
                counter: state.counter + 1
            }
        
        case('DECREMENT'):
            return {
                counter: state.counter - 1
            }
        
        case('ADD'):
            return {        
                counter: state.counter + action.value
            }
        
        case('SUBTRACT'):
            return {
                counter: state.counter - action.value
            }            
        
    }

    return state
}

export default reducer