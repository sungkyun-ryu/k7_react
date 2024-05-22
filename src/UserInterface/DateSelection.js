// import { useRef } from "react"

export default function DateSelection({ date, dateSelection }) {

   


    return (
        <div>
            <form className='flex flex-col justify-center'>
                <div className='flex items-center justify-center h-20'>
                    <label htmlFor='dateId'
                        className='px-3 font-bold
                         text-gray-600'>
                        Choose the Date: </label>
                    <input type="date" id='dateId'
                        ref={date}
                        onChange={dateSelection}
                        className='px-3 border-2 border-gray-600 rounded-xl' />
                </div>
            </form>
        </div>
    )
}
