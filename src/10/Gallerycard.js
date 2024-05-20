
export default function Gallerycard({ img_url, title, address, keyword }) {

    // const splitkeyword = (keyword) => {
    //     const tm = keyword.split() 
    //     let keywords = []
    //     keywords = tm.map((item) => {
    //         keywords.push(item)
    //     console.log(keywords)
    //     })
    // }

    const keywords = (keyword.includes(',') ? keyword.split(',') : [keyword])
        .map((item) =>
            <span key={item} className="inline-block 
                                        bg-gray-200 
                                        rounded-full 
                                        px-3 py-1 
                                        text-sm font-semibold 
                                        text-gray-700 mr-2 mb-2">
                {item}
            </span>)




    return (
        <div>
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full h-48 object-contain"
                    src={img_url.includes("http:") ? img_url.replace('http:', 'https:') : img_url}
                    alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">
                        {address}
                    </p>
                </div>
                <div className="px-6 pt-4 pb-2">
                    {keywords}
                </div>
            </div>
        </div>
    )
}
