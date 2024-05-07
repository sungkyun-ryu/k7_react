
export default function MyListItem({ title, imgUrl, content }) {
    return (
        <div className="bg-gray-200  flex w-full h-full justify-center items-start">
            <div className="flex flex-col w-1/3 justify-center p-5 ">
                <img src={imgUrl} alt={title} />
            </div>
            <div className="flex flex-col w-2/3 justify-between">
                <div>
                    <div className="font-bold">
                        {title}
                    </div>
                    <div>
                        {content}
                    </div>
                </div>
                <div className="flex justify-end">
                    <span>💚</span>
                    <span className="inline-flex mx-2 font-bold">Like</span>
                    <span className="font-bold">0</span>
                </div>
            </div>
        </div>
    )
}
