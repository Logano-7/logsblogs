import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );
  const [err, setErr] = useState(null);

  async function login(inputs) {
    await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      mode: "cors",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    }).then(async (res) => {
      const data = await res.json();
      if (res.status === 200) {
        setCurrentUser(data.user);
      } else {
        setErr(data.message);
      }
    });
  }

  async function logout(inputs){
    await fetch("http://localhost:3000/api/auth/logout", {
      method: "POST",
      mode: "cors",
      credentials: "include",
    }).then(async (res) => {
      const data = await res.json();
      if (res.status === 200) {
        setCurrentUser(null);
      } else {
        setErr(data.message);
      }
    });
  }

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

    const value = { currentUser, login, logout, err };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

};


