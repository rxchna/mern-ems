import React from "react";

// Table actions component
export default function ActionButtons(props) {
    const employee = props.employee;
    const viewBtnStyle = { backgroundColor: "#54c81d" };
    const editBtnStyle = { backgroundColor: "#007bff" };
    const deleteBtnStyle = { backgroundColor: "red" };

    return (
        <div className="action-links-container">
            <a href={`/#/get/${employee._id}`} className="action-links" style={viewBtnStyle}>View</a>
            <a href={`/#/edit/${employee._id}`} className="action-links" style={editBtnStyle}>Edit</a>
            <a href={`/#/delete/${employee._id}`} className="action-links" style={deleteBtnStyle}>Delete</a>
        </div>
    );
}
