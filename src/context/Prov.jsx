import { useEffect, useState, useCallback } from "react";
import { MainContext } from "./MainContext";
import { useNavigate } from "react-router-dom";

export default function Prov({ children }) {
    const navigate = useNavigate();

    const [user, setUser] = useState(() => {
        const userok = localStorage.getItem("user");
        try {
            return userok ? JSON.parse(userok) : null;
        } catch {
            return null;
        }
    });
    const [langs, setLangs] = useState([]);
    const [loginText, setLoginText] = useState("");
    const [passwordText, setPasswordText] = useState("");
    const [loginError, setLoginError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [isMobile, setIsMobile] = useState(false);

    const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

    const getLangs = useCallback(() => {
        fetch(`${API_URL}/lang`)
            .then(response => response.json())
            .then(data => data.sort((a, b) => b.rating - a.rating))
            .then(sortedData => setLangs(sortedData))
            .catch(err => console.log(err));
    }, [API_URL]);

    const voice = async (name) => {
        if (!user) {
            toRegister();
            return;
        }
        try {
            const response = await fetch(`${API_URL}/voice`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    gmail: user?.gmail,
                    newPick: name
                })
            });
            const data = await response.json();
            
            if (data.otvet === "regPlease") {
                toRegister();
                return;
            }
            
            const newUser = {
                gmail: data.user.gmail,
                pick: data.user.pick
            };
            setUser(newUser);
            localStorage.setItem("user", JSON.stringify(newUser));
            getLangs();
        } catch (err) {
            console.log(err);
        }
    };

    const register = async (gmail, pass) => {
        try {
            setPasswordError("");
            setLoginError("");
            const response = await fetch(`${API_URL}/register`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ gmail, pass })
            });
            const data = await response.json();

            if (data.otvet === "userRegistered") {
                setLoginError("User already registered");
                return;
            }
            if (data.otvet === "notFoundPost") {
                setLoginError("Email does not exist");
                return;
            }
            if (data.otvet === "miniPass") {
                setPasswordError("Password is too short (min 8 characters)");
                return;
            }
            if (data.otvet === "trueReg") {
                const newUser = data.user;
                localStorage.setItem("user", JSON.stringify(newUser));
                setUser(newUser);
                setLoginText("");
                setPasswordText("");
                getLangs();
                toHome();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const signIn = async (gmail, pass) => {
        try {
            setPasswordError("");
            setLoginError("");
            const response = await fetch(`${API_URL}/signin`, {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ gmail, pass })
            });
            const data = await response.json();

            if (data.otvet === "notFound") {
                setLoginError("User not found");
                return;
            }
            if (data.otvet === "notPass") {
                setPasswordError("Incorrect password");
                return;
            }
            if (data.otvet === "trueSignin") {
                const newUser = data.user;
                localStorage.setItem("user", JSON.stringify(newUser));
                setUser(newUser);
                setLoginText("");
                setPasswordText("");
                getLangs();
                toHome();
            }
        } catch (err) {
            console.log(err);
        }
    };

    const toSignOut = () => {
        setUser(null);
        localStorage.removeItem("user");
        setLoginText("");
        setPasswordText("");
        getLangs();
        toHome();
    };

    const toSignIn = () => {
        navigate("/signin");
    };

    const toRegister = () => {
        navigate("/register");
    };

    const toHome = () => {
        navigate("/");
    };

    useEffect(() => {
        getLangs();
        
        const checkWidth = () => {
            setIsMobile(window.innerWidth <= 768);
        };
        checkWidth();
        window.addEventListener('resize', checkWidth);
        
        const interval = setInterval(() => {
            getLangs();
        }, 600000);
        
        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', checkWidth);
        };
    }, [getLangs]);

    useEffect(() => {
        getLangs();
    }, [user, getLangs]);

    const allRating = langs.reduce((sum, lang) => sum + lang.rating, 0);

    return (
        <MainContext.Provider
            value={{
                user,
                setUser,
                toSignIn,
                toRegister,
                toSignOut,
                allRating,
                langs,
                voice,
                register,
                signIn,
                loginText,
                setLoginText,
                passwordText,
                setPasswordText,
                loginError,
                passwordError,
                isMobile,
                toHome
            }}
        >
            {children}
        </MainContext.Provider>
    );
}