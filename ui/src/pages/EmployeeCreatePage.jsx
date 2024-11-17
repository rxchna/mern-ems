import React from "react";
import EMSHeader from "../components/EMSHeader";
import EmployeeCreate from "../components/EmployeeCreate";

export default class EmployeeCreatePage extends React.Component {

    async createEmployee(employee) {
        const query = `mutation {
            createEmployee(employee: {
                first_name: "${employee.first_name}",
                last_name: "${employee.last_name}",
                age: ${employee.age},
                date_of_joining: "${employee.date_of_joining}",
                title: ${employee.title},
                department: ${employee.department},
                employee_type: ${employee.employee_type}
            }) {
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

        const response = await fetch('/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query })
        });

        const result = await response.json();
        console.log("Created employee: ", result);
        // this.loadEmployeesData();
    }

    render() {
        return (
            <div className="main-container">
            <EMSHeader />
            <div className="ems-container">
                <div class="form-main-container">
                    <EmployeeCreate createEmployee={this.createEmployee} /> 
                </div>
            </div>
            </div>
        );
    }
}
