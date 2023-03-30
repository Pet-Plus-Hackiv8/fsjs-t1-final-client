import PostsCard from "../Cards/PostsCard";

export default function PostsTable() {
    return (
        <>
            <div className="flex justify-around border-b-2 border-[#b0bfbf] text-lg ">
                <div className=" pl-5 w-5/12">
                    Title
                </div>
                <div className=" w-2/12">
                    Created At
                </div>
                <div className=" w-2/12">
                    Status
                </div>
                <div className=" w-2/12">
                    Content
                </div>
                <div className=" w-1/12">

                </div>
            </div>
            <PostsCard />
            <PostsCard />
            <PostsCard />
        </>
    )
}