// Parent component that includes all other components
class EmployeeDirectory extends React.Component {
  constructor() {
    super();

    // State to store employees
    this.state = {
      employeesList: []
    };
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
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    });
    const result = await response.json();
    console.log("Result being returned: ", result);
    this.setState({
      employeesList: result.data.employeesList
    });
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
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query
      })
    });
    const result = await response.json();
    console.log("Result being returned: ", result);
    this.loadEmployeesData();
  }
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "main-container"
    }, /*#__PURE__*/React.createElement(EMSHeader, null), /*#__PURE__*/React.createElement("div", {
      className: "ems-container"
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EmployeeSearch, null), /*#__PURE__*/React.createElement(EmployeeTable, {
      employees: this.state.employeesList
    })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(EmployeeCreate, {
      createEmployee: this.createEmployee,
      errors: this.state.inputErrorList
    }))));
  }
}

// Header component
class EMSHeader extends React.Component {
  render() {
    const logoStyle = {
      width: "5em"
    };
    const headerContainerStyle = {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    };
    return /*#__PURE__*/React.createElement("div", {
      style: headerContainerStyle
    }, /*#__PURE__*/React.createElement("img", {
      src: "./images/ems-logo.png",
      style: logoStyle
    }), /*#__PURE__*/React.createElement("h1", null, "Employee Management System"));
  }
}

// Employee search component
class EmployeeSearch extends React.Component {
  render() {
    return /*#__PURE__*/React.createElement("div", {
      className: "section search-container"
    }, /*#__PURE__*/React.createElement("input", {
      type: "search",
      placeholder: "Filter by keyword..."
    }));
  }
}

// Employee table component
class EmployeeTable extends React.Component {
  render() {
    const rowStyle = {
      padding: 10,
      textAlign: "center",
      verticalAlign: "middle",
      border: "1px solid orange",
      margin: 0
    };
    const headerStyle = {
      padding: 10,
      backgroundColor: "#ffa50066"
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "section table-container"
    }, /*#__PURE__*/React.createElement("table", {
      border: "1"
    }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", {
      style: headerStyle
    }, "First Name"), /*#__PURE__*/React.createElement("th", {
      style: headerStyle
    }, "Last Name"), /*#__PURE__*/React.createElement("th", {
      style: headerStyle
    }, "Age"), /*#__PURE__*/React.createElement("th", {
      style: headerStyle
    }, "Date of Joining"), /*#__PURE__*/React.createElement("th", {
      style: headerStyle
    }, "Title"), /*#__PURE__*/React.createElement("th", {
      style: headerStyle
    }, "Department"), /*#__PURE__*/React.createElement("th", {
      style: headerStyle
    }, "Employee Type"), /*#__PURE__*/React.createElement("th", {
      style: headerStyle
    }, "Current Status"))), /*#__PURE__*/React.createElement("tbody", null, this.props.employees.length > 0 ? this.props.employees.map(employee => /*#__PURE__*/React.createElement(EmployeeRow, {
      employee: employee,
      key: employee._id,
      rowStyle: rowStyle
    })) :
    /*#__PURE__*/
    // No employees availble message
    React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      colSpan: "8",
      style: {
        textAlign: "center",
        padding: "10px",
        fontStyle: "italic"
      }
    }, "No available employees. ", this.props.employees)))));
  }
}

// Employee row component
class EmployeeRow extends React.Component {
  // Function to format date
  formatDate(dateString) {
    const date = new Date(dateString);
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    return date.toLocaleDateString('en-US', options).replace(',', '');
  }
  render() {
    const employee = this.props.employee;
    const CSSstyle = this.props.rowStyle;
    return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
      style: CSSstyle
    }, " ", employee.first_name, " "), /*#__PURE__*/React.createElement("td", {
      style: CSSstyle
    }, " ", employee.last_name, " "), /*#__PURE__*/React.createElement("td", {
      style: CSSstyle
    }, " ", employee.age, " "), /*#__PURE__*/React.createElement("td", {
      style: CSSstyle
    }, " ", this.formatDate(employee.date_of_joining), " "), /*#__PURE__*/React.createElement("td", {
      style: CSSstyle
    }, " ", employee.title, " "), /*#__PURE__*/React.createElement("td", {
      style: CSSstyle
    }, " ", employee.department, " "), /*#__PURE__*/React.createElement("td", {
      style: CSSstyle
    }, " ", employee.employee_type, " "), /*#__PURE__*/React.createElement("td", {
      style: CSSstyle
    }, " ", employee.current_status, " "));
  }
}

// Field error component : displays any error message for each field on create employee
class FieldError extends React.Component {
  render() {
    const {
      errorMessage
    } = this.props;
    const errorStyle = {
      color: "red",
      fontSize: "0.85em"
    };
    const errorIconStyle = {
      width: "1em",
      marginRight: "0.5em"
    };
    if (!errorMessage) return null;
    return /*#__PURE__*/React.createElement("div", {
      style: errorStyle,
      className: "error-message"
    }, /*#__PURE__*/React.createElement("img", {
      src: "./images/alert-icon.png",
      style: errorIconStyle
    }), errorMessage);
  }
}

// Create employee component
class EmployeeCreate extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);

    // State to store employee input errors
    this.state = {
      errors: []
    };
  }

  // Function to validate user input
  validateInput(employee) {
    const errors = {};
    const namePattern = /^[a-zA-Z\s-]+$/;

    /* Field validation */
    // First name
    if (employee.first_name) {
      // Validate first name format
      if (!namePattern.test(employee.first_name)) {
        errors.first_name = 'First name cannot contain special characters.';
      }
    } else {
      errors.first_name = 'First name is required.';
    }
    // Last name
    if (employee.last_name) {
      // Validate last name format
      if (!namePattern.test(employee.last_name)) {
        errors.last_name = 'Last name cannot contain special characters.';
      }
    } else {
      errors.last_name = 'Last name is required.';
    }
    // Age
    if (employee.age) {
      // Validate if employee age is between 20 to 70
      if (employee.age < 20 || employee.age > 70) {
        errors.age = 'Age must be between 20 and 70.';
      }
    } else {
      errors.age = 'Age is required.';
    }
    // Date of joining
    if (employee.date_of_joining) {
      // Validate if joining date input is in the future
      const joiningDate = new Date(employee.date_of_joining);
      const today = new Date();
      if (joiningDate > today) {
        errors.date_of_joining = 'Joining date cannot be in the future.';
      }
    } else {
      errors.date_of_joining = 'Joining date is required.';
    }
    this.setState({
      errors
    });
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
    if (this.validateInput(employee)) {
      // Create employee
      this.props.createEmployee(employee);

      // Clear form
      this.clearForm(forms);
    }
  }
  render() {
    const formStyle = {
      borderRadius: 5,
      backgroundColor: "#fff",
      borderRadius: 5
    };
    const elementStyle = {
      marginTop: "0.7em",
      marginBottom: "0.7em",
      width: "100%"
    };
    const btnStyle = {
      marginTop: "1.5em",
      marginBottom: "1.5em",
      borderRadius: "1em",
      backgroundColor: "orange",
      border: "none",
      textTransform: "uppercase",
      letterSpacing: 1
    };
    return /*#__PURE__*/React.createElement("div", {
      className: "section form-container"
    }, /*#__PURE__*/React.createElement("form", {
      name: "employeeAdd",
      onSubmit: this.handleSubmit,
      style: formStyle
    }, /*#__PURE__*/React.createElement("h2", null, "Create New Employee"), /*#__PURE__*/React.createElement("div", {
      style: elementStyle,
      className: "form-field"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "first_name"
    }, "First Name"), /*#__PURE__*/React.createElement(FieldError, {
      errorMessage: this.state.errors.first_name
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "first_name"
    })), /*#__PURE__*/React.createElement("div", {
      style: elementStyle,
      className: "form-field"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "last_name"
    }, "Last Name"), /*#__PURE__*/React.createElement(FieldError, {
      errorMessage: this.state.errors.last_name
    }), /*#__PURE__*/React.createElement("input", {
      type: "text",
      name: "last_name"
    })), /*#__PURE__*/React.createElement("div", {
      style: elementStyle,
      className: "form-field"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "age"
    }, "Age"), /*#__PURE__*/React.createElement(FieldError, {
      errorMessage: this.state.errors.age
    }), /*#__PURE__*/React.createElement("input", {
      type: "number",
      name: "age"
    })), /*#__PURE__*/React.createElement("div", {
      style: elementStyle,
      className: "form-field"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "date_of_joining"
    }, "Date of Joining"), /*#__PURE__*/React.createElement(FieldError, {
      errorMessage: this.state.errors.date_of_joining
    }), /*#__PURE__*/React.createElement("input", {
      type: "date",
      name: "date_of_joining"
    })), /*#__PURE__*/React.createElement("div", {
      style: elementStyle,
      className: "form-field"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "title"
    }, "Title"), /*#__PURE__*/React.createElement("select", {
      id: "title",
      name: "title"
    }, /*#__PURE__*/React.createElement("option", {
      value: "Employee"
    }, "Employee"), /*#__PURE__*/React.createElement("option", {
      value: "Manager"
    }, "Manager"), /*#__PURE__*/React.createElement("option", {
      value: "Director"
    }, "Director"), /*#__PURE__*/React.createElement("option", {
      value: "VP"
    }, "VP"))), /*#__PURE__*/React.createElement("div", {
      style: elementStyle,
      className: "form-field"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "department"
    }, "Department"), /*#__PURE__*/React.createElement("select", {
      id: "department",
      name: "department"
    }, /*#__PURE__*/React.createElement("option", {
      value: "IT"
    }, "IT"), /*#__PURE__*/React.createElement("option", {
      value: "Marketing"
    }, "Marketing"), /*#__PURE__*/React.createElement("option", {
      value: "HR"
    }, "HR"), /*#__PURE__*/React.createElement("option", {
      value: "Engineering"
    }, "Engineering"))), /*#__PURE__*/React.createElement("div", {
      style: elementStyle,
      className: "form-field"
    }, /*#__PURE__*/React.createElement("label", {
      htmlFor: "employee_type"
    }, "Employee Type"), /*#__PURE__*/React.createElement("select", {
      id: "employee_type",
      name: "employee_type"
    }, /*#__PURE__*/React.createElement("option", {
      value: "FullTime"
    }, "Full-Time"), /*#__PURE__*/React.createElement("option", {
      value: "PartTime"
    }, "Part-Time"), /*#__PURE__*/React.createElement("option", {
      value: "Contract"
    }, "Contract"), /*#__PURE__*/React.createElement("option", {
      value: "Seasonal"
    }, "Seasonal"))), /*#__PURE__*/React.createElement("div", {
      className: "form-field"
    }, /*#__PURE__*/React.createElement("button", {
      style: btnStyle
    }, "Add"))));
  }
}
const element = /*#__PURE__*/React.createElement(EmployeeDirectory, null);
ReactDOM.render(element, document.getElementById('contents'));