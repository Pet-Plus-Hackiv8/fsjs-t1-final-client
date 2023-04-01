import { Outlet } from "react-router"
import { NavLink } from "react-router-dom"


export default function PetDetail() {
    return (
        <div className="flex w-full md:ml-20 gap-16 flex-col md:flex-row">
            <div className=" w-full md:w-4/12 bg-[#bfeaf5] rounded-md">
                <div>
                    <img className=" rounded-t-md w-full h-72 object-cover" src="https://cdn.openai.com/labs/images/A%20Shiba%20Inu%20dog%20wearing%20a%20beret%20and%20black%20turtleneck.webp?v=1" />
                </div>

                <div className=" pt-2">
                    <div className="flex w-full">
                        <div className=" w-1/2 p-2 pl-8 text-lg font-semibold text-[#6ba0cc]">
                            Name :
                        </div>
                        <div className=" w-1/2 p-2 text-lg font-semibold ">
                            Woof
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className=" w-1/2 p-2 pl-8 text-lg font-semibold text-[#6ba0cc]">
                            Species: :
                        </div>
                        <div className=" w-1/2 p-2 text-lg font-semibold ">
                            Dog
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className=" w-1/2 p-2 pl-8 text-lg font-semibold text-[#6ba0cc]">
                            Breed :
                        </div>
                        <div className=" w-1/2 p-2 text-lg font-semibold ">
                            Corgi
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className=" w-1/2 p-2 pl-8 text-lg font-semibold text-[#6ba0cc]">
                            Gender :
                        </div>
                        <div className=" w-1/2 p-2 text-lg font-semibold ">
                            Female
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className=" w-1/2 p-2 pl-8 text-lg font-semibold text-[#6ba0cc]">
                            Age :
                        </div>
                        <div className=" w-1/2 p-2 text-lg font-semibold ">
                            {"3 Year(s) old"}
                        </div>
                    </div>
                    <div className="flex w-full">
                        <div className=" w-1/2 p-2 pl-8 text-lg font-semibold text-[#6ba0cc]">
                            Weight :
                        </div>
                        <div className=" w-1/2 p-2 text-lg font-semibold ">
                            5.2 Kg
                        </div>
                    </div>
                    <div className="flex flex-col  h-full">
                        <div className=" w-1/2 p-2 pl-8 text-lg font-semibold text-[#6ba0cc]">
                            Description:
                        </div>
                        <div className=" p-8 pt-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua, t enim ad minim veniam.
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full md:w-5/12 bg-[#bfeaf5] flex flex-col rounded-md">
                <div className=" w-full bg-[#608f97] text-xl font-bold text-[#40526f] flex">
                    <NavLink to="/pet/owner/1" className=" w-1/2 h-full  hover:bg-[#91d8e4] p-4"  >
                        <div className=" flex justify-center">
                            Owner's Info
                        </div>
                    </NavLink>
                    <NavLink to="/pet/history/1" className=" w-1/2 h-full hover:bg-[#91d8e4] p-4" >
                        <div className=" flex justify-center">
                            Appointment History
                        </div>
                    </NavLink>
                </div>
                <Outlet />
            </div>
        </div>
    )
}