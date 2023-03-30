import DashboardCard from "./DashboardCard"

export default function DashboardTable() {
    return (<>
        <div className="flex justify-around border-b-2 border-[#b0bfbf] text-lg ">
            <div className=" pl-5 w-5/12">
                Patient
            </div>
            <div className=" w-3/12">
                Time
            </div>
            <div className=" w-3/12">
                Date
            </div>
            <div className=" w-1/12">

            </div>
        </div>

        <DashboardCard />
        <DashboardCard />
        <DashboardCard />
    </>
    )
}