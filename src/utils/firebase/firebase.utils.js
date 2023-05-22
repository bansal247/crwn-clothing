// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, 
    signInWithPopup, 
    signInWithRedirect, 
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';

import {getFirestore,
doc,
getDoc,
setDoc
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7PnlcpoBn7UX5MRDyFdqkIzQqOsLG1ls",
  authDomain: "crwn-clothing-db-3ccc9.firebaseapp.com",
  projectId: "crwn-clothing-db-3ccc9",
  storageBucket: "crwn-clothing-db-3ccc9.appspot.com",
  messagingSenderId: "192983079110",
  appId: "1:192983079110:web:447d1fe5e64b19cb071fc7"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters(
    {
        prompt:"select_account"
    }
)

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth, additionalInformation={}) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    // console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    // console.log(userSnapshot);

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation,
            });
        }
        catch (error){
            console.log(error.message);
        }
    }

    return userDocRef;

}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
    
    if(!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = () => signOut(auth);

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback)