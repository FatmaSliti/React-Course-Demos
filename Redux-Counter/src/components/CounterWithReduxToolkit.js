import { useSelector, useDispatch } from 'react-redux';//connect function is used here to connect class-based components to Redux but it can also be used for functional components as well
import classes from './Counter.module.css';
// import { counterActions } from '../store/indexWithReduxToolkit';
import { counterActions } from '../store/counter-slice';

const Counter = () => {
    const dispatch = useDispatch(); //useDispatch to dispatch/trigger an action
    const counter = useSelector(state => state.counter.counter); // access the data in our store  // the function determines which peace of data we wanna extarct from our store
    //when we use useSelector react redux automatically set up a subscription
    // for the redux store for this component so the component will be updated and will receive the latest 
    // counter automatically whenever that data changes in the Redux store
    //changes to the Redux store will cause this component function to be re-executed so u always have the latest counter

    const show = useSelector(state => state.counter.showCounter);

    const incrementHandler = () => {
        dispatch(counterActions.increment());
    }

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    }

    const increaseHandler = () => {
        dispatch(counterActions.increase(10));
    }

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggleCounter());
    };

    // increment decrement increase and ... are not the reducer methods but instead these methods are created automatically by redux toolkit which when called wwill create action objects for us :{ type: 'increase', payload: 5 }
    // These methods are called action creators

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
