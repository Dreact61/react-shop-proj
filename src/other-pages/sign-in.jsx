import { Link, useLocation } from "react-router";
import './style.css'
import Register from "./register";
import { userData } from "../components/userData";
import { useState, useEffect } from "react";

function SignInForm() {
    const {username, password, handleSubmit, checkPass, checkUser} = userData()

    //отслеживание локации и динамическая смена компонентов
    const [registerField, setRegisterField] = useState(false)
    const location = useLocation()
    
    useEffect(() => {
        if (location.pathname === '/sign-in/register') {
            setRegisterField(true)
        } else {
            setRegisterField(false)
        }
    }, [location.pathname])

    const [newName, setNewName] = useState(null)
    const [newPass, setNewPass] = useState(null)

    function submitForm(e) {
        e.preventDefault()
        const isValid = handleSubmit(newName, newPass)

        if (isValid) {
            window.location.href = "http://localhost:5173/"
            alert('Authorized successfully!')
        } else {
            alert('Error: incorrect data provided.')
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
            <h1 className="text-2xl font-bold text-[#313131] text-center mb-6">{registerField ? "Register" : "Sign in"}</h1>
            <form style={{display: registerField ? "none" : "flex"}} className="flex-col gap-4 border-ridge border-2 p-4 rounded-lg">
                
                <div className="flex flex-row gap-4 justify-between">
                    <label className="font-semibold text-wheat" htmlFor="username-input">Username:</label>
                    <input defaultValue={newName} onBlur={(e) => setNewName(e.target.value)} type="text" id="username-input" className="focus:outline-none focus:ring-2 focus:ring-white transition-all px-3 w-50 rounded border border-white" required/>
                </div>

                <div className="flex flex-row gap-4 justify-between">
                    <label className="font-semibold text-wheat" htmlFor="username-input">Password:</label>
                    <input defaultValue={newPass} onBlur={(e) => setNewPass(e.target.value)} type="password" id="username-input" className="focus:outline-none focus:ring-2 focus:ring-white transition-all px-3 w-50 rounded border border-white" required/>
                </div>

                <div className="flex flex-row gap-4 justify-around">
                    <button onClick={(e) => submitForm(e)} className="bg-[#2a2983] border-[#207df7] w-20 p-0.5 rounded transition-all duration-300 hover:bg-[#207df7] hover:text-[#1a1c38] hover:shadow-[#2771d3] shadow-2xs cursor-pointer" type="button">Login</button>
                </div>

            </form>
            <p style={{display: registerField ? "none" : "flex"}} className="pt-5 text-[#3e3e3e]">Don't have an account yet? <Link to="/sign-in/register" onClick={() => setRegisterField(true)} className="ml-1 mr-1 text-[#5e5eff]">Register</Link> now!</p>
            <Link to="/" >
                <button style={{display: registerField ? "none" : "block"}} className="mt-10 w-35 rounded bg-[#2a2983] border-[#207df7] h-7 transition-all duration-300 hover:bg-[#207df7] hover:text-[#1a1c38] hover:shadow-[#2771d3] shadow-2xs cursor-pointer" type="button">Back</button>
            </Link>
            
            {registerField && <Register />}
        </div>
    )
}

export default SignInForm