import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { ButtonSpinner } from "../button/button.styles";
import FormInput from "../form-input/form-input.component";
import Button from "../button/button.component";
import { signInAuthWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils";

import "./sign-in-form.styles.scss";



const defaultFormFields = {
  email: "",
  password: "",
};



const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;
  const [loading, setLoading] = useState(false);
  const [googleLooding, setGoogleLoading] = useState(false);
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    setGoogleLoading(true);
    await signInWithGooglePopup();
    setGoogleLoading(false);
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      await signInAuthWithEmailAndPassword(email, password);

      setFormFields(defaultFormFields);
      
      navigate("/"); 
      
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Wrong Password!");
          break;
        case "auth/user-not-found":
          alert("User with this email address doesn't exist!");
          break;
        default:
          alert(error.code);
          console.log(error);
          break;
      }
    } finally {
      setLoading(false); // Set loading to false regardless of success or failure
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
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
          <Button type="submit" buttonType="" children={loading ? <ButtonSpinner/> : "Sign In"} />
          <Button
            type="button"
            buttonType="google"
            children={googleLooding ? <ButtonSpinner/> : "Sign In with Google"}
            onClick={signInWithGoogle}
          />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;