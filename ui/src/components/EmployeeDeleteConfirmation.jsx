import React, { useState } from "react";

export default function EmployeeDeleteConfirmation({ employeeId, onSuccess, onCancel }) {

    const [isModalVisible, setIsModalVisible] = useState(true); // Modal visibility state

    // Function to call the delete API
    async function deleteEmployee(employeeId) {
        const query = `mutation {
            deleteEmployee(id: "${employeeId}")
        }`;

        const response = await fetch("/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query }),
        });

        console.log("##rp query delete: ", query);

        const result = await response.json();

        if (result.data?.deleteEmployee) {
            window.location.href = "/"; // Redirect to the home page
        } else {
            alert("Failed to delete employee.");
        }
    }

    function handleConfirm() {
        deleteEmployee(employeeId); // Call delete API
    }

    if (!isModalVisible) return null;

    const overlayStyle = {
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
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
        textAlign: "center"
    };

    const buttonStyle = {
        margin: "1em",
        padding: "1em",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer",
        width: "7em",
        boxShadow: "0 0 10px rgb(0, 0, 0, 0.15)",
        textTransform: "uppercase"
    };

    const confirmStyle = {
        ...buttonStyle,
        backgroundColor: "red",
        color: "white"
    };

    const cancelStyle = {
        ...buttonStyle,
        backgroundColor: "gray",
        color: "white"
    };

    const iconStyle = {
        width: "2.5em",
        margin: "0.2em"
    };

    return (
        <div style={overlayStyle}>
            <div style={popupStyle}>
                <img src="./images/confirmation-alert-icon.png" style={iconStyle} />
                <h3>Are you sure you want to delete this employee?</h3>
                <div style={{ marginTop: "1em" }}>
                    <button style={confirmStyle} onClick={handleConfirm} className="action-links">
                        Confirm
                    </button>
                    <button style={cancelStyle} onClick={onCancel} className="action-links">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    );
}
