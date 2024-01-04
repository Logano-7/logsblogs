import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthContxProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    localStorage.getItem("user") === "undefined"
      ? null
      : JSON.parse(localStorage.getItem("user"))
  );

  const login = async (inputs) => {
    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      body: JSON.stringify(inputs),
     credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      mode: "cors",
    }).then((res) => res.json());
    setCurrentUser(res);
  };

  const logout = async (inputs) => {
    await fetch("http://localhost:3000/api/auth/logout", {
      method: "POST",
    });
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
