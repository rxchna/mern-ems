const { getDb } = require('./db');

// Method to get all employees
async function employeesList(_, { employee_type }) {
    const db = getDb();
    const filter = {};

    if (employee_type) filter.employee_type = employee_type;

    // Get list of employees from employees collection
    const employees = await db.collection('employees').find(filter).toArray();

    return employees;
}

// Method to insert new employee
async function createEmployee(_, {employee: employee}) {
    const db = getDb();

    // Insert employee into collection
    const result = await db.collection('employees').insertOne({
        ...employee,
        current_status: 1, // Set default value of status (working)
    });

    // Retrieve inserted employee using insertedId
    const savedEmployee = await db.collection('employees').findOne({ _id: result.insertedId });

    // Return saved employee
    return savedEmployee;
}

module.exports = { createEmployee, employeesList };