

export default function ButtonC(
  { btevent, name }) {


  return (    
      <button className={`inline-flex flex-col justify-center
                        px-4 py-1 
                        border-2 
                        rounded-lg                        
                        bg-blue-500 hover:bg-blue-900
                        text-white                    
                        `}
        onClick={btevent}
      >
        {name}
      </button>
    
  )
}
