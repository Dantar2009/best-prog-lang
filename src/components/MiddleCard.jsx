import { useContext } from "react";
import { MainContext } from "../context/MainContext";

function MiddleCard({ children }) {
    const {isMobile}=useContext(MainContext)
    return (
        <div style={{
            width: "100%",
            height: "100vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <div style={{
                width: `${isMobile?70:20}%`,
                minHeight: 30,
                background: "#2e2e30",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                padding: 50,
                flexDirection: "column",
                gap: 25,
                borderRadius: 25,
                boxShadow: "0 8px 20px rgba(0,0,0,0.3)"
            }}>{children}</div>
        </div>
    );
}
export default MiddleCard;