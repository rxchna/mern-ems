import React from "react";
import formatDate from "./FormatDate";

// Employee view component
export default function EmployeeDetails({ employee, mode }) {

    // Check if employee data is available before rendering the form
    if (!employee) {
        return <div>Loading...</div>;
    }

    // function to format status of employee
    function formatEmployeeCurrentStatus(status) {
        return status === 1 ? "Working" : "Inactive";
    }

    // Function to call update API
    async function updateEmployee(employee) {
        console.log("##rp IN updateEmployee");
        const query = `mutation {
            updateEmployee(
                id: "${employee._id}",
                employee: {
                    first_name: "${employee.first_name}",
                    last_name: "${employee.last_name}",
                    age: ${employee.age},
                    date_of_joining: "${employee.date_of_joining}",
                    title: ${employee.title},
                    department: ${employee.department},
                    employee_type: ${employee.employee_type},
                    current_status: ${employee.current_status}
                }
            ) {
                _id,
                first_name,
                last_name,
                age,
                date_of_joining,
                title,
                department,
                employee_type,
                current_status
            }
        }`;

        console.log("Mutation query: ", query);
        const response = await fetch('/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query })
        });

        const result = await response.json();
        console.log("Updated employee final: ", result);
        
        // TODO: show a success message 
        // ...
    }

    function handleSubmit(e) {
        e.preventDefault();

        const forms = document.forms.employeeViewEdit;

        console.log("##rp: Old employee details: ", employee);
        const updated_employee = {
            ...employee,
            title: forms.title.value,
            department: forms.department.value,
            current_status: forms.current_status.value,
        };
        console.log("##rp: Updated employee is ", updated_employee);

        // Update employee
        updateEmployee(updated_employee);
    }

    const formStyle = { borderRadius: 5, backgroundColor: "#fff", borderRadius: 5 };
    const elementStyle = { marginTop: "0.7em", marginBottom: "0.7em", width: "100%" };
    const btnStyle = { marginTop: "1.5em", marginBottom: "1.5em", borderRadius: "1em", backgroundColor: "orange", border: "none", textTransform: "uppercase", letterSpacing: 1, color: "white" };
    const editBtnStyle = { backgroundColor: "#007bff" };
    const deleteBtnStyle = { backgroundColor: "red" };
    console.log("##rp emploee in view: ", employee);

    return (
        <div className={`section form-container ${mode === 'view' ? 'view-form' : 'edit-form'}`}>
            <form name="employeeViewEdit" style={formStyle} onSubmit={mode === 'edit' ? handleSubmit : null}>
                
                {/* Form Heading */}
                {mode === 'view' ? ( <h2>Employee Details</h2> ) : ( <h2>Edit Employee Details</h2> )}
                
                <div style={elementStyle} className="form-field">
                    <label htmlFor="first_name">First Name</label>
                    <input type="text" name="first_name" value={employee.first_name} readOnly disabled={mode === "edit"} />
                </div>
                <div style={elementStyle} className="form-field">
                    <label htmlFor="last_name">Last Name</label>
                    <input type="text" name="last_name" value={employee.last_name} readOnly disabled={mode === "edit"} />
                </div>
                <div style={elementStyle} className="form-field">
                    <label htmlFor="age">Age</label>
                    <input type="number" name="age" value={employee.age} readOnly disabled={mode === "edit"} />
                </div>
                <div style={elementStyle} className="form-field">
                    <label htmlFor="date_of_joining">Date of Joining</label>
                    <input type="text" name="date_of_joining" value={formatDate(employee.date_of_joining)} readOnly disabled={mode === "edit"} />
                </div>
                <div style={elementStyle} className="form-field">
                    <label htmlFor="title">Title</label>
                    {mode === 'view' ? (
                        <input type="text" name="title" value={employee.title} readOnly />
                    ) : (
                        <select id="title" name="title" defaultValue={employee.title}>
                            <option value="Employee">Employee</option>
                            <option value="Manager">Manager</option>
                            <option value="Director">Director</option>
                            <option value="VP">VP</option>
                        </select>
                    )}
                </div>
                <div style={elementStyle} className="form-field">
                    <label htmlFor="department">Department</label>
                    {mode === 'view' ? (
                        <input type="text" name="department" value={employee.department} readOnly />
                    ) : (
                        <select id="department" name="department" defaultValue={employee.department}>
                            <option value="IT">IT</option>
                            <option value="Marketing">Marketing</option>
                            <option value="HR">HR</option>
                            <option value="Engineering">Engineering</option>
                        </select>
                    )}
                </div>
                <div style={elementStyle} className="form-field">
                    <label htmlFor="employee_type">Employee Type</label>
                    <input type="text" name="employee_type" value={employee.employee_type} readOnly disabled={mode === "edit"} />
                </div>
                <div style={elementStyle} className="form-field">
                    <label htmlFor="current_status">Current Status</label>
                    {mode === 'view' ? (
                        <input type="text" name="current_status" value={formatEmployeeCurrentStatus(employee.current_status)} readOnly />
                    ) : (
                        <select id="current_status" name="current_status" defaultValue={employee.current_status}>
                            <option value="1">{formatEmployeeCurrentStatus(1)}</option>
                            <option value="0">{formatEmployeeCurrentStatus(0)}</option>
                        </select>
                    )}
                </div>
                {mode === 'view' ? (
                    <div className="form-field action-links-container">
                        <a href={`/#/edit/${employee._id}`} className="action-links" style={editBtnStyle}>Edit</a>
                        <a href={`/#/delete/${employee._id}`} className="action-links" style={deleteBtnStyle}>Delete</a>
                    </div>
                ) : (
                    <div className="form-field">
                        <button style={btnStyle} className="form-button">Update</button>
                    </div>
                )}
            </form>
        </div>
    );
}