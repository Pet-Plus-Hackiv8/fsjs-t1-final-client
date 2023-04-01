import { NavLink } from "react-router-dom"

export default function ActionCard() {
    return (
        <div className=" shadow-md h-24 my-4 rounded-xl p-2 w-full flex justify-around items-center bg-[#eafdfc]">
            <div className=" pl-6 w-1/12 select-none ">
                1
            </div>
            <div className=" w-4/12 select-none">
                X-Ray
            </div>
            <div className="  w-3/12 select-none">
               Rp.400.000.00,-
            </div>
            <div className="  w-3/12 select-none">
               xray.png
            </div>
            <div className=" w-1/12 dropdown  dropdown-left">
                <svg tabIndex={0} fill="none" className=" hover:bg-[#d4e6e6] duration-200 rounded-md active:scale-95  active:bg-[#ff9787] w-8 p-0" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-32">
                    <li>
                        <label>
                            Edit
                        </label>
                    </li>
                    <li>
                        <label>
                            Delete
                        </label>
                    </li>
                </ul>
            </div>
        </div>
    )
}