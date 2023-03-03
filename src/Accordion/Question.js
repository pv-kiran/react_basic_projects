import React , {useState} from 'react'
import { AiOutlinePlusCircle ,AiOutlineMinusCircle } from "react-icons/ai";

function Question({id , title , info} ) {


  const [showInfo, setShowInfo] = useState(false)

 
  return (
    <article className='question'>
       <header>
         <h4>{title}</h4>
         <button className='btn' onClick={() => {
           setShowInfo(!showInfo)
         }}>
             {
               showInfo ? <AiOutlineMinusCircle></AiOutlineMinusCircle> : <AiOutlinePlusCircle></AiOutlinePlusCircle>
             }
         </button>
       </header> 
       {
         showInfo && <p> {info} </p>  
       } 
         
    </article>
  )
}

export default Question