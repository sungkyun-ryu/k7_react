import React from 'react'

export default function LottoTryTrash() {
    return (
        <div className='w-full h-4/5 flex justify-center'>
            <div className='flex flex-col justify-between h-full w-2/3 items-center'>
                <div className='flex w-full h-1/3 items-center justify-evenly'>
                    <span className='w-20 h-20 items-center border rounded-full'> 1 </span>
                    <span> 2 </span>
                    <span> 3 </span>
                    <span> 4 </span>
                    <span> 5 </span>
                    <span> 6 </span>
                    <p> + </p>
                    <span> 7 </span>
                </div>
                <div className='h-1/3'>
                    <div>Lotto</div>
                </div>
            </div>
        </div>
    )
}
