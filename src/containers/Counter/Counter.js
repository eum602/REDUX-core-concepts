import React, { Component } from 'react';
import {connect} from 'react-redux' //connect is a function that returns a 
//HOC component
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from '../../Store/actions'

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />{/***accessing the ctr prop because
                of the connect -mapStateToProps configuration */}
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} /> {/**
                passing our ACTION to increment(onIncrementCounter) passed as prop; also we can pass
                like this:clicked={()=>this.props.onIncrementCounter()} */}
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter}/>
                <hr/>
                <button 
                    style={{
                        fontSize:'18px',                        
                        backgroundColor:'#ccc', 
                        padding:"10px",
                        boxSizing:"border-box",
                        color:"white",
                        cursor:'pointer',
                        border: '1px solid green',
                        height:'50px'
                    }} 
                    onClick={()=>this.props.onStoreResult(this.props.ctr)}//passing the ctr as a prop
                >
                    Store Result
                </button>
                <ul>
                    {this.props.storedResults.map(strResult=>(
                        <li
                            style={
                                {
                                    cursor:'pointer',
                                    listStyle:'none',
                                    fontWeight:'bold'
                                }
                            }
                            key={strResult.id} 
                            onClick={()=>this.props.onDeleteResult(strResult.id)}
                        >
                            {strResult.value}
                        </li>
                    ))}
                    
                </ul>
            </div>
        );
    }
    
}
/**DISPATCH STATES */
const mapStateToProps = state => {//how state managed by redux should be mapped to props 
    //you can use in this container
    //mapStateToProps is any name, it could be any other
    //state: the state that comes from redux
    return{
        ctr:state.ctr.counter, //adding ctr and res because of by joining reducers in one root
        //generates state as an object with property names (ctr and res) as defined in index.js
        //when created the root reducer by combining two different reducers
        storedResults:state.res.results
    }
}
/** DISPATCH ACTIONS in your container*/
const mapDispatchToProps = dispatch => {//which kind of actions do I want to dispatch on this container?
    //dispatch argument is a function 
    return {
        onIncrementCounter: () => dispatch({type:actionTypes.INCREMENT}),//whenever we call "onIncrement" into this
        //component then 'onIncrement' will execute the dispatch
        onDecrementCounter:()=>dispatch({type:actionTypes.DECREMENT}),
        onAddCounter:()=>dispatch({type:actionTypes.ADD,value:5}),
        onSubtractCounter:()=>dispatch({type:actionTypes.SUBTRACT,value:5}),
        onStoreResult:result=>dispatch({type:actionTypes.STORE_RESULT,result}),//sending the current counter
        //as a prop to be processed by the correspondent  resultReducer
        onDeleteResult:id=>dispatch({type:actionTypes.DELETE_RESULT, resultElId:id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);/**passing mapDipatchToProps(ACTIONS)
so it is available as a prop into this component. mapStateToProps(STATEs)
**If we only need to pass actions then we can do this:
export default connect(null,mapDispatchToProps)(Counter)

**If we only need to passState but no need ACTIONS then we can omit that and only pass mapStateToProps:
export default connect(mapStateToProps)(Counter)


Connect(mapStateProps) will return a function
to which we will pass our Counter component so that Counter can access the props setted on mapStatePops*/