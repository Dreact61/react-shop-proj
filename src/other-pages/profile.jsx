import { userData } from "../components/userData"
import { Link } from "react-router"
import './style.css'

export default function Profile() {
    const {username, email, phoneNumber, bio, setUsername, setPassword, setPhoneNumber, setEmail, setBio, logOut} = userData()

    return (
        <div className="flex flex-col items-center justify-center px-4 min-h-[80vh]">
            <h1>Profile</h1>
            <section className="flex flex-col border-2 p-4 md:w-3xl w-full rounded-md">
                <div className="flex flex-row border-b pb-2">
                    <img src="#" alt="Profile pic" className="border p-2 rounded-full md:h-30 md:w-34 md:pt-12 pt-1 mr-4 h-20 w-20" />
                    <div className="flex w-full flex-col pl-6 border-l-2 justify-center items-start">
                        <div className="pl-3 flex md:flex-row flex-col w-full md:gap-55 items-start border-b md:border-0 justify-between">
                            <b className="font-extrabold">Username:</b>
                            <p className="font-bold">{username}</p>
                        </div> 

                        <div className="pl-3 flex md:flex-row flex-col w-full md:gap-55 items-start border-b md:border-0 justify-between">
                            <b className="font-extrabold">Email:</b>
                            <p className="font-bold">{email}</p>
                        </div>

                        <div className="pl-3 flex md:flex-row flex-col w-full md:gap-55 items-start justify-between">
                            <b className="font-extrabold">Phone number:</b>
                            <p className="font-bold">{phoneNumber}</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 pb-4 border-b">
                    <Link to="/">
                    <button onClick={logOut} type="submit" className="self-center w-3/6 rounded bg-[#2a2983] border-[#207df7] h-7 transition-all duration-300 hover:bg-[#207df7] hover:text-[#1a1c38] hover:shadow-[#2771d3] shadow-2xs cursor-pointer">Log out</button>
                    </Link>
                </div>

                <div className="border-b mt-4 pb-4 flex flex-col">
                    <h2 className="self-start font-black">Bio:</h2>
                    <textarea value={bio} onChange={(e) => setBio(e.target.value)} id="bio" className="resize-none border rounded-md p-1"></textarea>
                </div>

                <form className="flex flex-col mt-4 gap-3">
                    <div className="flex w-full justify-between gap-4">
                        <label htmlFor="username">Change username:</label>
                        <input defaultValue={''} onBlur={(e) => setUsername(e.target.value)} className="border rounded-lg px-3" type="text" placeholder="John_Doe" id="username" />
                    </div>
                    <div className="flex w-full justify-between gap-4">
                        <label htmlFor="password">Change password:</label>
                        <input defaultValue={''} onBlur={(e) => setPassword(e.target.value)} className="border rounded-lg px-3" placeholder="********" type="password" id="password" />
                    </div>
                    <div className="flex w-full justify-between gap-4">
                        <label htmlFor="email">Change email:</label>
                        <input defaultValue={''} onBlur={(e) => setEmail(e.target.value)} className="border rounded-lg px-3" type="email" placeholder="whatever@example.com" id="email" />
                    </div>
                    <div className="flex w-full justify-between gap-4">
                        <label htmlFor="phone">Change phone:</label>
                        <input defaultValue={''} onBlur={(e) => setPhoneNumber(e.target.value)} className="border rounded-lg px-3" type="text" placeholder="+X XXX XXX XX-XX" id="phone" />
                    </div>
                    <Link to="/">
                    <button type="submit" className="self-center w-3/6 rounded bg-[#2a2983] border-[#207df7] h-7 transition-all duration-300 hover:bg-[#207df7] hover:text-[#1a1c38] hover:shadow-[#2771d3] shadow-2xs cursor-pointer">Apply</button>
                    </Link>
                </form>
            </section>
        </div>
    )
} 