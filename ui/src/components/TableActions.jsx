import React, { useState } from "react";
import EmployeeDeleteConfirmation from "./EmployeeDeleteConfirmation";

// Table actions component
export default function TableActions(props) {
    const employee = props.employee;
    const viewBtnStyle = { backgroundColor: "#54c81d" };
    const editBtnStyle = { backgroundColor: "#007bff" };
    const deleteBtnStyle = { backgroundColor: "red" };

    const [showDeleteModal, setShowDeleteModal] = useState(false); // Manage the delete confirmation modal visibility for delete

    // Function to show popup on "click"
    const handleDeleteClick = (e) => {
        e.preventDefault();
        setShowDeleteModal(true);
    };

    return (
        <div className="action-links-container">
            <a href={`/#/get/${employee._id}`} className="action-links" style={viewBtnStyle}>View</a>
            <a href={`/#/edit/${employee._id}`} className="action-links" style={editBtnStyle}>Edit</a>
            <a href="#" onClick={handleDeleteClick} className="action-links" style={deleteBtnStyle}>Delete</a>

            {/* Delete Confirmation Popup */}
            {showDeleteModal && (
                <EmployeeDeleteConfirmation
                    employeeId={employee._id}
                    onCancel={() => setShowDeleteModal(false)}
                    onSuccess={() => {
                        setShowDeleteModal(false);
                    }}
                />
            )}
        </div>
    );
}
