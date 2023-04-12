import { useState, useEffect } from "react";
import { useToken } from "./useToken";

export const useUser = () => {
    const[token] = useToken()

    const getPayLoadFromToken = token_ => {
        const encodedPayLoad = token_.split('.')[1]
        console.log(encodedPayLoad)
        console.log(atob(encodedPayLoad))
        return JSON.parse(atob(encodedPayLoad))
    }

    const [user, setUser] = useState(()=>{
        if (!token) return null
        return getPayLoadFromToken(token)
    })

    useEffect(()=>{
        if(!token){
            setUser(null)
        }
        else{
            setUser(getPayLoadFromToken(token))
        }
    }, [token])
  
    return user

}