import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

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

const mapStateToProps = (state) => {
  console.log( 'I am being called anytime the state is chnaged')
  // The reduce function here is a selector as it takes a slice of the state and derives some value from it usually on the fly
  // selectors are just functions that take a part/all of the state and derives some value from it
  return { itemCount: selectCartItemsCount(state) }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
