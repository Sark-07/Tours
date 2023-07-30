import { useEffect, useState, useContext, createContext } from "react";

const AuthContext = createContext()


const AuthProvider = ({children}) => {

    const [auth, setauth] = useState({user: null, token: ''})

    useEffect(() => {
        const data = localStorage.getItem('auth')
        if (data){
            const parse = JSON.parse(data)
            setauth({...auth, user: parse.user, token: parse.token})
        }
    }, [])
    return (
        <AuthContext.Provider value={[auth, setauth]}> 
                {children}
        </AuthContext.Provider>
    )
}


const useAuth = () => useContext(AuthContext)


export {useAuth, AuthProvider}