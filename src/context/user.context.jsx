import { createContext, useState, useEffect, useReducer } from "react";
import { onAuthStateChangedListner, signOutUser, createUserDocumentFromAuth, } from "../utils/firebase/firebase.utils";
import { type } from "@testing-library/user-event/dist/type";
import { createAction } from "../utils/reducer/reducer.utils";

// as the actual value you want to access
export const UserContext = createContext({
    currentUser: null,
    setCurrentUser: ()=> null,
});


export const USER_ACTION_TYPES = {
    SET_CURRENT_USER : 'SET_CURRENT_USER'
}


const userReducer = (state, action) => {
    const {type, payload} = action;

    switch(type) {
        case USER_ACTION_TYPES.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: payload
            }

        default:
            throw new Error(`unhandled type ${type} in userReducer`)
    }
}

const INTIAL_STATE = {
    currentUser: null,
}

export const UserProvider = ({children}) => {

    const [state, dispatch] = useReducer(userReducer, INTIAL_STATE)

    const {currentUser} = state;
    const setCurrentUser = (user) => {
        dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user))
    }

    // const [currentUser, setCurrentUser] = useState(null);
    const value = {currentUser, setCurrentUser};
    
    // signOutUser();

    // Use constext staements are commented because of this function powered by google
    useEffect(() => {
        const unsubscribe = onAuthStateChangedListner((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
            
        })
        
        return unsubscribe;
    },[]);

    return <UserContext.Provider value={value}>
        {children}
    </UserContext.Provider>
}