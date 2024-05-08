
export default function LottoBall({number}) {

    const colorN = {
        'bg0': 'bg-red-600',
        'bg1': 'bg-green-600',
        'bg2': 'bg-blue-600',
        'bg3': 'bg-purple-600',
        'bg4': 'bg-orange-600',
    }

    return (
        <div className={`inline-flex w-16 h-16 
        border rounded-full items-center
         ${colorN["bg" + Math.floor(number/10)]}
         text-white 
         justify-center
            text-2xl`}>
            {number}
        </div>
    )
}

