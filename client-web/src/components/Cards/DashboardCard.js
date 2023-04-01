import { NavLink } from "react-router-dom"

export default function DashboardCard() {
    return (
        <div className="h-24 my-4 rounded-xl p-2 w-full flex items-center bg-[#eafdfc] shadow-md">
            <div className="  p-4 w-5/12 ">
                <div className=" font-semibold text-[#567096] duration-200">
                    <NavLink to="/pet/owner/1" className=" hover:cursor-pointer hover:scale-105 hover:underline underline-offset-2 duration-200 active:text-[#ff9787] select-none  w-fit">
                        Randy
                    </NavLink>
                </div>
                <div className=" text-sm text-gray-500 select-none">
                    Created 3 days ago
                </div>
            </div>
            <div className=" w-3/12 select-none">
                Shift 1
            </div>
            <div className="  w-3/12 select-none">
                7 April 2023
            </div>
            <div className=" w-1/12 dropdown  dropdown-bottom dropdown-end">
                <svg tabIndex={0} fill="none" className=" hover:bg-[#d4e6e6] duration-200 rounded-md active:scale-95  active:bg-[#ff9787] w-8 p-0" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <NavLink to="/invoice/1">
                            Complete
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}