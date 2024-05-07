
export default function MyListItem({ title, imgUrl, content }) {
    return (
        <div className="bg-gray-200  flex w-full justify-center items-start">
            <div className="flex flex-col h-full w-1/3 justify-center p-5 ">
                <img src={imgUrl} alt={title} />
            </div>
            <div className="flex flex-col h-full w-2/3 justify-between mr-3">
                <div>
                    <div className="font-bold mt-3">
                        {title}
                    </div>
                    <div>
                        {content}
                    </div>
                </div>
                <div className="flex justify-end">
                    <span>💚</span>
                    <span className="inline-flex mx-2 font-bold">Like</span>
                    <span className="font-bold mr-3">0</span>
                </div>
            </div>
        </div>
    )
}
