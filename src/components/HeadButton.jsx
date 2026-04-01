import { useState } from "react"

function HeadButton({text,func}){
    const [isHover,setIsHover]=useState(false)
    const [clicked,setClicked]=useState(false)
    return(
        <button style={{
            width:120,
            height:40,
            borderRadius:15,
            background:isHover?"#5f34c2":"#7351c4",
            fontSize:17,
            border:"none",
            transition:"all 0.3s",
            transform:clicked?"scale(0.95)":"scale(1.0)"
        }} 
        onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}
        onClick={()=>{
            setClicked(true)
            func()
            setTimeout(()=>setClicked(false),200)
        }}
        
        >
            {text}
        </button>
    )
}
export default HeadButton