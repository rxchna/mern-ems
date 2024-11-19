import React from "react";
import EMSHeader from "../components/EMSHeader";
import EmployeeDetails from "../components/EmployeeDetails";

export default class EmployeeViewPage extends React.Component {

    constructor(props) {
        super(props);
        console.log("##rp: IN")
        this.state = {
            current_employee: null
        };
    }

    componentDidMount() {
        const { id } = this.props.match.params; // Get employee ID from URL params
        this.fetchEmployeeData(id);
    }

    // Function to fetch employee data
    async fetchEmployeeData(id) {
        const query = `query($id: ID!) {
            getEmployee(id: $id) {
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

        const variables = { id };

        const response = await fetch('/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query, variables }),
        });

        const result = await response.json();
        console.log("##rp employee returned: ", result);
        this.setState({ current_employee: result.data.getEmployee }); // Update state with employee data
    }

    render() {
        console.log("##rp: IN render");
        const { current_employee } = this.state;
        console.log("##rp current employee: ", current_employee);
        return (
            <div className="main-container">
                <EMSHeader />
                <div className="ems-container">
                    <div className="form-main-container">
                        <EmployeeDetails employee={current_employee} mode="view" />
                    </div>
                </div>
            </div>
        );
    }
}
