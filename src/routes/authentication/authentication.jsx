import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import { signInWithGooglePopup,
    createUserDocumentFromAuth,
    signInWithGoogleRedirect,
auth} from "../../utils/firebase/firebase.utils"; 

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";
import Button from "../../components/button/button.componenet";
import SignInForm from "../../components/sign-in-form/sign-in-form.component";
import './authentication.styles.scss'

const Authentication = (props) => {
    // useEffect(() => {

    //     const redirectFetch = async () => {
    //         const response = await getRedirectResult(auth);

    //         if(response){
    //             const userDocRef = await createUserDocumentFromAuth(response.user);
    //         }
    //     }
    //     redirectFetch();
        
    // },[]);

    

  return (
    <div className="authentication-container">
      {/* <button onClick={signInWithGoogleRedirect}>
        Sign in with google Redirect
      </button> */}
      <SignInForm />
      <SignUpForm />
    </div>
  )
};

export default Authentication;

