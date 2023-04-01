import { NavLink } from "react-router-dom"

export default function VetsCard() {
    return (
        <div className=" shadow-md h-28 my-4 rounded-xl p-2 w-full flex items-center bg-[#eafdfc]">
            <div className="  p-4 w-5/12 ">
                <div className=" font-semibold text-[#567096] duration-200 flex items-center">
                    <div className="avatar w-4/12">
                        <div className="mask mask-squircle w-20 h-20">
                            <img className="" src="https://images.ctfassets.net/rt5zmd3ipxai/0stMAHytHj2enLmAroKbh/5e73db26112b9e2c3257c7dbae81ec66/IMG_5395.c50e7600bcc175511c722c4dcc4ddad5.jpg" alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <NavLink to="/veterinarians/1" className=" hover:cursor-pointer hover:scale-105 hover:underline underline-offset-2 duration-200 active:text-[#ff9787] select-none  w-fit">
                        Drh. Bedul
                    </NavLink>
                </div>
            </div>
            <div className="  w-6/12">
                Monday, Thursday, Friday
            </div>
            <div className=" w-1/12">
                <svg fill="none" className=" hover:bg-[#d4e6e6] duration-200 rounded-md active:scale-95  active:bg-[#ff9787] w-8 p-0" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
            </div>
        </div>
    )
}