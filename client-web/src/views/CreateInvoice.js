import ActionCard from "../components/Cards/ActionCard";

export default function CreateInvoice() {
    return (
        <>
            <div className=" p-4 w-full flex-col bg-[#eafdfc] rounded-md shadow-md h-full">
                <div className=" flex gap-8">
                    <div className=" w-1/2 h-1/5 mb-8 p-4 bg-white rounded-md  shadow-md">
                        <div className="flex">
                            <div className=" w-1/3 font-bold text-lg text-[#181a2a]">
                                Appointment id
                            </div>
                            <div className=" text-lg">
                                : 1
                            </div>
                        </div>
                        <div className="flex">
                            <div className=" w-1/3 font-bold text-lg text-[#181a2a]">
                                Owner name
                            </div>
                            <div className=" text-lg">
                                : Zio Kandaka
                            </div>
                        </div>
                        <div className="flex">
                            <div className=" w-1/3 font-bold text-lg text-[#181a2a]">
                                Pet name
                            </div>
                            <div className=" text-lg">
                                : Randy-chan
                            </div>
                        </div>

                        <div className="flex">
                            <div className=" w-1/3 font-bold text-lg text-[#181a2a]">
                                Date
                            </div>
                            <div className=" text-lg">
                                : Sunday, 4 July
                            </div>
                        </div>
                    </div>
                    <div className=" w-1/2 mb-8 p-4 bg-white rounded-md shadow-md">
                        <div className=" h-1/2">
                            <div className="flex">
                                <div className=" w-1/3 font-bold text-lg text-[#181a2a]">
                                    Doctor name
                                </div>
                                <div className=" text-lg">
                                    : Drh. Bedul
                                </div>
                            </div>
                            <div className=" flex">
                                <div className=" w-1/3 font-bold text-lg text-[#181a2a]">
                                    Total Price
                                </div>
                                <div className=" text-lg">
                                    : Rp. 340.000.00,-
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between items-end  h-1/2 gap-4">
                            <div className=" flex  gap-4">
                                <label htmlFor="note_modal" className=" flex pl-[1.2rem] font-semibold hover:cursor-pointer py-3 px-4  w-28 rounded-md bg-amber-300 hover:bg-amber-400 active:bg-amber-300 active:scale-95 duration-200 ">
                                    <svg fill="none" className=" p-0  w-5" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                    </svg>
                                    <span className=" select-none">
                                        NOTE
                                    </span>
                                </label>
                                <label htmlFor="action_modal" className=" flex pl-[1rem] font-semibold hover:cursor-pointer py-3 px-4  w-28 rounded-md bg-sky-300 hover:bg-sky-400 active:bg-sky-300 active:scale-95 duration-200 ">
                                    <svg fill="none" className=" p-0  w-5" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                    <span className=" select-none">
                                        Action
                                    </span>
                                </label>
                            </div>
                            <label className=" flex font-semibold hover:cursor-pointer py-3 px-4 w-28 rounded-md bg-emerald-300 hover:bg-emerald-400 active:bg-emerald-300 active:scale-95 duration-200 ">
                                <svg fill="none" className=" p-0  w-5" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                                </svg>
                                <span className=" select-none">
                                    Proceed
                                </span>
                            </label>
                        </div>
                    </div>

                </div>
                <div className=" w-full p-4 h-[33.3rem] bg-white rounded-md  shadow-md">
                    <div className=" border-b-2 mb-2 flex">
                        <div className=" pl-6 w-1/12 select-none">
                            No.
                        </div>
                        <div className=" w-4/12 select-none">
                            Service
                        </div>
                        <div className=" w-3/12 select-none">
                            Price
                        </div>
                        <div className=" w-3/12 select-none">
                            Attachments
                        </div>
                        <div className=" w-1/12">

                        </div>
                    </div>
                    <div className="overflow-y-scroll h-[29.5rem]">
                        <ActionCard />
                        <ActionCard />
                        <ActionCard />
                        <ActionCard />
                        <ActionCard />
                        <ActionCard />
                    </div>
                </div>
            </div>
            <div>
                {/* notes modal */}
                <div>
                    <input type="checkbox" id="note_modal" className="modal-toggle" />
                    <div className="modal">
                        <div className="modal-box ml-60">
                            <form>
                                <h3 className="text-lg font-bold">Notes :</h3>
                                <textarea className="textarea textarea-secondary w-full my-4 h-60" placeholder="Doctor's notes ..."></textarea>
                                <div className=" flex justify-end gap-4">
                                    <label htmlFor="note_modal" className=" flex font-semibold justify-center hover:cursor-pointer py-3 px-4 w-28 rounded-md bg-rose-300 hover:bg-rose-400 active:bg-rose-300 active:scale-95 duration-200 ">
                                        <span className=" select-none">
                                            Cancel
                                        </span>
                                    </label>
                                    <label className=" flex font-semibold justify-center hover:cursor-pointer py-3 px-4 w-28 rounded-md bg-emerald-300 hover:bg-emerald-400 active:bg-emerald-300 active:scale-95 duration-200 ">
                                        <span className=" select-none">
                                            Done
                                        </span>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div>
                    <input type="checkbox" id="action_modal" className="modal-toggle" />
                    <div className="modal  ml-64">
                        <div className="modal-box relative">
                            <h3 className="text-lg font-bold">Add Action</h3>
                            <form className="flex flex-col w-full">
                                <div className=" flex gap-4 my-4">
                                    <div>
                                        <label>
                                            Select Service
                                        </label>
                                        <select className="select select-bordered w-full">
                                            <option disabled selected>Service name</option>
                                            <option>Han Solo</option>
                                            <option>Greedo</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label>
                                            Price
                                        </label>
                                        <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full" />
                                    </div>
                                </div>
                                <div className=" flex justify-between">
                                    <div>
                                        <label className=" flex font-semibold justify-center hover:cursor-pointer py-3 px-4 w-28 rounded-md bg-sky-300 hover:bg-sky-400 active:bg-sky-300 active:scale-95 duration-200 ">
                                            <svg fill="none" className=" w-5 p-0" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                                            </svg>
                                            <span className=" select-none">
                                                Attach
                                            </span>
                                        </label>
                                    </div>
                                    <div>
                                        <div className=" flex justify-end gap-4">
                                            <label htmlFor="action_modal" className=" flex font-semibold items-center justify-center hover:cursor-pointer py-3 px-4 w-28 rounded-md bg-rose-300 hover:bg-rose-400 active:bg-rose-300 active:scale-95 duration-200 ">
                                                <span className=" select-none">
                                                    Cancel
                                                </span>
                                            </label>
                                            <label className=" flex font-semibold justify-center items-center hover:cursor-pointer py-3 px-4 w-28 rounded-md bg-emerald-300 hover:bg-emerald-400 active:bg-emerald-300 active:scale-95 duration-200 ">
                                                <span className=" select-none">
                                                    Add
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}