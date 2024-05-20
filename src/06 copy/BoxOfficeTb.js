// import boxdata from './BoxOffice.json'
import { TiArrowSortedUp } from "react-icons/ti";
import { TiArrowSortedDown } from "react-icons/ti";
import { BsDash } from "react-icons/bs";

export default function BoxOfficeTb({ dailyListName, setSelM }) {

    const handleMvSelect = (mv) => {
        setSelM(mv);
    }

    const mData = dailyListName.map(item => {

        return <tr key={item.movieCd}
            onClick={() => handleMvSelect(item)}
            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.rank}
            </th>
            <td className="px-6 py-4 text-center">
                {item.movieNm}
            </td>
            <td className="px-6 py-4 text-right">
                {parseInt(item.salesAcc).toLocaleString()}
            </td>
            <td className="px-6 py-4 text-right">
                {parseInt(item.audiAcc).toLocaleString()}
            </td>
            <td className="px-6 py-4 text-right flex justify-center ">
                <span>{parseInt(item.rankInten) > 0 ? <TiArrowSortedUp className='text-red-700 text-2xl' />
                    : parseInt(item.rankInten) < 0 ? <TiArrowSortedDown className='text-blue-800 text-2xl' />
                        : <BsDash />
                }
                </span>
                <span>
                    {parseInt(item.rankInten) != 0 && Math.abs(item.rankInten)}
                </span>
            </td>
        </tr>
    })
    return (
        <tbody>
            {mData}
        </tbody>
    )
}
