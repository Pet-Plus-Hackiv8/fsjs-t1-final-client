import VetsTable from "../components/Tables/VetsTable";

export default function Veterinarians() {
    return (
        <>
            <div className="flex justify-between items-center">
                <div className="text-xl pb-4 font-bold outline-1 outline-black text-[#ff9787]">
                    Our Veterinarians
                </div>
                <label className=" flex font-semibold hover:cursor-pointer py-4 px-4  rounded-md bg-[#ff9787] hover:bg-[#ffa99b] active:bg-[#ff9787] active:scale-95 duration-200 ">
                    <span className=" select-none">
                        Veterinarian
                    </span>
                    <span>
                        <svg fill="none" className=" w-6 p-0" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                        </svg>
                    </span>
                </label>
            </div>

            <VetsTable />
        </>
    )
}