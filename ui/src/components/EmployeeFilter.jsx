import React from "react";

// Employee search component
export default class EmployeeFilter extends React.Component {
    constructor() {
        super();
        this.state = { selectedType: null };
    }

    componentDidMount() {
        this.updateSelectedType();
        // 'hashchange' event listens for change in the URL's hash (the part after the #)
        window.addEventListener("hashchange", this.updateSelectedType);
    }

    componentWillUnmount() {
        window.removeEventListener("hashchange", this.updateSelectedType);
    }

    // Function to parse URL’s hash to extract the employee_type query parameter
    updateSelectedType = () => {
        const params = new URLSearchParams(window.location.hash.split("?")[1]);
        this.setState({ selectedType: params.get("employee_type") });
    };

    render() {
        const { selectedType } = this.state;

        const getActiveClass = (employeeType) => {
            if (!employeeType && !selectedType) return "filter-active"; // Default to "All Employees"
            return employeeType === selectedType ? "filter-active" : "";
        };

        return (
            <div className="section filter-container">
                <a href="/#/employees" className={`filter-options ${getActiveClass(null)}`}>
                    All Employees
                </a>
                <a href="/#/employees?employee_type=FullTime" className={`filter-options ${getActiveClass("FullTime")}`}>
                    Full-Time Employees
                </a>
                <a href="/#/employees?employee_type=PartTime" className={`filter-options ${getActiveClass("PartTime")}`}>
                    Part-Time Employees
                </a>
                <a href="/#/employees?employee_type=Contract" className={`filter-options ${getActiveClass("Contract")}`}>
                    Contract Employees
                </a>
                <a href="/#/employees?employee_type=Seasonal" className={`filter-options ${getActiveClass("Seasonal")}`}>
                    Seasonal Employees
                </a>
            </div>
        );
    }
}
