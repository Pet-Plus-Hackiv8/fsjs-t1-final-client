export default function PostsCard() {
    return (
        <div className=" shadow-md h-24 my-4 rounded-xl p-2 w-full flex items-center bg-[#eafdfc]">
            <div className="  p-4 w-5/12 ">
                <div className="font-semibold">
                    How to Train Your Dragon
                </div>
            </div>
            <div className=" w-2/12">
                3 February 2023
            </div>
            <div className=" w-2/12">
                <span className=" bg-green-200 p-4 pt-1 pb-2 rounded-full">
                    active
                </span>
                {/* <span className=" bg-amber-200 p-4 pt-1 pb-2 rounded-full">
                    archived
                </span> */}
            </div>
            <div className="  w-2/12">
                <span className=" bg-sky-200 p-2 px-6 pt-1 pb-2 rounded-full">
                    view
                </span>
            </div>
            <div className=" w-1/12 dropdown dropdown-end">
                <svg tabIndex={0} fill="none" className=" hover:bg-[#d4e6e6] duration-200 rounded-md active:scale-95  active:bg-[#ff9787] w-8 p-0" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                    <li><label htmlFor="edit_post_1">Edit</label></li>
                    <li><a>Archive</a></li>
                </ul>
            </div>
            {/* add service modal */}
            <div>
                <input type="checkbox" id="edit_post_1" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box ml-72 p-4">
                        <form>
                            <h3 className="text-xl font-bold mb-4">Edit Post</h3>
                            <label>
                                Title :
                            </label>
                            <input type="text" placeholder="Enter service name" className=" my-2 input input-secondary input-bordered w-full" />
                            <div className=" flex flex-col ">
                                <label> Content: </label>
                                <textarea className="textarea my-2 textarea-secondary h-32" placeholder="Enter post content"></textarea>
                            </div>
                            <div className=" flex flex-col">
                                <label> Image Url : </label>
                                <input type="text" placeholder="Enter Image Url" className=" my-2 input input-secondary input-bordered w-full" />
                            </div>
                            <div className=" flex justify-end gap-4 mt-4">
                                <label htmlFor="edit_post_1" className=" flex font-semibold justify-center  hover:cursor-pointer py-3 px-4 w-28 rounded-md bg-rose-300 hover:bg-rose-400 active:bg-rose-300 active:scale-95 duration-200 ">
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