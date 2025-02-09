import { createContext, useState } from "react";

export const authContext = createContext();

function AuthContextProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [userName, setUserName] = useState(
    () => localStorage.getItem("username") || ""
  );
  return (
    <authContext.Provider value={{ token, setToken, userName, setUserName }}>
      {children}
    </authContext.Provider>
  );
}

export default AuthContextProvider;
