import PostsTable from "../components/Tables/PostsTable";

export default function Posts() {
    return (
        <>
            <div className=" flex justify-between items-center ">
                <div className="text-3xl pb-4 font-bold outline-1 outline-black text-[#ff9787]">
                    Clinic Posts
                </div>
                <label className=" flex font-semibold hover:cursor-pointer py-4 px-4  rounded-md bg-[#ff9787] hover:bg-[#ffa99b] active:bg-[#ff9787] active:scale-95 duration-200 ">
                    <span className=" mr-2">
                        <svg fill="none" className=" p-0 w-6" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                        </svg>
                    </span>
                    <span className=" select-none">
                        Add Post
                    </span>
                </label>
            </div>
            <PostsTable />
        </>
    )
}