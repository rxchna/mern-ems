import React from "react";
import FormFieldError from "./FormFieldError";

// Create employee component
export default class EmployeeCreate extends React.Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);

        // State to store employee input errors
        this.state = { errors: [] };
    }

    // Function to validate user input
    validateInput(employee) {
        const errors = {};
        const namePattern = /^[a-zA-Z\s-]+$/;

        /* Field validation */
        // First name
        if(employee.first_name) {
            // Validate first name format
            if (!namePattern.test(employee.first_name)) {
                errors.first_name = 'First name cannot contain special characters.';
            }
        } else {
            errors.first_name = 'First name is required.';
        }
        // Last name
        if(employee.last_name) {
            // Validate last name format
            if (!namePattern.test(employee.last_name)) {
                errors.last_name = 'Last name cannot contain special characters.';
            }
        } else {
            errors.last_name = 'Last name is required.';
        }
        // Age
        if(employee.age) {
            // Validate if employee age is between 20 to 70
            if (employee.age < 20 || employee.age > 70) {
                errors.age = 'Age must be between 20 and 70.';
            }
        } else {
            errors.age = 'Age is required.';
        }
        // Date of joining
        if(employee.date_of_joining) {
            // Validate if joining date input is in the future
            const joiningDate = new Date(employee.date_of_joining);
            const today = new Date();
            if (joiningDate > today) {
                errors.date_of_joining = 'Joining date cannot be in the future.';
            }
        } else {
            errors.date_of_joining = 'Joining date is required.';
        }

        this.setState({ errors });

        return Object.keys(errors).length == 0; // return true if no errors
    }

    // Function to clear form after employee is created
    clearForm(form) {
        form.first_name.value = '';
        form.last_name.value = '';
        form.age.value = '';
        form.date_of_joining.value = '';
        form.title.selectedIndex = 0; // reset the select element to the first option
        form.department.selectedIndex = 0;
        form.employee_type.selectedIndex = 0;
    }

    handleSubmit(e) {
        e.preventDefault();
        const forms = document.forms.employeeAdd;
        const employee = { 
            first_name: forms.first_name.value,
            last_name: forms.last_name.value,
            age: forms.age.value,
            date_of_joining: forms.date_of_joining.value,
            title: forms.title.value,
            department: forms.department.value,
            employee_type: forms.employee_type.value
        };
        console.log("Employee is ", employee);

        // Validate user input
        if(this.validateInput(employee)){
            // Create employee
            this.props.createEmployee(employee);

            // Clear form
            this.clearForm(forms);
        }
    }

    render() {
        const formStyle = { borderRadius: 5, backgroundColor: "#fff", borderRadius: 5 };
        const elementStyle = { marginTop: "0.7em", marginBottom: "0.7em", width: "100%" };
        const btnStyle = { marginTop: "1.5em", marginBottom: "1.5em", borderRadius: "1em", backgroundColor: "orange", border: "none", textTransform: "uppercase", letterSpacing: 1 };

        return (
            <div className="section form-container">
                <form name="employeeAdd" onSubmit={this.handleSubmit} style={formStyle}>
                    <h2>Create New Employee</h2>
                    
                    <div style={elementStyle} className="form-field">
                        <label htmlFor="first_name">First Name</label>
                        <FormFieldError errorMessage={this.state.errors.first_name} />
                        <input type="text" name="first_name" />
                    </div>
                    <div style={elementStyle} className="form-field">
                        <label htmlFor="last_name">Last Name</label>
                        <FormFieldError errorMessage={this.state.errors.last_name} />
                        <input type="text" name="last_name" />
                    </div>
                    <div style={elementStyle} className="form-field">
                        <label htmlFor="age">Age</label>
                        <FormFieldError errorMessage={this.state.errors.age} />
                        <input type="number" name="age" />
                    </div>
                    <div style={elementStyle} className="form-field">
                        <label htmlFor="date_of_joining">Date of Joining</label>
                        <FormFieldError errorMessage={this.state.errors.date_of_joining} />
                        <input type="date" name="date_of_joining" />
                    </div>
                    <div style={elementStyle} className="form-field">
                        <label htmlFor="title">Title</label>
                        <select id="title" name="title">
                            <option value="Employee">Employee</option>
                            <option value="Manager">Manager</option>
                            <option value="Director">Director</option>
                            <option value="VP">VP</option>
                        </select>
                    </div>
                    <div style={elementStyle} className="form-field">
                        <label htmlFor="department">Department</label>
                        <select id="department" name="department">
                            <option value="IT">IT</option>
                            <option value="Marketing">Marketing</option>
                            <option value="HR">HR</option>
                            <option value="Engineering">Engineering</option>
                        </select>
                    </div>
                    <div style={elementStyle} className="form-field">
                        <label htmlFor="employee_type">Employee Type</label>
                        <select id="employee_type" name="employee_type">
                            <option value="FullTime">Full-Time</option>
                            <option value="PartTime">Part-Time</option>
                            <option value="Contract">Contract</option>
                            <option value="Seasonal">Seasonal</option>
                        </select>
                    </div>
                    <div className="form-field">
                        <button style={btnStyle}>Add</button>
                    </div>
                </form>
            </div>
        );
    }
}