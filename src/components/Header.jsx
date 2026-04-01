import { useContext } from "react";
import HeadButton from "./HeadButton";
import { MainContext } from "../context/MainContext";

function Header(){
    const {user, toSignIn, toRegister, toSignOut}=useContext(MainContext);

    return(
        <div style={{
            width:"100%",
            display:"flex",
            padding:15,
            background:"#1b1b1c",
            flexDirection:"row-reverse",
            alignItems:"center",
            boxSizing:"border-box",
            gap:15
        }}>
            {user?
            (<div style={{
                display:"flex",
                gap:15,
                alignItems:"center"
            }}>
                <p style={{
                    textAlign:"center",
                    padding:"5px 10px 5px 10px",
                    borderRadius:10,
                    background:"#43454a",
                    color:"#e4dada",
                    margin:0
                }}>{user.gmail}</p>
                <HeadButton text={"Sign out"} func={toSignOut}/>
            </div>):
            (<div style={{
                display:"flex",
                gap:15,
                alignItems:"center"
            }}>
                <HeadButton text={"Sign In"} func={toSignIn} />
                <HeadButton text={"Register"} func={toRegister}/>
            </div>)}
        </div>
    )
}
export default Header;