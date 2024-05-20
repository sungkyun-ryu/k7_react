

export default function BoxOfficeDt({boxDate}) {
   console.log('불러왔다', boxDate) 
  return (
    <div className="w-full h-20 flex justify-center 
    items-center bg-gray-400 font-bold text-gray-800">
      Today's Date:<p>&nbsp;&nbsp;&nbsp;</p> 
      {boxDate.slice(9,13)}-{boxDate.slice(13,15)}-{boxDate.slice(15,17)}
    </div>
  )
}

