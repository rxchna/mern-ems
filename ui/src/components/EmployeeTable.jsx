import React from "react";
import EmployeeRow from "./EmployeeRow";

// Employee table component
export default class EmployeeTable extends React.Component {
    render () {
        const rowStyle = { padding: 10, textAlign: "center", verticalAlign: "middle", border: "1px solid orange", margin: 0 };
        const headerStyle = { padding: 10, backgroundColor: "#ffa50066" };

        return (
            <div className="section table-container">
                <table border="1">
                    <thead>
                        <tr>
                            <th style={headerStyle}>First Name</th>
                            <th style={headerStyle}>Last Name</th>
                            <th style={headerStyle}>Age</th>
                            <th style={headerStyle}>Date of Joining</th>
                            <th style={headerStyle}>Title</th>
                            <th style={headerStyle}>Department</th>
                            <th style={headerStyle}>Employee Type</th>
                            <th style={headerStyle}>Current Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Display employee data if available */}
                        {this.props.employees.length > 0 ? (
                            this.props.employees.map(employee => (
                                <EmployeeRow employee={employee} key={employee._id} rowStyle={rowStyle} />
                            ))
                        ) : (
                            // No employees availble message
                            <tr>
                                <td colSpan="8" style={{ textAlign: "center", padding: "10px", fontStyle: "italic" }}>
                                    No available employees. {this.props.employees}
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}