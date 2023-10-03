import { useSelector, useDispatch, connect } from 'react-redux';//connect function is used here to connect class-based components to Redux but it can also be used for functional components as well
import classes from './Counter.module.css';
import { Component } from 'react';


const Counter = () => {
  const dispatch = useDispatch(); //useDispatch to dispatch/trigger an action
  const counter = useSelector(state => state.counter); // access the data in our store  // the function determines which peace of data we wanna extarct from our store
  //when we use useSelector react redux automatically set up a subscription
  // for the redux store for this component so the component will be updated and will receive the latest 
  // counter automatically whenever that data changes in the Redux store
  //changes to the Redux store will cause this component function to be re-executed so u always have the latest counter

  const show = useSelector(state => state.showCounter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  }

  const increaseHandler = () => {
    dispatch({ type: 'increase', value: 5 }); //action payload : extra property which we add to our action objects
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggle' });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      {show && <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }

//   decrementHandler() {
//     this.props.decrement();
//   }

//   toggleCounterHandler() { }

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler}>Increment</button>
//           <button onClick={this.decrementHandler}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     )
//   }
// }

// const mapStateToProps = state => {
//   return {
//     counter: state.counter
//   };
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     increment: () => dispatch({ type: 'increment' }),
//     decrement: () => dispatch({ type: 'decrement' })
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
