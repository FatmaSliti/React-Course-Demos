import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => { }, // we can omit it from here but we put it for some compilation reasons 
    onLogin: (email, password) => { }
});

export const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const storedInformation = localStorage.getItem("isLogged");

        if (storedInformation === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    const loginHandler = () => {
        localStorage.setItem("isLogged", "1");
        setIsLoggedIn(true)
    }

    const logoutHandler = () => {
        localStorage.removeItem("isLogged");
        setIsLoggedIn(false)
    }

    return <AuthContext.Provider value={{ isLoggedIn: isLoggedIn, onLogin: loginHandler, onLogout: logoutHandler }}>{props.children}</AuthContext.Provider>
    // we provided the context / the provider method transforms the context to a component because jsx needs components
    // the prop named value is not a custom prop: it should be named value
}

export default AuthContext;
