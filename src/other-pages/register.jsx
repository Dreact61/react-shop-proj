import { Link, useLocation } from 'react-router'
import './style.css'
import { userData } from '../components/userData'
import { useEffect, useState } from 'react'

export default function Register() {
    const {username, password, setUsername, setPassword} = userData()

    const [newName, setNewName] = useState('')
    const [newPass, setNewPass] = useState('')

    const [registerField, setRegisterField] = useState(true)
    const location = useLocation()
    useEffect(() => {
        if (location.pathname === '/sign-in') {
            setRegisterField(false)
        } else {
            setRegisterField(true)
        }
    }, [location.pathname])

    const handleSubmit = (e) => {
        e.preventDefault()
        setUsername(newName)
        setPassword(newPass)

        if (newName === '' || newPass === '') {
            alert('Do not leave empty this fields.')
        } else {
            alert('Registered successfully! Now sign in.')
            window.location.href = "http://localhost:5173/sign-in"
        }
    }

    
    return (
        <form className="flex flex-col gap-4 border-ridge border-2 p-4 rounded-lg">
            <div className="flex flex-row gap-4 justify-between">
                <label className="font-semibold text-wheat" htmlFor="username-enter">Enter your username:</label>
                <input defaultValue={newName} onBlur={(e) => setNewName(e.target.value)} type="text" id="username-enter" className="focus:outline-none focus:ring-2 focus:ring-white transition-all px-3 w-50 rounded border border-white" required />
            </div>
            <div className="flex flex-row gap-4 justify-between">
                <label className="font-semibold text-wheat" htmlFor="username-enter">Enter your password:</label>
                <input defaultValue={newPass} onBlur={(e) => setNewPass(e.target.value)} type="password" id="password-enter" className="focus:outline-none focus:ring-2 focus:ring-white transition-all px-3 w-50 rounded border border-white" required />
            </div>
            <div className="flex flex-row gap-4 justify-around">
                <Link to="/sign-in" onClick={(e) => handleSubmit(e)}>
                    <button className="bg-[#2a2983] border-[#207df7] w-30 p-0.5 rounded transition-all duration-300 hover:bg-[#207df7] hover:text-[#1a1c38] hover:shadow-[#2771d3] shadow-2xs cursor-pointer" type="submit">Register</button>
                </Link>
                <Link to="/sign-in">
                    <button className="bg-[#2a2983] border-[#207df7] w-30 p-0.5 rounded transition-all duration-300 hover:bg-[#207df7] hover:text-[#1a1c38] hover:shadow-[#2771d3] shadow-2xs cursor-pointer" type="button">Back</button>
                </Link>

            </div>
        </form>
    )
}