import React from "react";

// Employee row component
export default class EmployeeRow extends React.Component {

    // Function to format date
    formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options).replace(',', '');
    }

    render() {
        const employee = this.props.employee;
        const CSSstyle = this.props.rowStyle;

        return (
            <tr>
                <td style={CSSstyle}> {employee.first_name} </td>
                <td style={CSSstyle}> {employee.last_name} </td>
                <td style={CSSstyle}> {employee.age} </td>
                <td style={CSSstyle}> {this.formatDate(employee.date_of_joining)} </td>
                <td style={CSSstyle}> {employee.title} </td>
                <td style={CSSstyle}> {employee.department} </td>
                <td style={CSSstyle}> {employee.employee_type} </td>
                <td style={CSSstyle}> {employee.current_status} </td>
            </tr>
        );
    }
}