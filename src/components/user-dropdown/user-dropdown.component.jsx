import { useSelector } from "react-redux";
import Button from "../button/button.component";
import "./user-dropdown.styles";
import { UserDropdownContainer, WelcomeMessage } from "./user-dropdown.styles";
import { selectCurrentUser } from "../../store/user/user.selector";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { BUTTON_TYPE_CLASSES } from "../button/button.component";


export const UserDropdown = () => {
    const currentUser = useSelector(selectCurrentUser);
    

    return (
        <UserDropdownContainer>
            <WelcomeMessage>{`Welcome ${currentUser.email}!`}</WelcomeMessage>
            <Button onClick={signOutUser} buttonType={BUTTON_TYPE_CLASSES.inverted} children="SIGNOUT" />
        </UserDropdownContainer>
    )
};