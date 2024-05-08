

export default function ButtonC(
  {btevent,name}) {
      
  
  return (
    <div>
      <button className={`inline-flex px-4 py-1 
                        border-2 
                        rounded-lg
                        text-xl
                        bg-blue-500 hover:bg-blue-900
                        text-white                                                  
                        `}
                        onClick={btevent}
                        >
        {name}
      </button>
    </div>
  )
}
