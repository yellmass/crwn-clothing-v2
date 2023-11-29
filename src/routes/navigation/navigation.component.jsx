import { Outlet } from "react-router-dom";
import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { selectCurrentUser, selectIsUserMenuOpen } from "../../store/user/user.selector";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.jsx';
// import { signOutUser } from "../../utils/firebase/firebase.utils"; /// to be added to user menu dropdown
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
  const OpenUserMenu = () => dispatch(setIsUserMenuOpen(true));
  // const CloseUserMenu = () => dispatch(setIsUserMenuOpen()); // set it off when its both outside of user navlink and user dropdown

  const atIndex = currentUser && currentUser.email.indexOf("@");
  const userName = currentUser && currentUser.email.substring(0,atIndex);

  useEffect(()=>{
    if(currentUser==null){
      dispatch(setIsUserMenuOpen(false));
    }
  }, [ dispatch ,currentUser])
  

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
              currentUser ? (<Navlink className="user-navlink" as='span' onMouseEnter={OpenUserMenu} >{userName.toUpperCase()}</Navlink>) : (<Navlink to='authentication' >
                SIGN IN
            </Navlink>)
            }
            <CartIcon />
        </NavLinks>
        {isUserMenuOpen && <UserDropdown  />}
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
