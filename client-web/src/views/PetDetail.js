export default function PetDetail() {
    return (
        <div className="flex w-full justify-center gap-16 flex-col md:flex-row">
            <div className=" w-full md:w-4/12 bg-[#bfeaf5] rounded-md">
                <div>
                    <img className=" rounded-t-md w-full h-72 object-cover" src="https://chico.ca.us/sites/main/files/imagecache/lightbox/main-images/dog_license.jpg" />
                </div>

                <div className=" pt-2">
                    <div className="flex w-full">
                        <div className=" w-1/2 p-2 pl-8 text-lg font-semibold text-[#6ba0cc]">
                            Species :
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
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </div>
                    </div>
                </div>
            </div>
            <div className=" w-full md:w-5/12 bg-[#bfeaf5] flex flex-col rounded-md">
                <div className=" w-full bg-[#91d8e4] p-4 text-xl font-bold text-[#40526f]">
                    Owner's Info
                </div>
                <div className=" p-4 text-lg font-semibold">
                    Name : Zio Kandaka
                </div>
                <div className=" p-4 text-lg font-semibold" >
                    Contact Number : 08129412702
                </div>
                <div  className=" p-4 text-lg font-semibold">
                    Email : zio_kandaka@mail.com
                </div>
                <div className=" p-4 text-lg font-semibold">
                    Address : Bekasi
                </div>
                <div className=" p-4 text-lg font-semibold">
                    Past Records :
                </div>
            </div>
        </div>
    )
}