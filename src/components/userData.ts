import { create } from "zustand";
import { persist } from "zustand/middleware";

export type DataType = {
    username: string,
    password: string
}

export type OperationsType = {
    setUsername: (name: string) => void,
    setPassword: (pass: string) => void,
    checkUser: (nameToCheck: string) => boolean,
    checkPass: (passToCheck: string) => boolean,
    handleSubmit: (name: string, pass: string) => boolean,
}

export type StoreType = OperationsType & DataType

export const userData = create<StoreType>()(
    persist(
        (set, get) => ({
            username: '',
            password: '',

            setUsername: (name) => {
                set({username: name}) 
            },

            setPassword: (pass) => {
                set({password: pass})
            },

            checkUser: (nameToCheck) => {
                const {username} = get()
                const valid = username === nameToCheck

                return valid
            },

            checkPass: (passToCheck) => {
                const {password} = get()
                const valid = password === passToCheck

                return valid
            },

            handleSubmit: (name, pass) => {
                const {checkPass, checkUser} = get()

                if (checkPass(name) && checkUser(pass)) {
                    alert('Authorized successfully!')
                    return true
                } else {
                    return false
                }
            } 
        }),
        {name: 'user-data'}
    )
    
)