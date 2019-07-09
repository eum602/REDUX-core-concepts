const initialState =  {
    counter: 0,
    results:[]
}
const reducer = (state=initialState,action) =>{//defining the reducer
    switch(action.type){
        case('INCREMENT'):
            /**this SHOULD NEVER BE DONE:
             * const newState =  state
             * newState.counter = state.counter +1
             * return newState
             * Because in this way we are MUTATING THE OLD STATE
             * One way to make a true copy is through:
             * const newState = Object.assign({},state) //make a true cloned copy NOT POINTER
             * an so doing CHANGING STATE IMNUTABLY
             */
            return {
                //changing state IMMUTABLY
                ...state, //now we use ...state(OPTIONAL TO Object.assign({},state)) to make a true copy because state has more 
                //than one property and so if omitting this then state.counter +1 would replace state and thus 
                //other properties could be lost
                counter: state.counter + 1
            }
        
        case('DECREMENT'):
            return {
                ...state,
                counter: state.counter - 1
            }
        
        case('ADD'):
            return {
                ...state,
                counter: state.counter + action.value
            }
        
        case('SUBTRACT'):
            return {
                ...state,
                counter: state.counter - action.value
            }
        case('STORE_RESULT'):
            return{
                ...state,
                results: state.results.concat({id: new Date(),value:state.counter})
                //concat does the sa,e than push in an array but concat creates a new copy
                //to do its work so this operates in an immutable way(not touchinh original object)
            }

        case('DELETE_RESULT'):
            //const id = 2
            // const newArray = [...state.results]//creates a true copy of the simple elements into the array
            // //but if they are objects then those elements will continue being pointers to
            // //the original objects so in that case [...] wont be enough
            //newArray.splice(id,1) //this approach not fit best to our case but really creates a true copy.

            //Another approach to create a true copy af an ARRAY is to use a filter method:
            const updatedArray = state.results.filter(result =>result.id!==action.resultElId)//filters return a new array
            //if we do state.results.filter(result=>true) then it will return the same as [...state.results]

            return {
                ...state,
                results: updatedArray //copy of the old array but updated                                
            }
            
        
    }

    return state
}

export default reducer