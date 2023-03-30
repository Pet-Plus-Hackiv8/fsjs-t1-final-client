import PostsTable from "../components/Tables/PostsTable";

export default function Posts() {
    return (
        <>
            <div className="text-xl pb-4 font-bold outline-1 outline-black text-[#ff9787]">
                Clinic Posts
            </div>
            <PostsTable />
        </>
    )
}