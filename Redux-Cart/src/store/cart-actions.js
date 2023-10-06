//action creators (Thunks)
import { cartActions } from "./cart-slice-with-action-creator";
import { uiActions } from "./ui-slice"

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch('https://react-http-ba0a5-default-rtdb.firebaseio.com/cart.');

            if (!response.ok) {
                throw new Error('Could not fetch cart data');
            }
            const data = await response.json();

            return data;
        };
        try {
            const cartData = await fetchData(); //cart data has the correct structure already because we're usung PUT and not POST
            dispatch(cartActions.replaceCart(cartData));
            // dispatch(cartActions.replaceCart({
            //     items: cartData.items || [],
            //     totalQuantity: 0
            // }));//to ensure that we never end up with items being undefined (when all the data is deleted is turns to undefined)
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Fetching cart data failed!'
            }))
        }
    }
}

export const sendCartData = (cart) => {
    // return {type: '', payload: ...}
    return async (dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'pending',
            title: 'Sending...',
            message: 'Sending cart data!'
        }))

        const sendRequest = async () => {
            const response = await fetch('https://react-http-ba0a5-default-rtdb.firebaseio.com/cart.json', {
                method: 'PUT',
                // body: JSON.stringify(cart)
                body: JSON.stringify({ items: cart.items, totalQuantity: cart.totalQuantity }) //to do not show the 'changed' state in the firebase
            })
            if (!response.ok) {
                throw new Error('Sending cart data failed.')
            }
        }
        try {
            await sendRequest();
            dispatch(uiActions.showNotification({
                status: 'success',
                title: 'Success!',
                message: 'Sent cart data successfully!'
            }))
        } catch (error) {
            dispatch(uiActions.showNotification({
                status: 'error',
                title: 'Error!',
                message: 'Sending cart data failed!'
            }))
        }
    }
}
