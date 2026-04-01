function Input({ place, func, value, type = "text" }) {
    return (
        <input
            type={type}
            placeholder={place}
            value={value}
            onChange={(e) => func(e.target.value)}
            style={{
                fontSize: 20,
                width: "100%",
                padding: "5px 15px",
                borderRadius: 10,
                background: "#3a3a3c",
                color: "#e0e0e0",
                border: "1px solid #555",
                outline: "none"
            }}
            onFocus={(e) => (e.target.style.borderColor = "#777")}
            onBlur={(e) => (e.target.style.borderColor = "#555")}
        />
    );
}
export default Input;