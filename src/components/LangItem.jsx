import { useContext } from "react";
import VoisButton from "./VoisButton";
import { MainContext } from "../context/MainContext";

function LangItem({nomer, rating, allRating,name}){
    const {user} = useContext(MainContext);

    return(
        <div style={{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between",
            alignItems:"center",
            margin:15,
            background:"#43454a",
            height:50,
            borderRadius:10,
            gap:10
        }}>
            <div style={{
                flex:1,
                margin:10,
                display:"flex",
                flexDirection:"row",
                gap:10,
                justifyContent:"space-between",
                alignItems:"center"
            }}>
                
                <p style={{width:90,
                    color:"#ffffffcc"
                }}>{nomer}.{name}</p>
                
                <div style={{
                    background:"#332c2c",
                    height:40,
                    flex:1,
                    borderRadius:10,
                    display:"flex",
                    justifyContent:"flex-start",
                    position:"relative",
                    overflow:"hidden"
                }}>
                    <div
                        style={{
                            height:40,
                            width:`${allRating>0 ? (rating/allRating*100) : 0}%`,
                            background:"#5f34c2",
                            borderRadius:10,
                            transition:"all 1s"
                        }}
                    ></div>
                    <p style={{
                        position:"absolute",
                        transform:"translate(-50%,-50%)",
                        left:"50%",
                        top:"50%",
                        margin:0,
                        color:"white",
                        fontSize:16,
                        
                    }}>{allRating>0 ? (rating/allRating*100).toFixed(1) : 0}%</p>
                </div>
            </div>
            <div style={{
                margin:10,
                display:"flex",
                flexDirection:"row",
                gap:10,
                justifyContent:"space-between",
                alignItems:"center"
            }}>
                <div style={{
                    width:20
                }}>
                    <p style={{
                        color:"white"
                    }}>{rating}</p>
                </div>
                <VoisButton text={user?.pick===name?"Cancel":"Vote"} langName={name}/>
            </div>            
        </div>
    )
}
export default LangItem;