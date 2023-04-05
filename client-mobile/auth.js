import { createContext, useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext({
  accessToken: "",
  UserId: 0,
  username: "",

  setAccessToken: "",
  setUserId: "",
  setUsername: ""
});

export function AuthProvider({children}) {
    const [accessToken, setAccessToken] = useState("")
    const [UserId, setUserId] = useState("")
    const [username, setUsername] = useState("")
    useEffect(() => {
        AsyncStorage.getItem("accessToken")
            .then((val) => {
                setAccessToken(val)
            })
        AsyncStorage.getItem("UserId")
            .then((val) => {
                setUserId(val)
            })
        AsyncStorage.getItem("username")
            .then((val) => {
                setUsername(val)
            })
    }, [])
    return (
        <AuthContext.Provider value={{accessToken, setAccessToken, UserId, setUserId, username, setUsername}}>
            {children}
        </AuthContext.Provider>
    )
}
