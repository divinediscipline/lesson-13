import { createSelector } from 'reselect';

const selectCart = state => state.cart

// returns the number of items in cart grouped by item type
export const selectCartItems = createSelector (
  [selectCart],
  cart => cart.cartItems
);

// returns the number of items in cart, ungrouped
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  )
)



// determines if cart should be hidden or not
export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
)

// returns the total price of all the items in cart
export const selectCartTotal = createSelector(
  [selectCartItems],
  cartItems => cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + (cartItem.quantity * cartItem.price),
    0
  )
)