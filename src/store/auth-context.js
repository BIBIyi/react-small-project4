import React from "react";

// it is an object that will contain a component.
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
