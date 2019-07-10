import * as actionTypes from '../actions'
const initialState =  {
    results:[]
}
const reducer = (state=initialState,action) =>{//defining the reducer for result state
    switch(action.type){        
        case(actionTypes.STORE_RESULT):
            return{
                ...state,
                results: state.results.concat({id: new Date(),value:action.result})//getting the
                //current counter(result) as a property in a payload
            }

        case(actionTypes.DELETE_RESULT):            
            const updatedArray = state.results.filter(result =>result.id!==action.resultElId)

            return {
                ...state,
                results: updatedArray //copy of the old array but updated
            }
    }

    return state
}

export default reducer