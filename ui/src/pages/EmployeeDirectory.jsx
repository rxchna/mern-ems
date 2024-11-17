import React from "react";
import EMSHeader from "../components/EMSHeader";
import EmployeeSearch from "../components/EmployeeSearch";
import EmployeeTable from "../components/EmployeeTable";

// Parent component that includes all other components
export default class EmployeeDirectory extends React.Component {
    constructor() {
        super();

        // State to store employees
        this.state = { employeesList: [] };

        // this.createEmployee = this.createEmployee.bind(this);
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

    render() {
        return (
            <div className="main-container">
                <EMSHeader />
                <div className="ems-container">
                    <div>
                        <EmployeeSearch />
                        <EmployeeTable employees={this.state.employeesList} />
                    </div>
                </div>
            </div>
        )
    }
}