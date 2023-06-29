import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { useState } from "react";
import "./sign-in-form.styles.scss";
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { user } = await signInAuthWithEmailAndPassword(email, password);
      console.log("welcome back", user.email);
      setFormFields(defaultFormFields);
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong Password!");
          break;
        case "auth/user-not-found":
          alert("User with this email address doesn't exist!");
          break;
        default:
          alert(error.code)
          console.log(error);
          break;
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-in-container">
      <h2>I already have an account</h2>
      <span>Sign in with your Email and Password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          required
          onChange={handleChange}
          type="email"
          name="email"
          value={email}
        />
        <FormInput
          label="Password"
          required
          onChange={handleChange}
          type="password"
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit" buttonType="" children="Sign In" />
          <Button
            type="button"
            buttonType="google"
            children="Sign In with Google"
            onClick={signInWithGoogle}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
