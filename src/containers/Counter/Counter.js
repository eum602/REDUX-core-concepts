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
                <CounterControl label="Increment" clicked={() => this.counterChangedHandler( 'inc' )} />
                <CounterControl label="Decrement" clicked={() => this.counterChangedHandler( 'dec' )}  />
                <CounterControl label="Add 5" clicked={() => this.counterChangedHandler( 'add', 5 )}  />
                <CounterControl label="Subtract 5" clicked={() => this.counterChangedHandler( 'sub', 5 )}  />
            </div>
        );
    }
    
}
//creatig a function after our class based component
const mapStateToProps = state => {//how state managed by redux should be mapped to props 
    //you can use in this container
    //mapStateToProps is any name, it could be any other
    //state: the state that comes from redux
    return{
        ctr:state.counter
    }
}

export default connect(mapStateToProps)(Counter);/**connect(mapStateProps) will return a function
to which we will pass our Counter component so that Counter can access the props setted on mapStatePops  */