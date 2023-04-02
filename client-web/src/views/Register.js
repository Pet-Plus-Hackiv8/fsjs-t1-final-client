import { NavLink, useNavigate } from "react-router-dom"


export default function Regsiter() {
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/register/clinic')
    }
    return (
        <div className=" w-screen h-screen bg-[#eafdfc] flex justify-center items-center">
            <div className="flex w-3/5 h-3/4 bg-white rounded-md shadow-md">
                <div className=" w-1/2 p-6 flex flex-col justify-between">
                    <div>
                        <div className="flex flex-col items-center">
                            <h1 className="text-3xl font-bold">Sign Up</h1>
                        </div>
                        <div className="text-sm breadcrumbs mt-4">
                            <ul>
                                <li><label className=" link cursor-default font-semibold"> Create Account</label></li>
                                <li><label className=" link cursor-default font-semibold text-gray-400"> Manage Clinic</label></li>
                            </ul>
                        </div>
                        <form className=" mt-4" onSubmit={handleSubmit}>
                            <div>
                                <div className=" py-2"> Email :</div>
                                <input type="text" placeholder="Enter Your Email" className="input input-bordered input-secondary w-full " />
                            </div>
                            <div className=" pb-4">
                                <div className=" py-2"> Password :</div>
                                <input type="password" placeholder="Enter Your Password" className="input input-bordered input-secondary w-full" />
                            </div>
                            <button type="submit" className=" flex justify-center font-semibold hover:cursor-pointer py-3 px-4 w-full rounded-md bg-emerald-300 hover:bg-emerald-400 active:bg-emerald-300 active:scale-95 duration-200 ">
                                <span className=" select-none">
                                    Sign Up
                                </span>
                            </button>
                        </form>
                    </div>
                    <div className=" pt-4 justify-center flex select-none">
                        Already have an account ? <NavLink to="/login" className=" pl-2 link-primary hover:text-purple-600 hover:cursor-pointer underline-offset-2 underline"> Sign in now</NavLink>
                    </div>
                </div>
                <div className=" rounded-r-md  w-1/2 border-l-2 bg-gray-700  flex justify-center items-center">
                    <img src="https://i.ibb.co/GFFRCg7/Logo2-removebg.png" className="h-28 my-10" />
                </div>
            </div>
        </div>
    )
}
