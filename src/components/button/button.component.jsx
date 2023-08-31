import {BaseButton, GoogleButton, InvertedButton} from "./button.styles"

// const  BUTTON_TYPE_CLASSES = {
//     google:'google-sign-in',
//     inverted:'inverted'
// }

const Button = ({children, buttonType, ...otherProps}) => {
    if (buttonType==='google') return <GoogleButton {...otherProps} >{children}</GoogleButton>
    if (buttonType==='inverted') return <InvertedButton {...otherProps} >{children}</InvertedButton>
    else return <BaseButton {...otherProps} >{children}</BaseButton>

}

export default Button;