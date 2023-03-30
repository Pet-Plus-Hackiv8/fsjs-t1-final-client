import DashboardTable from "../components/Tables/DashboardTable";

export default function Dashboard() {
    return (
        <>
            <div className="text-xl pb-4 font-bold outline-1 outline-black text-[#ff9787]">
                Appointment list
            </div>
            <DashboardTable />
        </>
    )
}