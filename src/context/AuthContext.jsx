import { createContext, useState } from "react";

export const authContext = createContext();

function AuthContextProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token") || "");
  const [userName, setUserName] = useState(
    () => localStorage.getItem("username") || ""
  );
  const API_URL = "https://contact-ms-api.vercel.app";
  return (
    <authContext.Provider
      value={{ token, setToken, userName, setUserName, API_URL }}
    >
      {children}
    </authContext.Provider>
  );
}

export default AuthContextProvider;
