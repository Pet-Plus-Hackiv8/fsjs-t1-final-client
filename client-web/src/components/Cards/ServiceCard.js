export default function ServiceCard() {
    return (
        <div className=" flex bg-white select-none w-full my-4 p-4 rounded-xl shadow-md">
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
                            <label htmlFor="edit_service_1">
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
            {/* edit service modal */}
            <div>
                <input type="checkbox" id="edit_service_1" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box ml-72 p-4">
                        <form>
                            <h3 className="text-xl font-bold mb-4">Edit Service</h3>
                            <label>
                                Name :
                            </label>
                            <input type="text" placeholder="Enter service name" className=" my-2 input input-bordered w-full input-secondary" />
                            <div className=" flex  gap-2">
                                <div>
                                    <label>
                                        Min Price :
                                    </label>
                                    <input type="number" placeholder="Enter minimum price" className=" my-2 input input-bordered w-full input-secondary" />
                                </div>
                                <div>
                                    <label>
                                        Max Price :
                                    </label>
                                    <input type="number" placeholder="Enter maximum price" className=" my-2 input input-bordered w-full input-secondary" />
                                </div>
                            </div>
                            <div className=" flex flex-col">
                                <label> Logo : </label>
                                <input type="file" className=" my-2 file-input file-input-bordered file-input-secondary w-full " />
                            </div>
                            <div className=" flex justify-end gap-4 mt-4">
                                <label htmlFor="edit_service_1" className=" flex font-semibold justify-center hover:cursor-pointer py-3 px-4 w-28 rounded-md bg-rose-300 hover:bg-rose-400 active:bg-rose-300 active:scale-95 duration-200 ">
                                    <span className=" select-none">
                                        Cancel
                                    </span>
                                </label>
                                <label typeof="submit" className=" flex font-semibold justify-center hover:cursor-pointer py-3 px-4 w-28 rounded-md bg-emerald-300 hover:bg-emerald-400 active:bg-emerald-300 active:scale-95 duration-200 ">
                                    <span className=" select-none">
                                        Done
                                    </span>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}