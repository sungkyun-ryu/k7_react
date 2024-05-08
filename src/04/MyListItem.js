import { useState, useEffect } from "react"


export default function MyListItem({ title, imgUrl, content }) {

    const [n, setN] = useState(0);
    const [m, setM] = useState(0);

    const handleclick_pos = () => {
        setN(n + 1);
        console.log(title, 'n= ', n)
    }
    const handleclick_neg = () => {
        setM(m - 1);
    }

    //when the component is loaded, this useEffect runs ONLY once 
    //because of empty dependency array [].

    // useEffect(()=>{
    //     console.log(title, "생성");
    // }, [] ) 

    //useEffect runs dependent on changes of the dependency array. 
    useEffect(()=> {
        console.log(title, '변경 n and m', n , m)
    }, [n,m])

    //useEffect runs when there is any changes.
    useEffect(()=> {
        console.log(title, '변경됨')
    })

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
                <div className="flex justify-between">
                    <div className="flex justify-end">
                        <span onClick={handleclick_neg} >
                            💔
                            </span>
                        <span className="inline-flex mx-2 font-bold">
                            Dislike
                            </span>
                        <span className="font-bold mr-3">
                            {m}
                            </span>
                    </div>
                    <div className="flex justify-end">
                        <span onClick={handleclick_pos} >
                            💚</span>
                        <span className="inline-flex mx-2 font-bold">Like</span>
                        <span className="font-bold mr-3">{n}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}
