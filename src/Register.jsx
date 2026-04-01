import { useContext } from "react";
import HeadButton from "./components/HeadButton";
import Input from "./components/Input";
import MiddleCard from "./components/MiddleCard";
import RegButton from "./components/RegButton";
import { MainContext } from "./context/MainContext";

export default function Register() {
    const { 
        register, 
        loginText, 
        setLoginText, 
        passwordText, 
        setPasswordText, 
        loginError, 
        passwordError,
        toSignIn,
        toHome
    } = useContext(MainContext);

    return (
        <>
            <MiddleCard>
                <p style={{ fontSize: 40, margin: 5, color: "#e0e0e0" }}>Register</p>
                <Input place="Login" value={loginText} func={setLoginText} />
                {loginError && <p style={{ color: "red", margin: 0 }}>{loginError}</p>}
                <Input 
                    place="Password" 
                    type="password" 
                    value={passwordText} 
                    func={setPasswordText} 
                />
                {passwordError && <p style={{ color: "red", margin: 0 }}>{passwordError}</p>}
                <RegButton text="Register" />
                <a 
                    onClick={toSignIn}
                    style={{
                        color: "#7351c4",
                        cursor: "pointer",
                        fontSize: 14,
                        textDecoration: "underline",
                        marginTop: 10
                    }}
                >
                    Already have an account? Sign In
                </a>
                                <a 
                    onClick={toHome}
                    style={{
                        color: "#7351c4",
                        cursor: "pointer",
                        fontSize: 14,
                        textDecoration: "underline",
                        marginTop: 10
                    }}
                >
                    Go Home
                </a>
            </MiddleCard>
        </>
    );
}