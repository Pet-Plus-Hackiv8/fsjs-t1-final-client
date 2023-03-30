import { NavLink, Outlet, useNavigate } from "react-router-dom";
const feather = require('feather-icons')

export default function Layout() {
    return (<>
        <div class="navbar bg-[#2d3748]">
            <img className="h-16 ml-[4.6rem]" src="https://i.ibb.co/GFFRCg7/Logo2-removebg.png" />
        </div>
        <Outlet />
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* <!-- Page content here --> */}
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
            </div>
            <div className="drawer-side ">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-[#eafdfc] text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {/* <img className=" h-28" src="https://i.ibb.co/GFFRCg7/Logo2-removebg.png" /> */}
                    <div>
                        <div tabindex="0" class="avatar w-full p-20 py-0">
                            <div class="w-full rounded-full">
                                <img src="https://i.guim.co.uk/img/media/c5e73ed8e8325d7e79babf8f1ebbd9adc0d95409/2_5_1754_1053/master/1754.jpg?width=620&quality=45&dpr=2&s=none" />
                            </div>
                        </div>
                        <li className="">
                            <div className=" flex justify-center active:bg-[#ff9787] active:text-[#272822] font-semibold text-lg">
                                Galaxy Pet Shop
                            </div>
                        </li>
                        <li className=" px-12">

                        </li>
                        <li>
                            <div className="active:bg-[#ff9787] active:text-[#272822] ">
                                <svg fill="none" className="w-8 p-0" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                Dashboard
                            </div>
                        </li>
                        <li>
                        <div className="active:bg-[#ff9787] active:text-[#272822] ">
                                <svg fill="none" className="w-8 p-0" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                                </svg>
                                Veterinarians
                            </div>
                        </li>
                        <li>
                        <div className="active:bg-[#ff9787] active:text-[#272822] ">
                                <svg fill="none" className="w-8 p-0" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                                </svg>
                                Posts
                            </div>
                        </li>

                        <li>
                            <div className="active:bg-[#ff9787] active:text-[#272822] ">
                                <svg fill="none" className="w-8 p-0" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                </svg>
                                History
                            </div>
                        </li>

                    </div>
                </ul>

            </div>
        </div>
    </>
    )
}