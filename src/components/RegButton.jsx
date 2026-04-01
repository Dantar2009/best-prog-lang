import { useContext, useState } from "react";
import { MainContext } from "../context/MainContext";

function RegButton({ text }) {
    const [isHover, setIsHover] = useState(false);
    const [clicked, setClicked] = useState(false);
    const { register, signIn, loginText, passwordText } = useContext(MainContext);
    
    const handleClick = () => {
        setClicked(true);
        if (text === "Register") {
            register(loginText, passwordText);
        } else if (text === "Sign In") {
            signIn(loginText, passwordText);
        }
        setTimeout(() => setClicked(false), 200);
    };
    
    return(
        <button style={{
            width:"100%",
            height:50,
            borderRadius:15,
            background:isHover?"#5f34c2":"#7351c4",
            fontSize:26,
            border:"none",
            transition:"all 0.3s",
            transform:clicked?"scale(0.95)":"scale(1.0)",
            cursor:"pointer",
            color:"white"
        }} 
        onMouseEnter={()=>setIsHover(true)}
        onMouseLeave={()=>setIsHover(false)}
        onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default RegButton;