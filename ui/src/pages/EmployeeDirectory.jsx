import React from "react";
import EMSHeader from "../components/EMSHeader";
import EmployeeFilter from "../components/EmployeeFilter";
import EmployeeTable from "../components/EmployeeTable";

// Parent component that includes all other components
export default class EmployeeDirectory extends React.Component {
    constructor() {
        super();

        // State to store employees
        this.state = { employeesList: [] };
    }

    async loadEmployeesData() {

        const { search } = this.props.location;
        const params = new URLSearchParams(search);
        const variables = {};

        if(params.get('employee_type')) {
            variables.employee_type = params.get('employee_type');
        }

        const query = `query($employee_type: EmployeeType) {
            employeesList(employee_type: $employee_type) {
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
            body: JSON.stringify({ query, variables })
        });

        const result = await response.json();
        console.log("Result being returned: ", result);
        this.setState({ employeesList: result.data.employeesList });
    }

    componentDidUpdate(prevProps) { 
        const prevSearch = prevProps.location.search; 
        const search = this.props.location.search;
        if (prevSearch !== search) { 
            this.loadEmployeesData();
        }
    }

    componentDidMount(prevProps) {
        this.loadEmployeesData();
    }

    render() {
        return (
            <div className="main-container">
                <EMSHeader />
                <div className="ems-container">
                    <div>
                        <EmployeeFilter />
                        <EmployeeTable employees={this.state.employeesList} />
                    </div>
                </div>
            </div>
        )
    }
}