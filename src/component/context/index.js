import React, { createContext, useState } from "react";

export const LoginContext = createContext();

const initialState = {
    username: "",
}

export const LoginProvider = ({ children }) => {
    const [state, setState] = useState(initialState);
    const setStateHandler = (obj) => {
        return setState({
            ...(state || {}),
            ...(obj || {})
        })
    }

    return (
        <LoginContext.Provider value={{ state, setStateHandler }}>
            {children}
        </LoginContext.Provider>
    );
}