import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import { auth } from '../../firebase/firebase.utils';

import CartIcon from '../cart-icon/cart-icon.component'
import { ReactComponent as Logo } from '../../assets/crown.svg';

// import './header.styles.scss';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCurrentUser} from '../../redux/user/user.selector';
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles'

const Header = ({ currentUser, hidden }) => (
  
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    {console.log(444, currentUser)}
    <OptionsContainer>
      <OptionLink to='/shop'>
        SHOP
      </OptionLink>
      <OptionLink to='/shop'>
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to='/signin'>
          SIGN IN
        </OptionLink>
      )}
      <CartIcon/>
    </OptionsContainer>
      { hidden ? null : <CartDropdown/> }
   </HeaderContainer>
);

// mapStateToProps takes the complete state as an argument which is being destructured here to give the current user and hidden properties(please check a previous commit before selectors were introduced to see this)
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
