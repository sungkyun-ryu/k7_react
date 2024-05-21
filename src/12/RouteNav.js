import ButtonC from '../UI/ButtonC'
import { useNavigate } from 'react-router-dom'

export default function RouteNav() {

    const navigate = useNavigate(); 

     return (
    <div className='w-full grid grid-cols-3'>
      <ButtonC 
            btevent={()=>{navigate('/')}} name='Home' color='blue'/>
      <ButtonC 
            btevent={()=>{navigate('/p1/1')}} name='Page1' color='blue'/>
      <ButtonC 
            btevent={()=>{navigate('/p2')}} name='Page2' color='blue'/>
    </div>
  )
}
