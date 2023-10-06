import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const itemsQuantity = useSelector(state => state.cart.totalQuantity)
  const dispatch = useDispatch();

  const handleCartClick = () => {
    dispatch(uiActions.toggleCart()) //toggle is an action creator method 
  }

  return (
    <button className={classes.button} onClick={handleCartClick}>
      <span>My Cart</span>
      <span className={classes.badge}>{itemsQuantity}</span>
    </button>
  );
};

export default CartButton;
