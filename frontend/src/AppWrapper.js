// src/AppWrapper.js

import React, { createContext, useReducer } from "react";
import App from "./App";

export const UserContext = createContext();
export const AdminContext = createContext(); // Add AdminContext

const initialState = {
    user: false,
    admin: false,
};

// Reducers for user and admin
const reducer = (state, action) => {
    switch (action.type) {
        case "USER":
            return { ...state, user: action.payload };
        case "ADMIN":
            return { ...state, admin: action.payload };
        default:
            return state;
    }
};

const AppWrapper = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <UserContext.Provider value={{ state, dispatch }}>
            <AdminContext.Provider value={{ adminState: state, dispatchAdmin: dispatch }}>
                <App />
            </AdminContext.Provider>
        </UserContext.Provider>
    );
};

export default AppWrapper;
