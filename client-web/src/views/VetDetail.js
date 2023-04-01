export default function VetDetail() {
    return (
        <div className=" w-full flex">
            <div className=" w-1/4 flex  flex-col">
                <div className=" bg-[#eafdfc] rounded-t-md shadow-md">
                    <div className="w-full p-8 pb-4 flex flex-col">
                        <div className="">
                            <img className=" rounded-xl object-cover w-full h-56" src="https://images.ctfassets.net/rt5zmd3ipxai/0stMAHytHj2enLmAroKbh/5e73db26112b9e2c3257c7dbae81ec66/IMG_5395.c50e7600bcc175511c722c4dcc4ddad5.jpg" alt="Avatar Tailwind CSS Component" />
                        </div>
                        <div className="flex flex-col  items-center">
                            <div className=" text-lg font-bold">
                                Drh. Bedul
                            </div>
                            <div className=" text-secondary">
                                Universitas Indonesia
                            </div>
                        </div>
                        <div className="flex w-full justify-center">
                            Male
                        </div>
                    </div>
                </div>
                <div>
                    <label className=" shadow-md flex justify-center font-semibold hover:cursor-pointer py-4 px-4 rounded-b-md bg-[#ff9787] hover:bg-[#ffa99b] active:bg-[#ff9787] active:scale-95 duration-200 ">
                        <span className="select-none">
                            Edit
                        </span>

                    </label>
                </div>
            </div>
            <div className=" w-3/4">
                <table class="table-fixed w-full">

                </table>
            </div>
        </div>
    )
}