import React, { useState } from "react";

export default function SuccessPopUp({ type, onSuccess }) {

    const [isModalVisible, setIsModalVisible] = useState(true); // Modal visibility state

    console.log("##rp: in successmodal");
    if (!isModalVisible) return null;

    const overlayStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000
    };

    const popupStyle = {
        backgroundColor: "white",
        padding: "1.5em",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        textAlign: "center",
        width: "30em"
    };

    const buttonStyle = {
        margin: "1em",
        padding: "1em",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        width: "7em",
        boxShadow: "0 0 10px rgb(0, 0, 0, 0.15)",
        textTransform: "uppercase",
        backgroundColor: "gray",
        color: "white"
    };

    const iconStyle = {
        width: "2.5em",
        margin: "0.2em"
    };

    const messageStyle = {
        lettetSpacing: 1,
        marginBottom: "2em"
    }

    // Conditionally render message based on `type`
    let message = `Employee has been successfully ${type === "create" ? "created" : "updated"} !`;

    return (
        <div style={overlayStyle}>
            <div style={popupStyle}>
                <img src="./images/success-icon.png" style={iconStyle} />
                <h3 style={messageStyle}>{message}</h3>
                <div style={{ marginTop: "1em" }}>
                    <button style={buttonStyle} className="action-links" onClick={onSuccess}>
                        OK
                    </button>
                </div>
            </div>
        </div>
    );
}
