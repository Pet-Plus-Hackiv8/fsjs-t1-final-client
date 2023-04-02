import DashboardCard from "../Cards/DashboardCard.js"

export default function DashboardTable() {
    return (
        <div className=" h-5/6">
            <div className="flex justify-around border-b-2 mb-4 pb-2 border-[#b0bfbf] text-lg ">
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

            <div className=" overflow-y-scroll h-[26.5rem]">
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
                <DashboardCard />
            </div>
        </div>

    )
}