import { useContext } from "react";
import HeadButton from "./components/HeadButton";
import Input from "./components/Input";
import MiddleCard from "./components/MiddleCard";
import RegButton from "./components/RegButton";
import { MainContext } from "./context/MainContext";

export default function SignIn() {
    const { 
        signIn, 
        loginText, 
        setLoginText, 
        passwordText, 
        setPasswordText, 
        loginError, 
        passwordError,
        toRegister,
        toHome
    } = useContext(MainContext);

    return (
        <>
            <MiddleCard>
                <p style={{ fontSize: 40, margin: 5, color: "#e0e0e0" }}>Sign In</p>
                <Input place="Login" value={loginText} func={setLoginText} />
                {loginError && <p style={{ color: "red", margin: 0 }}>{loginError}</p>}
                <Input 
                    place="Password" 
                    type="password" 
                    value={passwordText} 
                    func={setPasswordText} 
                />
                {passwordError && <p style={{ color: "red", margin: 0 }}>{passwordError}</p>}
                <RegButton text="Sign In" />
                <a 
                    onClick={toRegister}
                    style={{
                        color: "#7351c4",
                        cursor: "pointer",
                        fontSize: 14,
                        textDecoration: "underline",
                        marginTop: 10
                    }}
                >
                    Don't have an account? Register
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