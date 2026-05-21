import { Link } from "react-router";
import './sign-in.css'

function SignInForm() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
            <h1 className="text-2xl font-bold text-[#313131] text-center mb-6">Sign in</h1>
            <form className="flex flex-col gap-4 border-ridge border-2 p-4 rounded-lg">
                
                <div className="flex flex-row gap-4 justify-between">
                    <label className="font-semibold text-wheat" htmlFor="username-input">Username:</label>
                    <input type="text" id="username-input" className="focus:outline-none focus:ring-2 focus:ring-white transition-all px-3 w-50 rounded border border-white" required/>
                </div>

                <div className="flex flex-row gap-4 justify-between">
                    <label className="font-semibold text-wheat" htmlFor="username-input">Password:</label>
                    <input type="password" id="username-input" className="focus:outline-none focus:ring-2 focus:ring-white transition-all px-3 w-50 rounded border border-white" required/>
                </div>

                <div className="flex flex-row gap-4 justify-around">
                    <button className="bg-[#2a2983] border-[#207df7] w-20 p-0.5 rounded transition-all duration-300 hover:bg-[#207df7] hover:text-[#1a1c38] hover:shadow-[#2771d3] shadow-2xs cursor-pointer" type="submit">Login</button>
                    <button className="bg-[#2a2983] border-[#207df7] w-20 p-0.5 rounded transition-all duration-300 hover:bg-[#207df7] hover:text-[#1a1c38] hover:shadow-[#2771d3] shadow-2xs cursor-pointer" type="button">Clear</button>
                </div>

            </form>
            <p className="pt-5 text-[#3e3e3e]">Don't have an account yet? <Link to="/" className="text-[#5e5eff]">Register</Link> now!</p>
            <button className="mt-10 w-35 rounded bg-[#2a2983] border-[#207df7] h-7 transition-all duration-300 hover:bg-[#207df7] hover:text-[#1a1c38] hover:shadow-[#2771d3] shadow-2xs cursor-pointer" type="button">Back</button>
        </div>
    )
}

export default SignInForm