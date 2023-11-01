import {
  BaseButton,
  GoogleButton,
  InvertedButton,
  ButtonSpinner,
} from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  base: "base",
};

const Button = ({ children, isLoading, buttonType, ...otherProps }) => {
  if (buttonType === "google")
    return (
      <GoogleButton disabled={isLoading} {...otherProps}>
        {isLoading ? <ButtonSpinner /> : children}
      </GoogleButton>
    );
  if (buttonType === "inverted")
    return (
      <InvertedButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : 
        children}
      </InvertedButton>
    );
  else
    return (
      <BaseButton disabled={isLoading} {...otherProps}>
      {isLoading ? <ButtonSpinner /> : 
        children}
      </BaseButton>
    );
};

export default Button;
