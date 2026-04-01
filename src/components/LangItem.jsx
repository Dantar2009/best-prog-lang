import { useContext } from "react";
import VoisButton from "./VoisButton";
import { MainContext } from "../context/MainContext";

function LangItem({nomer, rating, allRating,name}){
    const {user, isMobile} = useContext(MainContext);

    return(
        <div style={{
            display:"flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent:"space-between",
            alignItems: isMobile ? "stretch" : "center",
            margin:15,
            background:"#43454a",
            borderRadius:10,
            gap: isMobile ? 10 : 10,
            padding: isMobile ? 10 : "0 10px"
        }}>
            <div style={{
                flex: 1,
                margin: isMobile ? 0 : 10,
                display:"flex",
                flexDirection: isMobile ? "column" : "row",
                gap: isMobile ? 8 : 10,
                alignItems:"center",
                width: isMobile ? "100%" : "auto"
            }}>
                <p style={{
                    width: isMobile ? "auto" : 90,
                    minWidth: isMobile ? "auto" : 90,
                    color:"#ffffffcc",
                    margin: isMobile ? "0 0 5px 0" : 0
                }}>{nomer}.{name}</p>
                
                <div style={{
                    background:"#332c2c",
                    height:40,
                    flex: 1,
                    width: isMobile ? "100%" : "auto",
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
                            transition:"all 0.5s"
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
            
            {/* Правая колонка: рейтинг и кнопка */}
            <div style={{
                margin: isMobile ? "5px 0" : 10,
                display:"flex",
                flexDirection:"row",
                gap:15,
                justifyContent: isMobile ? "space-between" : "flex-end",
                alignItems:"center",
                minWidth: isMobile ? "auto" : 120
            }}>
                <div style={{
                    minWidth: 40,
                    textAlign: "center"
                }}>
                    <p style={{
                        color:"white",
                        margin: 0
                    }}>{rating}</p>
                </div>
                <VoisButton 
                    text={user?.pick === name ? "Cancel" : "Vote"} 
                    langName={name}
                />
            </div>            
        </div>
    )
}
export default LangItem;