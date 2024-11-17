import React from "react";
import EMSHeader from "./EMSHeader";
import EmployeeSearch from "./EmployeeSearch";
import EmployeeTable from "./EmployeeTable";
import EmployeeCreate from "./EmployeeCreate";

// Parent component that includes all other components
export default class EmployeeDirectory extends React.Component {
    constructor() {
        super();

        // State to store employees
        this.state = { employeesList: [] };

        this.createEmployee = this.createEmployee.bind(this);
    }

    async loadEmployeesData() {

        const query = `query {
            employeesList {
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
        console.log("Result being returned: ", result);
        this.setState({ employeesList: result.data.employeesList });
    }

    componentDidMount() {
        this.loadEmployeesData();
    }

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
        console.log("Result being returned: ", result);
        this.loadEmployeesData();
    }

    render() {
        return (
            <div className="main-container">
                <EMSHeader />
                <div className="ems-container">
                    <div>
                        <EmployeeSearch />
                        <EmployeeTable employees={this.state.employeesList} />
                    </div>
                    <div>
                        <EmployeeCreate createEmployee={this.createEmployee} errors={this.state.inputErrorList} />
                    </div>
                </div>
            </div>
        )
    }
}