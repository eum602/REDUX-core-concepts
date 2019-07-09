import React, { Component } from 'react';
import {connect} from 'react-redux' //connect is a function that returns a 
//HOC component
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
        ctr:state.counter
    }
}
/** DISPATCH ACTIONS in your container*/
const mapDispatchToProps = dispatch => {//which kind of actions do I want to dispatch on this container?
    //dispatch argument is a function 
    return {
        onIncrementCounter: () => dispatch({type:'INCREMENT'}),//whenever we call "onIncrement" into this
        //component then 'onIncrement' will execute the dispatch
        onDecrementCounter:()=>dispatch({type:'DECREMENT'}),
        onAddCounter:()=>dispatch({type:'ADD',value:5}),
        onSubtractCounter:()=>dispatch({type:'SUBTRACT',value:5})
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