import { Link } from 'react-router'
import './style.css'

export default function Register() {

    
    return (
        <form className="flex flex-col gap-4 border-ridge border-2 p-4 rounded-lg">
            <div className="flex flex-row gap-4 justify-between">
                <label className="font-semibold text-wheat" htmlFor="username-enter">Enter your username:</label>
                <input type="text" id="username-enter" className="focus:outline-none focus:ring-2 focus:ring-white transition-all px-3 w-50 rounded border border-white" required />
            </div>
            <div className="flex flex-row gap-4 justify-between">
                <label className="font-semibold text-wheat" htmlFor="username-enter">Enter your password:</label>
                <input type="password" id="password-enter" className="focus:outline-none focus:ring-2 focus:ring-white transition-all px-3 w-50 rounded border border-white" required />
            </div>
            <div className="flex flex-row gap-4 justify-around">
                <button className="bg-[#2a2983] border-[#207df7] w-30 p-0.5 rounded transition-all duration-300 hover:bg-[#207df7] hover:text-[#1a1c38] hover:shadow-[#2771d3] shadow-2xs cursor-pointer" type="button">Register</button>
                <Link to="/sign-in">
                    <button className="bg-[#2a2983] border-[#207df7] w-30 p-0.5 rounded transition-all duration-300 hover:bg-[#207df7] hover:text-[#1a1c38] hover:shadow-[#2771d3] shadow-2xs cursor-pointer" type="button">Back</button>
                </Link>

            </div>
        </form>
    )
}