import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component'
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser} from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors'

const Header = ({ currentUser, hidden }) => (
  
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    {console.log(444, currentUser)}
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon/>
    </div>
      { hidden ? null : <CartDropdown/> }
    
  </div>
);

// mapStateToProps takes the complete state as an argument which is being destructured here to give the current user and hidden properties(please check a previous commit before selectors were introduced to see this)
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
