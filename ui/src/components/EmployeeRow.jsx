import React from "react";
import ActionButtons from "./TableActions";
import formatDate from "./FormatDate";

// Employee row component
export default class EmployeeRow extends React.Component {

    render() {
        const employee = this.props.employee;
        const CSSstyle = this.props.rowStyle;

        return (
            <tr>
                <td style={CSSstyle}> {employee.first_name} </td>
                <td style={CSSstyle}> {employee.last_name} </td>
                <td style={CSSstyle}> {employee.age} </td>
                <td style={CSSstyle}> {formatDate(employee.date_of_joining)} </td>
                <td style={CSSstyle}> {employee.title} </td>
                <td style={CSSstyle}> {employee.department} </td>
                <td style={CSSstyle}> {employee.employee_type} </td>
                <td style={CSSstyle}> {employee.current_status} </td>
                <td style={CSSstyle}> <ActionButtons employee={employee} /> </td>
            </tr>
        );
    }
}