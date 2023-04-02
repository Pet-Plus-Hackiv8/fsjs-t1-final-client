export default function ServiceCard() {
    return (
        <div className=" flex bg-white w-full my-4 p-4 rounded-xl shadow-md">
            <div className="flex w-1/6">
                <img className=" h-16" src="https://cdn.discordapp.com/attachments/1054692655327613008/1091190714219638904/dog.png" />
            </div>
            <div className=" w-4/6 flex gap-2">
                <div className=" w-2/6 flex items-center">
                    X-ray
                </div>
                <div className=" w-2/6 flex items-center ">
                    Rp. 100.000.00,-
                </div>
                <div className=" w-2/6 flex items-center">
                    Rp. 50.000.00,-
                </div>
            </div>
            <div className=" w-1/6 flex justify-center items-center">
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
        </div>
    )
}