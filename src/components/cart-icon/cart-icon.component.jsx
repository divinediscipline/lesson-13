import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingIcon className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});


// This is what mapStatetoProps will look like without reselect
// const mapStateToProps = ({ cart: { cartItems } }) => {
//   console.log( 'I am being called anytime the state is chnaged i.e a reducer function fires')
//   // The reduce function here is a selector as it takes a slice of the state and derives some value from it usually on the fly
//   // selectors are just functions that take a part/all of the state and derives some value from it
//   return { itemCount: cartItems.reduce(
//     (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
//     0
//   )}
// }

// just to be clear, mapStateToProps is still being called anytime any reducer funtion is triggered despite the use of reselect
// the major purpose of reselect is that it prevents recomputation of complex logic that might be inside our mapStateToProps by memoizing the result
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
