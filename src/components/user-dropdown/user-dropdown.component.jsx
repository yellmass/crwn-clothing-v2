import { useDispatch, useSelector } from "react-redux";
import Button from "../button/button.component";
import "./user-dropdown.styles";
import { UserDropdownContainer, WelcomeMessage } from "./user-dropdown.styles";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";
import { setIsUserMenuOpen } from "../../store/user/user.slice";
import { useEffect, useRef } from "react";


export const UserDropdown = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(selectCurrentUser);
    const userDropdownRef = useRef(null);

    const closeUserDropdown = () => {
        dispatch(setIsUserMenuOpen(false));
      };
    
      // Add a click event listener to the document
      useEffect(() => {
        const handleClickOutside = (event) => {
          if (
            userDropdownRef.current &&
            !userDropdownRef.current.contains(event.target)
          ) {
            closeUserDropdown();
          }
        };
    
        document.addEventListener('click', handleClickOutside);
    
        return () => {
          document.removeEventListener('click', handleClickOutside);
        };
      }, [dispatch]);
    
    const closeMenu = () => dispatch(setIsUserMenuOpen(false));
    return (
        <UserDropdownContainer onMouseLeave={closeMenu} ref={userDropdownRef} >
            <WelcomeMessage>{`Welcome ${currentUser && currentUser.email}!`}</WelcomeMessage>
            <Button onClick={signOutUser} buttonType={BUTTON_TYPE_CLASSES.inverted} children="SIGNOUT" />
        </UserDropdownContainer>
    )
};