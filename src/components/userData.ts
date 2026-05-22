import { create } from "zustand";
import { persist } from "zustand/middleware";

export type DataType = {
    username: string,
    password: string,
    isLoggedIn: boolean,
    email: string,
    phoneNumber: string,
    bio: string
}

export type OperationsType = {
    setUsername: (name: string) => void,
    setPassword: (pass: string) => void,
    setEmail: (email:string) => void,
    setPhoneNumber: (phone: string) => void,
    setBio: (bio: string) => void,
    checkUser: (nameToCheck: string) => boolean,
    checkPass: (passToCheck: string) => boolean,
    handleSubmit: (name: string, pass: string) => boolean,
    logOut: () => void
}

export type StoreType = OperationsType & DataType

export const userData = create<StoreType>()(
    persist(
        (set, get) => ({
            username: '',
            password: '',
            isLoggedIn: false,
            email: "None",
            phoneNumber: "None",
            bio: "None",

            setUsername: (name) => {
                set({username: name}) 
            },

            setPassword: (pass) => {
                set({password: pass})
            },

            setEmail: (email) => {
                set({email: email})
            },

            setPhoneNumber: (phone) => {
                set({phoneNumber: phone})
            },

            setBio: (bio) => {
                set({bio: bio})
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

                if (checkPass(pass) && checkUser(name)) {
                    set({isLoggedIn: true})
                    return true
                } else {
                    return false
                }
            },

            logOut: () => {
                set({isLoggedIn: false})
            },
        }),
        {name: 'user-data'}
    )
    
)