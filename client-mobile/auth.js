import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  accessToken: "",
  setAccessToken: () => {},
});

export function AuthProvider({children}) {
    const [accessToken, setAccessToken] = useState("")
    useEffect(() => {
        AsyncStorage.getItem("accessToken")
            .then((val) => {
                setAccessToken(val)
            })
    }, [])
    return (
        <AuthContext.Provider value={{accessToken, setAccessToken}}>
            {children}
        </AuthContext.Provider>
    )
}
