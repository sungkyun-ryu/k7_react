import MyDiv2 from "./MyDiv2"


function MyDiv() {
  const dname1= 'div11' ; 
  const dname2= 'div22' ; 
  const dname3= 'div33' ; 

  return (
    <div className="relative bg-purple-400 h-2/3 w-2/3
                     text-black items-center flex justify-center">
      <div className="absolute bottom-0 left-0 text-white">
        {dname1}
      </div>

      <MyDiv2 dn1= {dname1} dn2={dname2} dn3={dname3}/>      
    </div>
  )
}

export default MyDiv
