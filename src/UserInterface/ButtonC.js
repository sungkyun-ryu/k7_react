

export default function ButtonC(
  { btevent, name, color }) {

  const buttoncolor = {
    'blue':  'bg-blue-500',
    'grey': 'bg-gray-500'
  }
  
  const hovercolor = {
    'blue': 'hover:bg-blue-900',
    'gray': 'hover:bg-gray-900'
  }

  return (    
      <button className={`inline-flex flex-col justify-center
                        px-4 py-1 
                        border-2 
                        rounded-lg                        
                        ${buttoncolor[color]}
                        ${hovercolor[color]}
                        }
                        text-white                    
                        `}
        onClick={btevent}
        
      >
        {name}
      </button>
    
  )
}
