import { Outlet } from "react-router-dom";
import { Fragment } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { selectCurrentUser, selectIsUserMenuOpen } from "../../store/user/user.selector";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.jsx';
import { signOutUser } from "../../utils/firebase/firebase.utils"; /// to be added to user menu dropdown
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
// import { CartContext } from "../../contexts/cart.context";
import { NavigationContainer, NavLinks, Navlink, LogoContainer } from "./navigation.styles";
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { setIsUserMenuOpen } from "../../store/user/user.slice.js";
import { UserDropdown } from "../../components/user-dropdown/user-dropdown.component.jsx";




const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isUserMenuOpen = useSelector(selectIsUserMenuOpen);
  // const {isCartOpen} = useContext(CartContext);
  const isCartOpen = useSelector(selectIsCartOpen);
  
  const toggleUserMenu = () => dispatch(setIsUserMenuOpen(!isUserMenuOpen));

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks >
            <Navlink to='/shop' >
                SHOP
            </Navlink>
            {
              currentUser ? (<Navlink as='span' onClick={toggleUserMenu} >{currentUser.email.charAt(0).toUpperCase()}</Navlink>) : (<Navlink to='authentication' >
                SIGN IN
            </Navlink>)
            }
            <CartIcon />
        </NavLinks>
        {isUserMenuOpen && <UserDropdown/>}
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
