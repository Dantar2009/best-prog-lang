import { useContext } from "react"
import { MainContext } from "../context/MainContext"
import LangItem from "./LangItem"

function LangList(){
    const {langs,allRating,user,voice,isMobile}=useContext(MainContext)
    return(
        
        <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            marginTop:100
        }}>
            <div style={{
                width:`${isMobile?100:60}%`,
                minHeight:80,
                borderRadius:20,
                background:"#1b1b1c"
            }}>
                {langs?.map((item,index)=>(
                    <LangItem key={item.id} nomer={index+1} name={item.name} rating={item.rating} allRating={allRating}/>
                ))}
            </div>
        </div>
    )
}
export default LangList