import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { uiActions } from './store/ui-slice';
import { Fragment } from 'react';
import Notification from './components/UI/Notification';

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const isShown = useSelector(state => state.ui.isShown)
  const cart = useSelector(state => state.cart) // useSlector auto put a subscription to the redux store so whenever the cart changes the compo is notified
  const notification = useSelector(state => state.ui.notification)

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data!'
      }))
      const response = await fetch('https://react-http-ba0a5-default-rtdb.firebaseio.com/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })
      if (!response.ok) {
        throw new Error('Sending cart data failed.')
      }
      // const responseData = await response.json(); we don't need the response data here / knowing that we have an error is enough
      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!'
      }))
    }

    if (isInitial) {
      isInitial = false
      return;
    }//don't send the cart data when the component is first rendered

    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sending cart data failed!'
      }))
    })
  }, [cart, dispatch]); //dispatch will never change (guaranteed by Redux) but we add it for the completeness sake to get rid of the yellow squiggly line

  return (
    <Fragment >
      {notification && <Notification status={notification.status} title={notification.title} message={notification.message} />}
      <Layout>
        {isShown && <Cart />}
        <Products />
      </Layout>
    </Fragment>
  );
}

export default App;
